import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NoteProvider } from './context/NoteContext';

import Home from './pages/Home';
import CreateNote from './pages/CreateNote';
import NoteDetail from './pages/NoteDetail';
import UpdateNote from './pages/UpdateNote';

function App() {
  return (
    <NoteProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<CreateNote />} />
          <Route path="/:noteId" element={<NoteDetail />} />
          <Route path="/:noteId/update" element={<UpdateNote />} />
        </Routes>
      </BrowserRouter>
    </NoteProvider>
  );
}

export default App;
