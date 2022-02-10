export function successMessage(message) {
  return { type: '@alert/ALERT_SUCCESS', message };
}

export function errorMessage(message) {
  return { type: '@alert/ALERT_ERROR', message };
}

export function clearMessage() {
  return { type: '@alert/ALERT_CLEAR' };
}
