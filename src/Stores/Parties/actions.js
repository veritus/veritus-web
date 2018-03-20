/* @flow */
import type { Dispatch } from '../../types';
import { getPoliticalParties as apiGetPoliticalParties } from '../../utils/api';

const getParties = () => ({ type: 'PARTIES_LOAD' });

const getPartiesSuccess = (parties: Array<PoliticianType>) => ({
  parties,
  type: 'PARTIES_LOAD_SUCCESS',
});

const getPartiesFailure = (error: *) => ({
  error,
  type: 'PARTIES_LOAD_FAILURE',
});

export const fetchParties = () => (dispatch: Dispatch) => {
  dispatch(getParties());

  return apiGetPoliticalParties().then(
    resp => resp.data && dispatch(getPartiesSuccess(resp.data)),
    error => dispatch(getPartiesFailure(error.message))
  );
};

export default {
  getParties,
  getPartiesSuccess,
  getPartiesFailure,
  fetchParties,
};
