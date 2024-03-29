import { useNavigate, useParams } from 'react-router-dom';
import { useNote } from '../context/NoteContext';
import Header from '../components/Header';
import Heading from '../components/Heading';
import ButtonGroup from '../components/ButtonGroup';
import Button from '../components/Button';
import Main from '../components/Main';
import NoteTagList from '../components/NoteTagList';
import NoteExist from '../components/NoteExist';
import Modal from '../components/Modal';
import ConfirmRemove from '../components/ConfirmRemove';

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
    <NoteExist noteDetailID={noteDetail?.id}>
      <Header>
        <Heading>{noteDetail?.title}</Heading>
        <ButtonGroup>
          <Button
            variation="primary"
            onClick={() => navigate(`/${noteId}/update`)}
          >
            Update
          </Button>

          <Modal>
            <Modal.Open opens="remove-note">
              <Button variation="danger">Remove</Button>
            </Modal.Open>
            <Modal.Window name="remove-note">
              <ConfirmRemove
                resourceName={noteDetail?.title}
                onRemove={handleRemoveNote}
              />
            </Modal.Window>
          </Modal>

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
