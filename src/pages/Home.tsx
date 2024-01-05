import { useNavigate } from 'react-router-dom';

import Header from '../components/Header';
import Heading from '../components/Heading';
import Main from '../components/Main';
import Search from '../components/Search';
import SelectOption, { SelectValues } from '../components/SelectOption';
import Input from '../components/Input';
import Button from '../components/Button';
import ButtonGroup from '../components/ButtonGroup';
import NoteList from '../components/NoteList';
import NoteItem from '../components/NoteItem';

import { useNote } from '../context/NoteContext';
import { ChangeEvent, useState } from 'react';

function Home() {
  const navigate = useNavigate();
  const [tags, setTags] = useState<SelectValues[]>([]);
  const [search, setSearch] = useState<string>('');
  const { notes, removeAll } = useNote();

  return (
    <>
      <Header>
        <Heading>Notes</Heading>
        <ButtonGroup>
          <Button variation="primary" onClick={() => navigate('/new')}>
            Create
          </Button>
          {notes.length > 0 && (
            <Button variation="danger" onClick={removeAll}>
              Remove All
            </Button>
          )}
        </ButtonGroup>
      </Header>
      <Main>
        <Search>
          <Input
            placeHolder="Search..."
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setSearch(e.target.value)
            }
          />
          <SelectOption setTags={setTags} />
        </Search>
        <NoteList>
          {notes
            .filter((note) =>
              search.toLowerCase() === ''
                ? note
                : note.title.toLowerCase().includes(search.toLowerCase()),
            )
            .filter((note) =>
              tags.length === 0
                ? note
                : note.tags.some((tag) =>
                    tags.some((desiredTag) => desiredTag.value === tag.value),
                  ),
            )
            .map((note) => <NoteItem key={note.id} note={note} />)
            .reverse()}
        </NoteList>
      </Main>
    </>
  );
}

export default Home;
