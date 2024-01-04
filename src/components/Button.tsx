import { MouseEventHandler, ReactNode } from 'react';

type ButtonProp = {
  variation: 'primary' | 'secondary' | 'danger';
  type?: 'submit' | 'reset';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
};

type Button = {
  primary: string;
  secondary: string;
  danger: string;
};

const buttonVariation: Button = {
  primary:
    'bg-sky-400 hover:bg-sky-600 px-7 py-3 text-xl font-semibold rounded transition text-slate-100',
  secondary:
    'bg-gray-50 hover:bg-gray-200 px-7 py-3 text-xl font-semibold rounded transition border',
  danger:
    'bg-red-50 hover:bg-red-100 px-7 py-3 text-xl text-red-600 font-semibold rounded transition border border-2 border-red-500',
};

function Button({ variation, type, onClick, children }: ButtonProp) {
  return (
    <button
      type={type}
      className={buttonVariation[variation]}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
