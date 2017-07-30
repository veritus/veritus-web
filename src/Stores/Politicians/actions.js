/* @flow */
import type { Dispatch, PoliticianType } from '../../types';
import { getPoliticians as apiGetPoliticians } from '../../utils/api';

const getPoliticians = () => ({ type: 'POLITICIANS_LOAD' });

const getPoliticiansSuccess = (politicians: Array<PoliticianType>) => ({
  politicians,
  type: 'POLITICIANS_LOAD_SUCCESS',
});

const getPoliticiansFailure = (error: *) => ({
  error,
  type: 'POLITICIANS_LOAD_FAILURE',
});

export const fetchPoliticians = () => (dispatch: Dispatch) => {
  dispatch(getPoliticians());

  return apiGetPoliticians().then(
    politicians => dispatch(getPoliticiansSuccess(politicians)),
    error => dispatch(getPoliticiansFailure(error.message))
  );
};

export default {
  getPoliticians,
  getPoliticiansSuccess,
  getPoliticiansFailure,
  fetchPoliticians,
};
