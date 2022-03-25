export default function alert(state = {}, action) {
  switch (action.type) {
    case '@alert/ALERT_SUCCESS':
      return {
        type: 'alert-success',
        message: action.message,
      };
    case '@alert/ALERT_ERROR':
      return {
        type: 'alert-danger',
        message: action.message,
      };
    case '@alert/ALERT_CLEAR':
      return {};
    default:
      return state;
  }
}
