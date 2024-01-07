import { useNavigate } from 'react-router-dom';

import { NoteType } from '../context/NoteContext';
import NoteTagList from './NoteTagList';

type NoteItemType = {
  note: NoteType;
};

function NoteItem({ note }: NoteItemType) {
  const navigate = useNavigate();
  return (
    <li
      className="flex size-full max-w-72 cursor-pointer flex-col items-center gap-5 rounded-lg bg-gray-100 px-3 py-6 drop-shadow transition hover:drop-shadow-xl"
      onClick={() => navigate(`/${note.id}`)}
    >
      <span className="text-2xl">{note.title}</span>
      <NoteTagList tags={note.tags} />
    </li>
  );
}

export default NoteItem;
