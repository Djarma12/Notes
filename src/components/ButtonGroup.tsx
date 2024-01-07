import { ReactNode } from 'react';

type ChildrenType = {
  children: ReactNode;
};

function ButtonGroup({ children }: ChildrenType) {
  return (
    <div className="flex flex-wrap justify-center gap-5 sm:justify-end">
      {children}
    </div>
  );
}

export default ButtonGroup;
