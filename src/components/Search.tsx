import { ReactNode } from 'react';

type ChildrenType = {
  children: ReactNode;
};

function Search({ children }: ChildrenType) {
  return (
    <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
      {children}
    </div>
  );
}

export default Search;
