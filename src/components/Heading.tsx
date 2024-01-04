import { ReactNode } from 'react';

type ChildrenType = {
  children: ReactNode;
};

function Heading({ children }: ChildrenType) {
  return <h1 className="text-6xl">{children}</h1>;
}

export default Heading;
