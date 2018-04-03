/* @flow */

import type { Dispatch, SubjectPromise, SubjectPromiseId } from '../../types';
import {
  getSubjectsPromises as apiGetSubjectsPromises,
  deleteSubjectPromise as apiDeleteSubjectPromise,
} from '../../utils/api';

export const ActionTypes = {
  SUBJECTS_PROMISES_LOAD: 'SUBJECTS_PROMISES_LOAD',
  SUBJECTS_PROMISES_LOAD_SUCCESS: 'SUBJECTS_PROMISES_LOAD_SUCCESS',
  SUBJECTS_PROMISES_LOAD_FAILURE: 'SUBJECTS_PROMISES_LOAD_FAILURE',
  SUBJECT_PROMISE_UNLINK: 'SUBJECT_PROMISE_UNLINK',
  SUBJECT_PROMISE_UNLINK_SUCCESS: 'SUBJECT_PROMISE_UNLINK_SUCCESS',
  SUBJECT_PROMISE_UNLINK_FAILURE: 'SUBJECT_PROMISE_UNLINK_FAILURE',
};

const getSubjectsPromises = () => ({ type: ActionTypes.SUBJECTS_PROMISES_LOAD });

const getSubjectsPromisesSuccess = (data: Array<SubjectPromise>) => ({
  data,
  type: ActionTypes.SUBJECTS_PROMISES_LOAD_SUCCESS,
});

const getSubjectsPromisesFailure = (error: *) => ({
  error,
  type: ActionTypes.SUBJECTS_PROMISES_LOAD_FAILURE,
});

export const fetchSubjectsPromises = () => (dispatch: Dispatch) => {
  dispatch(getSubjectsPromises());

  return apiGetSubjectsPromises().then(
    resp => resp.data && dispatch(getSubjectsPromisesSuccess(resp.data)),
    error => dispatch(getSubjectsPromisesFailure(error.message))
  );
};

const unlinkSubjectPromise = () => ({ type: ActionTypes.SUBJECT_PROMISE_UNLINK });

const unlinkSubjectPromiseSuccess = (id: SubjectPromiseId) => ({
  type: ActionTypes.SUBJECT_PROMISE_UNLINK_SUCCESS,
  id,
});

const unlinkSubjectPromiseFailure = error => ({
  type: ActionTypes.SUBJECT_PROMISE_UNLINK_FAILURE,
  error,
});

export const unlinkSubjectPromiseThunk = (subjectPromiseId: SubjectPromiseId) => (
  dispatch: Dispatch
) => {
  dispatch(unlinkSubjectPromise(subjectPromiseId));

  return apiDeleteSubjectPromise(subjectPromiseId).then(
    () => dispatch(unlinkSubjectPromiseSuccess(subjectPromiseId)),
    error => dispatch(unlinkSubjectPromiseFailure(error.message))
  );
};

export default {
  getSubjectsPromises,
  getSubjectsPromisesSuccess,
  getSubjectsPromisesFailure,
  fetchSubjectsPromises,
  unlinkSubjectPromiseThunk,
};
