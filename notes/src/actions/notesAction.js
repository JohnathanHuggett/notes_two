import axios from 'axios';
import notes from '../utils/dummyData';

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

const URL = 'http://localhost:8000/api/notes/';

// TODO: catch all errs

/* GET NOTE */
export const getNotes = () => dispatch => {
  dispatch({ type: FETCHING_NOTES });

  axios
    .get(`${URL}`)
    .then(({ data }) => dispatch({ type: FETCHED_NOTES, payload: data }))
    .catch();
};

/* ADD NOTE */
export const addNote = note => dispatch => {
  dispatch({ type: ADDING_NOTE });

  axios
    .post(`${URL}`, note)
    .then(({ data }) => dispatch({ type: NOTE_ADDED, payload: data }))
    .catch(err => console.log(err));
};

/* GET SINGLE NOTE */
export const getSingleNote = id => dispatch => {
  dispatch({ type: FETCHED_SINGLE_NOTE });

  dispatch({ type: FETCHED_SINGLE_NOTE, payload: Number(id) });
};

/* DELETE */
export const deleteNote = id => dispatch => {
  dispatch({ type: DELETING });

  axios
    .delete(`${URL}${id}`)
    .then(({ data }) => dispatch({ type: DELETED, payload: data }))
    .catch();
};

/* UPDATE */
export const updateNote = note => dispatch => {
  dispatch({ type: UPDATING });

  const { id } = note;

  axios
    .put(`${URL}${id}`, note)
    .then(({ data }) => dispatch({ type: UPDATED, payload: data }))
    .catch();
};
