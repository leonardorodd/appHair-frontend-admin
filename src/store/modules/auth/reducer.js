const INITIAL_STATE = {
  loggedIn: false,
  loggingIn: false,
  user: null,
  token: null,
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@auth/SIGN_IN_REQUEST':
      return {
        loggingIn: true,
      };
    case '@auth/SIGN_IN_SUCCESS':
      return {
        loggedIn: true,
        user: action.payload,
        loggingIn: false,
      };
    case '@auth/SIGN_IN_FAILURE':
      return {
        loggingIn: false,
      };
    case '@auth/SIGN_OUT':
      return {
        loggedIn: false,
        loggingIn: false,
        user: null,
      };
    default:
      return state;
  }
}
