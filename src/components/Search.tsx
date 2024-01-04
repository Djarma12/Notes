import { ReactNode } from 'react';

type ChildrenType = {
  children: ReactNode;
};

function Search({ children }: ChildrenType) {
  return <div className="flex justify-between">{children}</div>;
}

export default Search;
