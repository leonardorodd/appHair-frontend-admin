export function signInRequest(email, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: {
      email,
      password,
    },
  };
}

export function signInSuccess(user) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: user,
  };
}

export function signInFailure(error) {
  return {
    type: '@auth/SIGN_IN_FAILURE',
    payload: error,
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}
