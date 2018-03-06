/* @flow */

export const fetchPoliticians = () => {
  return {
    endpoint: '/v1/politicians/',
    method: 'GET',
    types: {
      request: 'POLITICIANS_LOAD',
      success: 'POLITICIANS_LOAD_SUCCESS',
      failure: 'POLITICIANS_LOAD_FAILURE',
    },
  };
};

export default {
  fetchPoliticians,
};
