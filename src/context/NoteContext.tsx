import {
  ReactElement,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from 'react';
import { SelectValues } from '../components/SelectOption';
import { useLocalStorageState } from '../hooks/useLoacalStorageState';

type AddNoteType = {
  title: string;
  body: string;
  tags: SelectValues[];
};

export type NoteType = AddNoteType & {
  id: number;
};

export type StateType = {
  notes: NoteType[];
};

type NoteContextType = StateType & {
  addNote: (note: AddNoteType) => void;
  removeNote: (id: number) => void;
  removeAll: () => void;
  getActiveNote: (id: number | undefined) => NoteType | undefined;
  updateNote: (updatedNote: NoteType) => void;
  getAllTags: () => SelectValues[];
};

const NoteContext = createContext<NoteContextType>({
  notes: [],
  addNote: () => {},
  removeNote: () => {},
  removeAll: () => {},
  getActiveNote: () => undefined,
  updateNote: () => {},
  getAllTags: () => [],
});

const initState: StateType = {
  notes: [
    {
      id: 1,
      title: 'CompanyXyz',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      tags: [
        { value: 'tag1', label: 'Tag 1' },
        { value: 'tag2', label: 'Tag 2' },
        { value: 'tag3', label: 'Tag 3' },
      ],
    },
    {
      id: 2,
      title: 'ABC Corp',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      tags: [
        { value: 'tag4', label: 'Tag 4' },
        { value: 'tag5', label: 'Tag 5' },
        { value: 'tag6', label: 'Tag 6' },
      ],
    },
    {
      id: 3,
      title: 'Random Enterprises',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      tags: [
        { value: 'tag1', label: 'Tag 1' },
        { value: 'tag7', label: 'Tag 7' },
        { value: 'tag8', label: 'Tag 8' },
      ],
    },
    {
      id: 4,
      title: 'XYZ Solutions',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      tags: [
        { value: 'tag9', label: 'Tag 9' },
        { value: 'tag2', label: 'Tag 2' },
        { value: 'tag10', label: 'Tag 10' },
      ],
    },
    {
      id: 5,
      title: 'Innovate Tech',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      tags: [
        { value: 'tag11', label: 'Tag 11' },
        { value: 'tag12', label: 'Tag 12' },
        { value: 'tag13', label: 'Tag 13' },
      ],
    },
    {
      id: 6,
      title: 'Global Innovations',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      tags: [
        { value: 'tag14', label: 'Tag 14' },
        { value: 'tag15', label: 'Tag 15' },
        { value: 'tag1', label: 'Tag 1' },
      ],
    },
    {
      id: 7,
      title: 'Dynamic Systems',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      tags: [
        { value: 'tag16', label: 'Tag 16' },
        { value: 'tag17', label: 'Tag 17' },
        { value: 'tag18', label: 'Tag 18' },
      ],
    },
    {
      id: 8,
      title: 'Tech Innovators',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      tags: [
        { value: 'tag19', label: 'Tag 19' },
        { value: 'tag20', label: 'Tag 20' },
        { value: 'tag21', label: 'Tag 21' },
      ],
    },
    {
      id: 9,
      title: 'Data Solutions Co.',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      tags: [
        { value: 'tag22', label: 'Tag 22' },
        { value: 'tag23', label: 'Tag 23' },
        { value: 'tag24', label: 'Tag 24' },
      ],
    },
    {
      id: 10,
      title: 'Innovative Labs',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      tags: [
        { value: 'tag25', label: 'Tag 25' },
        { value: 'tag26', label: 'Tag 26' },
        { value: 'tag27', label: 'Tag 27' },
      ],
    },
    {
      id: 11,
      title: 'Digital Revolution',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      tags: [
        { value: 'tag28', label: 'Tag 28' },
        { value: 'tag29', label: 'Tag 29' },
        { value: 'tag30', label: 'Tag 30' },
      ],
    },
    {
      id: 12,
      title: 'Creative Tech Hub',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      tags: [
        { value: 'tag31', label: 'Tag 31' },
        { value: 'tag32', label: 'Tag 32' },
        { value: 'tag33', label: 'Tag 33' },
      ],
    },
    {
      id: 13,
      title: 'NextGen Solutions',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      tags: [
        { value: 'tag34', label: 'Tag 34' },
        { value: 'tag35', label: 'Tag 35' },
        { value: 'tag36', label: 'Tag 36' },
      ],
    },
    {
      id: 14,
      title: 'Smart Technologies Inc.',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      tags: [
        { value: 'tag37', label: 'Tag 37' },
        { value: 'tag38', label: 'Tag 38' },
        { value: 'tag39', label: 'Tag 39' },
      ],
    },
    {
      id: 15,
      title: 'Data Dynamics',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      tags: [
        { value: 'tag40', label: 'Tag 40' },
        { value: 'tag1', label: 'Tag 1' },
        { value: 'tag41', label: 'Tag 41' },
      ],
    },
  ],
};

export const enum REDUCER_ACTION_TYPE {
  ADD,
  REMOVE,
  REMOVE_ALL,
  UPDATE,
}

type ReducerAction =
  | { type: REDUCER_ACTION_TYPE.ADD; payload: AddNoteType }
  | { type: REDUCER_ACTION_TYPE.REMOVE; payload: number }
  | { type: REDUCER_ACTION_TYPE.REMOVE_ALL }
  | { type: REDUCER_ACTION_TYPE.UPDATE; payload: NoteType };

const reducer = (state: StateType, action: ReducerAction): StateType => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.ADD:
      return {
        ...state,
        notes: [...state.notes, { ...action.payload, id: Date.now() }],
      };
    case REDUCER_ACTION_TYPE.REMOVE:
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload),
      };
    case REDUCER_ACTION_TYPE.REMOVE_ALL:
      return {
        ...state,
        notes: [],
      };
    case REDUCER_ACTION_TYPE.UPDATE:
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id !== action.payload.id ? note : action.payload,
        ),
      };
    default:
      throw new Error();
  }
};

