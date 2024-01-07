import { ChangeEventHandler, Ref } from 'react';

type InputType = {
  placeHolder: string;
  defaultValue?: string;
  inputTitle?: Ref<HTMLInputElement>;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

function Input({ placeHolder, inputTitle, defaultValue, onChange }: InputType) {
  return (
    <input
      className="block w-96 rounded-md border border-gray-300 bg-gray-50 px-5 py-4 text-xl outline-none transition-all focus:border-gray-400 active:border-gray-400"
      placeholder={placeHolder}
      ref={inputTitle}
      defaultValue={defaultValue}
      onChange={onChange}
    />
  );
}

export default Input;
