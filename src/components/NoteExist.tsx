import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from './Button';
import Header from './Header';
import Heading from './Heading';
import { NoteType } from '../context/NoteContext';

export type NoteExistType = {
  noteDetailID: number | undefined;
  children: ReactNode;
};

function NoteExist({ noteDetailID, children }: NoteExistType) {
  const navigate = useNavigate();
  return (
    <>
      {noteDetailID ? (
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
