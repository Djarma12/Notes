import Form from '../components/Form';
import Header from '../components/Header';
import Heading from '../components/Heading';
import Main from '../components/Main';

function CreateNote() {
  return (
    <div>
      <Header>
        <Heading>New Note</Heading>
      </Header>
      <Main>
        <Form />
      </Main>
    </div>
  );
}

export default CreateNote;
