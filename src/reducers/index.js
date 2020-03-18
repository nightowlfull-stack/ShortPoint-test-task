import { combineReducers } from 'redux';
import notes from '../modules/notebook/reducers'
import notifications from '../modules/notification/reducers'

export default combineReducers({
  notes,
  notifications,
});