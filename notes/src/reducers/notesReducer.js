import {
  SEARCHING,
  SEARCHED,
  FETCHING_NOTES,
  FETCHED_NOTES,
  FETCHING_SINGLE_NOTE,
  FETCHED_SINGLE_NOTE,
} from '../actions/notesAction';

const initState = {
  notes: [],
  note: {},
  fetching: false,
  fetched: false,
  searching: false,
  fetchingNote: false,
  fetchedNote: false,
  error: '',
};

export const notesReducer = (state = initState, { type, payload, errMsg }) => {
  switch (type) {
    case FETCHING_NOTES:
      return {
        ...state,
        fetching: true,
      };

    case FETCHED_NOTES:
      return {
        ...state,
        fetching: false,
        fetched: true,
        notes: payload,
      };

    case FETCHING_SINGLE_NOTE:
      return {
        ...state,
        fetchingNote: true,
      };

    case FETCHED_SINGLE_NOTE:
      return {
        ...state,
        fetchingNote: false,
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
    default:
      return state;
  }
};
