/* @flow */
import type {
  Dispatch,
  Subject,
  SubjectId,
  PromiseId,
  SubjectPromise,
} from '../../types';
import {
  getSubjects as apiGetSubjects,
  linkSubjectPromise as apiLinkSubjectPromise,
} from '../../utils/api';

export const ActionTypes = {
  SUBJECTS_LOAD: 'SUBJECTS_LOAD',
  SUBJECTS_LOAD_SUCCESS: 'SUBJECTS_LOAD_SUCCESS',
  SUBJECTS_LOAD_FAILURE: 'SUBJECTS_LOAD_FAILURE',
  SUBJECT_PROMISE_LINK: 'SUBJECT_PROMISE_LINK',
  SUBJECT_PROMISE_LINK_SUCCESS: 'SUBJECT_PROMISE_LINK_SUCCESS',
  SUBJECT_PROMISE_LINK_FAILURE: 'SUBJECT_PROMISE_LINK_FAILURE',
};
const getSubjects = () => ({ type: ActionTypes.SUBJECTS_LOAD });

const getSubjectsSuccess = (subjects: Array<Subject>) => ({
  subjects,
  type: ActionTypes.SUBJECTS_LOAD_SUCCESS,
});

const getSubjectsFailure = (error: *) => ({
  error,
  type: ActionTypes.SUBJECTS_LOAD_FAILURE,
});

export const fetchSubjects = () => (dispatch: Dispatch) => {
  dispatch(getSubjects());

  return apiGetSubjects().then(
    resp => resp.data && dispatch(getSubjectsSuccess(resp.data)),
    error => dispatch(getSubjectsFailure(error.message))
  );
};

const linkSubjectPromise = () => ({ type: ActionTypes.SUBJECT_PROMISE_LINK });

const linkSubjectPromiseSuccess = (payload: SubjectPromise) => ({
  type: ActionTypes.SUBJECT_PROMISE_LINK_SUCCESS,
  payload,
});

const linkSubjectPromiseFailure = error => ({
  type: ActionTypes.SUBJECT_PROMISE_LINK_FAILURE,
  error,
});

export const linkSubjectToPromisesThunk = (
  promiseIds: Array<PromiseId>,
  subjectId: SubjectId
) => (dispatch: Dispatch) => {
  dispatch(linkSubjectPromise());

  return Promise.all(
    promiseIds.map(promiseId =>
      apiLinkSubjectPromise(promiseId, subjectId).then(
        resp => resp.data && dispatch(linkSubjectPromiseSuccess(resp.data)),
        error => dispatch(linkSubjectPromiseFailure(error))
      )
    )
  );
};

export default {
  getSubjects,
  getSubjectsSuccess,
  getSubjectsFailure,
  fetchSubjects,
};
