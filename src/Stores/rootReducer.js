/* @flow */
import { combineReducers } from 'redux';
import PoliticiansReducer from './Politicians/reducer';
import PromisesReducer from './Promises/reducer';
import SubjectsReducer from './Subjects/reducer';
import SubjectsPromisesReducer from './SubjectsPromises/reducer';
import FeedbackReducer from './Feedback/reducer';
import cases from './Cases/reducer';

const reducer = combineReducers({
  politicians: PoliticiansReducer,
  promises: PromisesReducer,
  subjects: SubjectsReducer,
  subjectsPromises: SubjectsPromisesReducer,
  feedback: FeedbackReducer,
  cases,
});

export default reducer;
