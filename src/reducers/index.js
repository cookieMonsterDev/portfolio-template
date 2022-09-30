import { combineReducers } from 'redux';
import isContactReducer from './isContact';
import isMenuReducer from './isMenu';

const rootReducers = combineReducers({
  menu: isMenuReducer,
  contact: isContactReducer,
});

export default rootReducers;
