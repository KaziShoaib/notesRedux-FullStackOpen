import noteService from '../services/notes';

const noteReducer = ( state = [], action ) => {
  switch(action.type){
    case 'NEW_NOTE':
      return [...state, action.data];
    case 'UPDATE_NOTE':{
      const updatedNote = action.data;
      return state.map(n => n.id !== updatedNote.id ? n : updatedNote);
    }
    case 'INIT_NOTES':
      return action.data;
    default:
      return state;
  }
};

export const createNote = (content) => {
  return async (dispatch) => {
    const newNote = await noteService.createNewNote(content);
    dispatch({
      type: 'NEW_NOTE',
      data: newNote
    });
  };
};


export const toggleImportanceOf = (note) => {
  return async (dispatch) => {
    const newNote = { ...note, important: !note.important };
    const updatedNote = await noteService.updateNote(note.id, newNote);
    dispatch({
      type: 'UPDATE_NOTE',
      data: updatedNote
    });
  };
};


export const initializeNotes = () => {
  return async (dispatch) => {
    const notes = await noteService.getAll();
    dispatch({
      type: 'INIT_NOTES',
      data: notes
    });
  };
};

export default noteReducer;