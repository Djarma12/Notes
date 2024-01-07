import {
  MutableRefObject,
  ReactElement,
  cloneElement,
  createContext,
  useContext,
  useState,
} from 'react';
import { createPortal } from 'react-dom';

import Button from './Button';
import ButtonGroup from './ButtonGroup';
import { useOutsideClick } from '../hooks/useOutsideClick';

type ChildrenType = {
  children?: ReactElement | ReactElement[];
};

type ModalContextType = {
  openName: string;
  open: (name: string) => void;
  close: () => void;
};

const ModalContext = createContext<ModalContextType>({
  openName: '',
  open: () => {},
  close: () => {},
});

function Modal({ children }: ChildrenType) {
  const [openName, setOpenName] = useState('');

  const close = () => setOpenName('');
  const open = (name: string) => setOpenName(name);

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

type OpenType = ChildrenType & {
  opens: string;
};

function Open({ opens: opensWindowName, children }: OpenType) {
  const { open } = useContext(ModalContext);

  return cloneElement(children as ReactElement, {
    onClick: () => open(opensWindowName),
  });
}

type WindowType = ChildrenType & {
  name: string;
};

function Window({ name, children }: WindowType) {
  const { openName, close } = useContext(ModalContext);
  const ref = useOutsideClick<HTMLDivElement>(close);

  if (name !== openName) return null;

  return createPortal(
    <div className="bg-backdrop-color z-1000 fixed left-0 top-0 h-screen w-full backdrop-blur-md transition-all duration-500">
      <div
        className="fixed left-1/2 top-1/2 w-[30rem] -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-gray-300 px-16 py-12 shadow-lg transition-all duration-500 md:w-auto"
        ref={ref as MutableRefObject<HTMLDivElement>}
      >
        <ButtonGroup>
          <Button variation="secondary" onClick={close}>
            &#x2716;
          </Button>
        </ButtonGroup>
        <div>
          {cloneElement(children as ReactElement, { onCloseModal: close })}
        </div>
      </div>
    </div>,
    document.body,
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
