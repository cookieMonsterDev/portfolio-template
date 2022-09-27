import { combineReducers } from 'redux';
import isMenuReducer from './isMenu';

const rootReducers = combineReducers({ menu: isMenuReducer });

export default rootReducers;
