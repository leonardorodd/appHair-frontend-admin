/* eslint-disable no-unused-vars */
export default function user(state = {}, action) {
  switch (action.type) {
    case '@user/REGISTER_REQUEST':
      return { registering: true };
    case '@user/REGISTER_SUCCESS':
      return {};
    case '@user/REGISTER_FAILURE':
      return {};
    case '@user/GETALL_REQUEST':
      return {
        loading: true,
      };
    case '@user/GETALL_SUCCESS':
      return {
        items: action.payload.users,
      };
    case '@user/GETALL_FAILURE':
      return {
        error: action.payload.error,
      };
    case '@user/DELETE_REQUEST':
      // add 'deleting:true' property to user being deleted
      return {
        ...state,
        items: state.items.map(user => (user.id === action.payload.id ? { ...user, deleting: true } : user)),
      };
    case '@user/DELETE_SUCCESS':
      // remove deleted user from state
      return {
        items: state.items.filter(user => user.id !== action.payload.id),
      };
    case '@user/DELETE_FAILURE':
      // remove 'deleting:true' property and add 'deleteError:[error]' property to user
      return {
        ...state,
        items: state.items.map(user => {
          if (user.id === action.payload.id) {
            // make copy of user without 'deleting:true' property
            const { deleting, ...userCopy } = user;
            // return copy of user with 'deleteError:[error]' property
            return { ...userCopy, deleteError: action.payload.error };
          }

          return user;
        }),
      };
    default:
      return state;
  }
}
