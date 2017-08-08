/* @flow */
import { combineReducers } from 'redux';
import PoliticiansReducer from './Politicians/reducer';

const reducer = combineReducers({
  politicians: PoliticiansReducer,
});

export default reducer;
