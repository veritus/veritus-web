/* @flow */
import { combineReducers } from 'redux';
import promisesReducer from './Promises/reducer';

const reducer = combineReducers({
  promises: promisesReducer,
});

export default reducer;
