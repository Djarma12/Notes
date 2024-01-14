import { FormEvent, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from './Button';
import ButtonGroup from './ButtonGroup';
import Input from './Input';
import Search from './Search';
import SelectOption, { SelectValues } from './SelectOption';
import TextArea from './TextArea';

import { NoteType, useNote } from '../context/NoteContext';

type FormType = {
  noteDetail?: NoteType;
};

function Form({ noteDetail }: FormType) {
  const navigate = useNavigate();
  const { addNote, updateNote } = useNote();
  const [tags, setTags] = useState<SelectValues[]>(noteDetail?.tags || []);
  const inputTitle = useRef<HTMLInputElement>(null);
  const textAreaBody = useRef<HTMLTextAreaElement>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (
      inputTitle.current?.value &&
      textAreaBody.current?.value &&
      !!tags.length
    ) {
      const noteObj = {
        title: inputTitle.current!.value,
        body: textAreaBody.current!.value,
        tags,
      };
      noteDetail?.id
        ? updateNote({ ...noteObj, id: noteDetail.id })
        : addNote(noteObj);
      navigate('/');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-10">
      <Search>
        <Input
          placeHolder="Title"
          inputTitle={inputTitle}
          defaultValue={noteDetail?.title}
        />
        <SelectOption setTags={setTags} defaultValue={noteDetail?.tags} />
      </Search>
      <TextArea
        placeHolder="Body"
        textAreaBody={textAreaBody}
        defaultValue={noteDetail?.body}
      />
      <ButtonGroup>
        <Button type="submit" variation="primary">
          {noteDetail ? 'Update' : 'Save'}
        </Button>
        <Button
          type="reset"
          variation="secondary"
          onClick={() => navigate(`/${noteDetail?.id || ''}`)}
        >
          Cancle
        </Button>
      </ButtonGroup>
    </form>
  );
}

export default Form;
