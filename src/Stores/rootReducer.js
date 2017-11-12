/* @flow */
import { combineReducers } from 'redux';
import PoliticiansReducer from './Politicians/reducer';
import PromisesReducer from './Promises/reducer';
import SubjectsReducer from './Subjects/reducer';
import CommonReducer from './Common/reducer';

const reducer = combineReducers({
  politicians: PoliticiansReducer,
  promises: PromisesReducer,
  subjects: SubjectsReducer,
  common: CommonReducer,
});

export default reducer;
