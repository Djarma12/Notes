import { Ref } from 'react';

type TextAreaType = {
  placeHolder: string;
  textAreaBody?: Ref<HTMLTextAreaElement>;
  defaultValue?: string;
};

function TextArea({ placeHolder, textAreaBody, defaultValue }: TextAreaType) {
  return (
    <textarea
      className="block h-96 w-full rounded-md border border-gray-300 bg-gray-50 px-5 py-4 text-xl outline-none transition-all focus:border-gray-400 active:border-gray-400"
      placeholder={placeHolder}
      ref={textAreaBody}
      defaultValue={defaultValue}
    ></textarea>
  );
}

export default TextArea;
