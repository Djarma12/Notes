import { useNavigate, useParams } from 'react-router-dom';
import Form from '../components/Form';
import Header from '../components/Header';
import Heading from '../components/Heading';
import Main from '../components/Main';
import { useNote } from '../context/NoteContext';
import NoteExist from '../components/NoteExist';
import Button from '../components/Button';
import ButtonGroup from '../components/ButtonGroup';

function UpdateNote() {
  const navigate = useNavigate();
  const { noteId } = useParams();
  const { getActiveNote, updateNote } = useNote();
  const noteDetail = getActiveNote(Number(noteId));

  return (
    <NoteExist noteDetail={noteDetail}>
      <Header>
        <Heading>
          Update <b className="text-blue-600">{noteDetail?.title}</b> note
        </Heading>
        {/* <ButtonGroup>
          <Button variation="secondary" onClick={() => navigate(`/${noteId}`)}>
            Cancle
          </Button>
        </ButtonGroup> */}
      </Header>
      <Main>
        <Form noteDetail={noteDetail} />
      </Main>
    </NoteExist>
  );
}

export default UpdateNote;
