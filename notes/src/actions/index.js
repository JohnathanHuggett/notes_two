export const LOGGING_IN = 'LOGGING_IN';
export const LOGGED_IN = 'LOGGED_IN';
export const LOGGED_OUT = 'LOGGED_OUT';

export const login = user => dispatch => {
  localStorage.setItem('user', user);
  dispatch({ type: LOGGING_IN });
};

export const logout = () => dispatch => {
  localStorage.removeItem('user');
  window.location.reload();
  // dispatch({ LOGGED_OUT });
};
