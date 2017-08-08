/* @flow */
import { combineReducers } from 'redux';
import PoliticiansReducer from './Politicians/reducer';
import promisesReducer from './Promises/reducer';

const reducer = combineReducers({
  politicians: PoliticiansReducer,
  promises: promisesReducer,
});

export default reducer;
