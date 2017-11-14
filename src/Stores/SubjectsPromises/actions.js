/* @flow */
import type { Dispatch, SubjectPromise } from '../../types';
import { getSubjectsPromises as apiGetSubjectsPromises } from '../../utils/api';

const getSubjectsPromises = () => ({ type: 'SUBJECTS_PROMISES_LOAD' });

const getSubjectsPromisesSuccess = (subjectsPromises: Array<SubjectPromise>) => ({
  subjectsPromises,
  type: 'SUBJECTS_PROMISES_LOAD_SUCCESS',
});

const getSubjectsPromisesFailure = (error: *) => ({
  error,
  type: 'SUBJECTS_PROMISES_LOAD_FAILURE',
});

export const fetchSubjectsPromises = () => (dispatch: Dispatch) => {
  dispatch(getSubjectsPromises());

  return apiGetSubjectsPromises().then(
    resp => resp.data && dispatch(getSubjectsPromisesSuccess(resp.data)),
    error => dispatch(getSubjectsPromisesFailure(error.message))
  );
};

export default {
  getSubjectsPromises,
  getSubjectsPromisesSuccess,
  getSubjectsPromisesFailure,
  fetchSubjectsPromises,
};
