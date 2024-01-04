import { ReactNode } from 'react';

type ChildrenType = {
  children: ReactNode;
};

function Header({ children }: ChildrenType) {
  return (
    <header className="mb-6 flex items-center justify-between px-32 py-16 ">
      {children}
    </header>
  );
}

export default Header;
