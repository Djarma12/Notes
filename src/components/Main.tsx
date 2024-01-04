import { ReactNode } from 'react';

type ChildrenType = {
  children: ReactNode;
};

function Main({ children }: ChildrenType) {
  return <div className="mx-auto max-w-screen-xl px-5">{children}</div>;
}

export default Main;
