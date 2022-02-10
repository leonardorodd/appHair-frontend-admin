let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case '@auth/SIGN_IN_REQUEST':
      return {
        loggingIn: true,
      };
    case '@auth/SIGN_IN_SUCCESS':
      return {
        loggedIn: true,
        user: action.payload,
      };
    case '@auth/SIGN_IN_FAILURE':
      return {};
    case '@auth/SIGN_OUT':
      return {};
    default:
      return state;
  }
}
