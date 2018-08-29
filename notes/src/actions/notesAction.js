import { notes } from '../utils/dummyDate';

export const SEARCHING = 'SEARCHING';
export const SEARCHED = 'SEARCHED';
export const FETCHING_NOTES = 'FETCHING_NOTES';
export const FETCHED_NOTES = 'FETCHED_NOTES';
export const FETCHING_SINGLE_NOTE = 'FETCHING_SINGLE_NOTE';
export const FETCHED_SINGLE_NOTE = 'FETCHED_SINGLE_NOTE';

export const getNotes = () => dispatch => {
  dispatch({ type: FETCHED_NOTES });

  dispatch({ type: FETCHED_NOTES, payload: notes });
};

export const getSingleNote = id => dispatch => {
  dispatch({ type: FETCHED_SINGLE_NOTE });

  const note = notes.filter(note => note.id === Number(id));

  dispatch({ type: FETCHED_SINGLE_NOTE, payload: note[0] });
};

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
