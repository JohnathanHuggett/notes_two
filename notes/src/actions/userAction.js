import { users } from '../utils/dummyData';

export const LOGGING_IN = 'LOGGING_IN';
export const LOGGED_IN = 'LOGGED_IN';
export const LOG_OUT = 'LOG_OUT';

export const login = username => dispatch => {
  dispatch({ type: LOGGING_IN });

  const foundUser = users.find(user => user.username === username);

  if (foundUser) dispatch({ type: LOGGED_IN, payload: foundUser });
  else alert('You are not a user');
};

export const logout = () => dispatch => {
  dispatch({ type: LOG_OUT });
};
