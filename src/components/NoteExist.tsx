import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from './Button';
import Header from './Header';
import Heading from './Heading';
import { NoteType } from '../context/NoteContext';

type NoteExist = {
  noteDetail: NoteType | undefined;
  children: ReactNode;
};

function NoteExist({ noteDetail, children }: NoteExist) {
  const navigate = useNavigate();
  return (
    <>
      {noteDetail ? (
        children
      ) : (
        <Header>
          <Heading>Note does not exist</Heading>
          <Button variation="secondary" onClick={() => navigate('/')}>
            Go back
          </Button>
        </Header>
      )}
    </>
  );
}

export default NoteExist;
