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
  const [title, setTitle] = useState<string>(noteDetail?.title || '');
  // const inputRef = useRef<HTMLInputElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (title && textAreaRef.current?.value && !!tags.length) {
      const noteObj = {
        title,
        body: textAreaRef.current!.value,
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
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <SelectOption setTags={setTags} defaultValue={noteDetail?.tags} />
      </Search>
      <TextArea
        placeHolder="Body"
        textAreaRef={textAreaRef}
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
