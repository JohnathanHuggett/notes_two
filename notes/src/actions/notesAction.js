import notes from '../utils/dummyData';

export const SEARCHING = 'SEARCHING';
export const SEARCHED = 'SEARCHED';
export const FETCHING_NOTES = 'FETCHING_NOTES';
export const FETCHED_NOTES = 'FETCHED_NOTES';
export const FETCHING_SINGLE_NOTE = 'FETCHING_SINGLE_NOTE';
export const FETCHED_SINGLE_NOTE = 'FETCHED_SINGLE_NOTE';
export const ADDING_NOTE = 'ADDING_NOTE';
export const NOTE_ADDED = 'NOTE_ADDED';
export const DELETING = 'DELETING';
export const DELETED = 'DELETED';
export const UPDATING = 'UPDATING';
export const UPDATED = 'UPDATED';

/* GET NOTE */
export const getNotes = () => dispatch => {
  dispatch({ type: FETCHED_NOTES });

  dispatch({ type: FETCHED_NOTES, payload: notes });
};

/* ADD NOTE */
export const addNote = note => dispatch => {
  dispatch({ type: ADDING_NOTE });

  notes.push(note);

  dispatch({ type: NOTE_ADDED, payload: notes });
};

/* GET SINGLE NOTE */
export const getSingleNote = id => dispatch => {
  dispatch({ type: FETCHED_SINGLE_NOTE });

  const note = notes.filter(note => note.id === Number(id));

  dispatch({ type: FETCHED_SINGLE_NOTE, payload: note[0] });
};

/* SEARCH */
export const searchQuery = query => dispatch => {
  dispatch({ type: SEARCHING });

  const foundNotes = notes.filter(note => {
    return (
      note.title.toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
      note.content.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );
  });

  if (foundNotes) dispatch({ type: SEARCHED, payload: foundNotes });
};

/* DELETE */
export const deleteNote = id => dispatch => {
  dispatch({ type: DELETING });

  const index = notes.findIndex(note => note.id === Number(id));

  notes.splice(index, 1);

  dispatch({ type: DELETED, payload: notes });
};

/* UPDATE */
export const updateNote = note => dispatch => {
  dispatch({ type: UPDATING });

  const { id } = note;

  const index = notes.findIndex(note => note.id === id);

  notes.splice(index, 1, note);

  dispatch({ type: UPDATED, payload: notes });
};
