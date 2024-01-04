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
  tags: SelectValueas[];
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
  getActiveNote: (id: number | undefined) => NoteType | undefined;
  updateNote: (updatedNote: NoteType) => void;
};

const NoteContext = createContext<NoteContextType>({
  notes: [],
  addNote: () => {},
  removeNote: () => {},
  getActiveNote: () => undefined,
  updateNote: () => {},
});

const initState: StateType = {
  notes: [
    {
      id: 1,
      title: 'Automation Specialist II',
      body: '1FAHP3GN7AW396854',
      tags: [{}, {}],
    },
    {
      id: 2,
      title: 'General Manager',
      body: '1HGCP2E86AA085782',
      tags: [{}, {}, {}],
    },
    {
      id: 3,
      title: 'Project Manager',
      body: '3N1BC1AP2BL515060',
      tags: [{}, {}, {}, {}],
    },
    {
      id: 4,
      title: 'Social Worker',
      body: 'WAUHFAFL6DA276169',
      tags: [{}, {}, {}],
    },
    {
      id: 5,
      title: 'Librarian',
      body: '3D7TT2CT5BG271484',
      tags: [{}, {}],
    },
    {
      id: 6,
      title: 'Project Manager',
      body: 'WAURV78T79A698773',
      tags: [{}, {}, {}, {}],
    },
    {
      id: 7,
      title: 'Occupational Therapist',
      body: '1FMJK1G53BE649148',
      tags: [{}, {}],
    },
    {
      id: 8,
      title: 'Structural Engineer',
      body: '5GALVBEDXAJ649274',
      tags: [{}, {}, {}],
    },
    {
      id: 9,
      title: 'Registered Nurse',
      body: '1G6DW677560453371',
      tags: [{}, {}],
    },
    {
      id: 10,
      title: 'Account Executive',
      body: 'WAUSG94F49N586013',
      tags: [{}, {}],
    },
  ],
};

export const enum REDUCER_ACTION_TYPE {
  ADD,
  REMOVE,
  UPDATE,
}

type ReducerAction =
  | { type: REDUCER_ACTION_TYPE.ADD; payload: AddNoteType }
  | { type: REDUCER_ACTION_TYPE.REMOVE; payload: number }
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

  function getActiveNote(id: number | undefined) {
    return notes.filter((note) => note.id === id)[0];
  }

  function updateNote(updatedNote: NoteType) {
    dispatch({ type: REDUCER_ACTION_TYPE.UPDATE, payload: updatedNote });
  }

  return (
    <NoteContext.Provider
      value={{ notes, addNote, removeNote, getActiveNote, updateNote }}
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
