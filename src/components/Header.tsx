import { ReactNode } from 'react';

type ChildrenType = {
  children: ReactNode;
};

function Header({ children }: ChildrenType) {
  return (
    <header className="mb-6 flex flex-col items-center justify-between gap-6 px-5 py-8 sm:flex-row md:py-10 2xl:px-32 2xl:py-16">
      {children}
    </header>
  );
}

export default Header;
