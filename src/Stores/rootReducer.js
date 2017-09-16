/* @flow */
import { combineReducers } from 'redux';
import PoliticiansReducer from './Politicians/reducer';
import PromisesReducer from './Promises/reducer';

const reducer = combineReducers({
  politicians: PoliticiansReducer,
  promises: PromisesReducer,
});

export default reducer;
