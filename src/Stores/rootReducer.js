/* @flow */
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import PoliticiansReducer from './Politicians/reducer';
import PromisesReducer from './Promises/reducer';
import SubjectsReducer from './Subjects/reducer';
import SubjectsPromisesReducer from './SubjectsPromises/reducer';
import FeedbackReducer from './Feedback/reducer';
import cases from './Cases/reducer';
import voteRecords from './Votes/reducer';
import UserReducer from './User/reducer';

const reducer = combineReducers({
  router: routerReducer,
  user: UserReducer,
  politicians: PoliticiansReducer,
  promises: PromisesReducer,
  subjects: SubjectsReducer,
  subjectsPromises: SubjectsPromisesReducer,
  feedback: FeedbackReducer,
  cases,
  voteRecords,
});

export default reducer;