type ChildrenType = {
  children?: ReactElement | ReactElement[] | undefined;
};

const NoteProvider = ({ children }: ChildrenType): ReactElement => {
  // Set initState to Storage, if it already exists, it will take the data from there
  const [value, setValue] = useLocalStorageState({
    initialState: initState,
    key: 'notes',
  });
  // A reducer was created, in which value was set, ie. saved data from localStore
  const [state, dispatch] = useReducer(reducer, value);
  const { notes } = state;

  // Every change is saved in Local Storage
  useEffect(() => {
    setValue(state);
  }, [state]);

  function addNote(note: AddNoteType) {
    dispatch({ type: REDUCER_ACTION_TYPE.ADD, payload: note });
  }

  function removeNote(id: number) {
    dispatch({ type: REDUCER_ACTION_TYPE.REMOVE, payload: id });
  }

  function removeAll() {
    dispatch({ type: REDUCER_ACTION_TYPE.REMOVE_ALL });
  }

  function getActiveNote(id: number | undefined) {
    return notes.filter((note) => note.id === id)[0];
  }

  function updateNote(updatedNote: NoteType) {
    dispatch({ type: REDUCER_ACTION_TYPE.UPDATE, payload: updatedNote });
  }

  // If we have several of the same tags, we remove them so that only unique
  function getAllTags(): SelectValues[] {
    const allTags = notes.flatMap((note) => note.tags);
    return Array.from(new Set(allTags.map((obj) => JSON.stringify(obj)))).map(
      (str) => JSON.parse(str),
    );
  }

  return (
    <NoteContext.Provider
      value={{
        notes,
        addNote,
        removeNote,
        getActiveNote,
        updateNote,
        getAllTags,
        removeAll,
      }}
    >
      {children}
    </NoteContext.Provider>
  );
};

function useNote() {
  const context = useContext(NoteContext);
  if (context === undefined)
    throw new Error('NoteContext was used outside the  NoteProvider');
  return context;
}

export { NoteProvider, useNote };
