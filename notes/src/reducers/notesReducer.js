import { SEARCHING, SEARCHED, FETCHING_NOTES, FETCHED_NOTES } from '../actions/notesAction';

const initState = {
  notes: [],
  fetching: false,
  fetched: false,
  searching: false,
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
