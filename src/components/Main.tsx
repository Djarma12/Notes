import { ReactNode } from 'react';

type ChildrenType = {
  children: ReactNode;
};

function Main({ children }: ChildrenType) {
  return <main className="mx-auto max-w-screen-xl px-5">{children}</main>;
}

export default Main;
