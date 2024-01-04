import { ReactNode } from 'react';

type ChildrenType = {
  children: ReactNode;
};

function ButtonGroup({ children }: ChildrenType) {
  return <div className="flex justify-end gap-5">{children}</div>;
}

export default ButtonGroup;
