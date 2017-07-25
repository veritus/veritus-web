/* @flow */
import type { Dispatch, PromiseType } from '../../types';
import { getPromises as apiGetPromises } from '../../utils/api';

const getPromises = () => ({ type: 'LOAD_PROMISES' });

const getPromisesSuccess = (promises: Array<PromiseType>) => ({
  promises,
  type: 'LOAD_PROMISES_SUCCESS',
});

const getPromisesFailure = (error: *) => ({
  error,
  type: 'LOAD_PROMISES_ERROR',
});

const fetchPromises = () => (dispatch: Dispatch) => {
  dispatch(getPromises()).then(() => {
    return apiGetPromises().then(promises => console.log(promises));
  });
};

export default {
  getPromises,
  getPromisesSuccess,
  getPromisesFailure,
  fetchPromises,
};
