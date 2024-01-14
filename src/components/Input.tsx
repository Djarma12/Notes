import { ChangeEventHandler } from 'react';

type InputType = {
  placeHolder: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
};

function Input({ placeHolder, value, onChange }: InputType) {
  return (
    <input
      className="block w-96 rounded-md border border-gray-300 bg-gray-50 px-5 py-4 text-xl outline-none transition-all focus:border-gray-400 active:border-gray-400"
      placeholder={placeHolder}
      value={value}
      onChange={onChange}
    />
  );
}

export default Input;
