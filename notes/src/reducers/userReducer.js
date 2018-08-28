import { LOGGING_IN, LOGGED_IN, LOG_OUT } from '../actions/userAction';

let user = localStorage.getItem('user') ? localStorage.getItem('user') : null;
user = JSON.parse(user);

const loggedIn = user !== null ? true : false;

const initState = {
  user,
  loggingIn: false,
  loggedIn,
  error: null,
};

export const userReducer = (state = initState, { type, payload, errMsg }) => {
  switch (type) {
    case LOGGING_IN:
      return {
        ...state,
        loggingIn: true,
      };

    case LOGGED_IN:
      localStorage.setItem('user', JSON.stringify(payload));
      window.location.reload();
      return {
        ...state,
        loggingIn: false,
        loggedIn: true,
        user: payload,
      };

    case LOG_OUT:
      localStorage.removeItem('user');
      window.location.reload();
      return {
        ...state,
        user: null,
        loggedIn: false,
      };
    default:
      return state;
  }
};
