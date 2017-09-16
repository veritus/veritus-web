/* @flow */
import type { Dispatch, PromiseType } from '../../types';
import { getPromises as apiGetPromises } from '../../utils/api';

const getPromises = () => ({ type: 'PROMISES_LOAD' });

const getPromisesSuccess = (promises: Array<PromiseType>) => ({
  promises,
  type: 'PROMISES_LOAD_SUCCESS',
});

const getPromisesFailure = (error: *) => ({
  error,
  type: 'PROMISES_LOAD_FAILURE',
});

export const fetchPromises = () => (dispatch: Dispatch) => {
  dispatch(getPromises());

  return apiGetPromises().then(
    promises => dispatch(getPromisesSuccess(promises)),
    error => dispatch(getPromisesFailure(error.message))
  );
};

export default {
  getPromises,
  getPromisesSuccess,
  getPromisesFailure,
  fetchPromises,
};
