import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import alert from './alert/reducer';

export default combineReducers({
  auth,
  user,
  alert,
});
