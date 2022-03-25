export function getAllRequest() {
  return {
    type: '@user/GETALL_REQUEST',
  };
}

export function getAllSuccess(users) {
  return {
    type: '@user/GETALL_SUCCESS',
    payload: users,
  };
}

export function getAllFailure(error) {
  return {
    type: '@user/GETALL_FAILURE',
    payload: error,
  };
}

export function deleteUserRequest(id) {
  return {
    type: '@user/DELETE_REQUEST',
    payload: id,
  };
}

export function deleteUserSuccess(id) {
  return {
    type: '@user/DELETE_SUCCESS',
    payload: id,
  };
}

export function deleteUserFailure(id, error) {
  return {
    type: '@user/DELETE_FAILURE',
    payload: {
      id,
      error,
    },
  };
}

export function registerRequest(email, password) {
  return {
    type: '@user/REGISTER_REQUEST',
    payload: {
      email,
      password,
    },
  };
}

export function registerSuccess() {
  return {
    type: '@user/REGISTER_SUCCESS',
  };
}

export function registerFailure() {
  return {
    type: '@user/REGISTER_FAILURE',
  };
}
