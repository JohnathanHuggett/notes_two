import { notes as dummyNotes } from "./dummyDate";

const initState = {
  notes: dummyNotes,
  fetching: false,
  fetched: false,
  error: "",
};

export const notesReducer = (state = initState, { type, payload, errMsg }) => {
  return state;
};
