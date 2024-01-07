import { ReactElement } from 'react';

type ChildrenType = {
  children?: ReactElement | ReactElement[] | undefined;
};

function NoteList({ children }: ChildrenType) {
  return (
    <ul className="ml-auto mr-auto grid grid-cols-1 justify-items-center gap-10 overflow-y-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {children}
    </ul>
  );
}

export default NoteList;
