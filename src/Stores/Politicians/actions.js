/* @flow */
import type { Dispatch } from '../../types';

export const fetchPoliticians = () => (dispatch: Dispatch) => {
  return dispatch({
    endpoint: '/v1/politicians/',
    method: 'GET',
    types: {
      request: 'POLITICIANS_LOAD',
      success: 'POLITICIANS_LOAD_SUCCESS',
      failure: 'POLITICIANS_LOAD_FAILURE',
    },
  });
};

export default {
  fetchPoliticians,
};
