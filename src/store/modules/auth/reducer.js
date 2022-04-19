import produce from 'immer';

const INITIAL_STATE = {
  loggedIn: false,
  loggingIn: false,
  user: null,
  token: null,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_REQUEST': {
        draft.loggingIn = true;
        break;
      }
      case '@auth/SIGN_IN_SUCCESS': {
        draft.loggedIn = true;
        draft.user = {
          email: action.payload.email,
          nome: action.payload.nome,
          admin: action.payload.profile.admin,
        };
        draft.token = {
          access_token: action.payload.token,
          expires_in: action.payload.token_expires,
        };
        draft.loggingIn = false;
        break;
      }
      case '@auth/SIGN_IN_FAILURE': {
        draft.loggingIn = false;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.loggedIn = false;
        draft.user = null;
        draft.token = null;
        break;
      }
      default:
        state;
        break;
    }
  });
}
