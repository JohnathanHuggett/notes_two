import {
  SEARCHING,
  SEARCHED,
  FETCHING_NOTES,
  FETCHED_NOTES,
  FETCHING_SINGLE_NOTE,
  FETCHED_SINGLE_NOTE,
  ADDING_NOTE,
  NOTE_ADDED,
  DELETING,
  DELETED,
  UPDATED,
} from '../actions/notesAction';

const notes = localStorage.getItem('notes')
  ? JSON.parse(localStorage.getItem('notes'))
  : [];

const note = localStorage.getItem('note') ? JSON.parse(localStorage.getItem('note')) : {};

const initState = {
  notes,
  note,
  fetching: false,
  fetched: false,
  searching: false,
  fetchingNote: false,
  fetchedNote: false,
  addingNote: false,
  noteAdded: false,
  deleting: false,
  deleted: false,
  error: '',
};

// TODO: handle errors

export const notesReducer = (state = initState, { type, payload, errMsg }) => {
  switch (type) {
    case FETCHING_NOTES:
      return {
        ...state,
        fetching: true,
      };

    case FETCHED_NOTES:
      localStorage.setItem('notes', JSON.stringify(payload));
      return {
        ...state,
        fetching: false,
        fetched: true,
        notes: payload,
      };

    case FETCHING_SINGLE_NOTE:
      return {
        ...state,
        fetched: false,
        fetchingNote: true,
      };

    case FETCHED_SINGLE_NOTE:
      localStorage.setItem('note', JSON.stringify(payload));
      return {
        ...state,
        fetchingNote: false,
        fetchedNote: true,
        note: payload,
      };

    case SEARCHING:
      return {
        ...state,
        searching: true,
      };

    case SEARCHED:
      return {
        ...state,
        searching: false,
        notes: payload,
      };

    case ADDING_NOTE:
      return {
        ...state,
        addingNote: true,
        noteAdded: false,
      };

    case NOTE_ADDED:
      return {
        ...state,
        addingNote: false,
        noteAdded: true,
        notes: [...state.notes, ...payload],
      };

    case DELETING:
      return {
        ...state,
        fetchedNote: false,
        deleting: true,
      };

    case DELETED:
      return {
        ...state,
        deleting: false,
        deleted: true,
        notes: [...state.notes, ...payload],
      };

    case UPDATED:
      return {
        ...state,
        deleted: false,
        notes: [...state.notes, ...payload],
      };

    default:
      return state;
  }
};
