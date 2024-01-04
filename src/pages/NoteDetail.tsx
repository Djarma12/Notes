import { useNavigate, useParams } from 'react-router-dom';
import { useNote } from '../context/NoteContext';
import Header from '../components/Header';
import Heading from '../components/Heading';
import ButtonGroup from '../components/ButtonGroup';
import Button from '../components/Button';
import Main from '../components/Main';
import NoteTagList from '../components/NoteTagList';
import NoteExist from '../components/NoteExist';

function NoteDetail() {
  const navigate = useNavigate();
  const { noteId } = useParams();
  const { getActiveNote, removeNote } = useNote();
  const noteDetail = getActiveNote(Number(noteId));

  function handleRemoveNote() {
    removeNote(Number(noteId));
    navigate('/');
  }

  return (
    <NoteExist noteDetail={noteDetail}>
      <Header>
        <Heading>{noteDetail?.title}</Heading>
        <ButtonGroup>
          <Button
            variation="primary"
            onClick={() => navigate(`/${noteId}/update`)}
          >
            Update
          </Button>
          <Button variation="danger" onClick={handleRemoveNote}>
            Remove
          </Button>
          <Button variation="secondary" onClick={() => navigate('/')}>
            Go Back
          </Button>
        </ButtonGroup>
      </Header>
      <Main>
        <NoteTagList tags={noteDetail?.tags} />
        <p className="mt-12">{noteDetail?.body}</p>
      </Main>
    </NoteExist>
  );
}

export default NoteDetail;
