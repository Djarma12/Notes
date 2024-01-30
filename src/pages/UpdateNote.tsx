import { useParams } from 'react-router-dom';
import Form from '../components/Form';
import Header from '../components/Header';
import Heading from '../components/Heading';
import Main from '../components/Main';
import { useNote } from '../context/NoteContext';
import NoteExist from '../components/NoteExist';

function UpdateNote() {
  const { noteId } = useParams();
  const { getActiveNote } = useNote();
  const noteDetail = getActiveNote(Number(noteId));

  return (
    <NoteExist noteDetailID={noteDetail?.id}>
      <Header>
        <Heading>
          Update <b className="text-blue-600">{noteDetail?.title}</b> note
        </Heading>
      </Header>
      <Main>
        <Form noteDetail={noteDetail} />
      </Main>
    </NoteExist>
  );
}

export default UpdateNote;
