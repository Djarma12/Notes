import { ReactElement, ReactNode } from 'react';

type ChildrenType = {
  children?: ReactElement | ReactElement[] | undefined;
};

function NoteList({ children }: ChildrenType) {
  return <ul className="mt-8 grid grid-cols-4 gap-10">{children}</ul>;
}

export default NoteList;
