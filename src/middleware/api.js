import { serverBaseUrl } from '../config';
import { getToken } from '../utils/tokenStorage';

const STATUS_CODES = {
  UNAUTHORIZED: 401,
};

export default () => dispatch => action => {
  const { endpoint, method, types, content } = action;
  if (typeof types === 'undefined') {
    // So the middleware doesn't get applied to every single action
    return dispatch(action);
  }

  const requestType = types.request;
  const successType = types.success;
  const errorType = types.failure;

  dispatch({
    type: requestType,
    ...action,
  });

  const config = {
    method,
    headers: {
      Accept: 'application/json',
    },
  };

  const token = getToken();
  if (token) {
    config.headers.Authorization = `Token ${token}`;
  }

  if (method === 'POST' || method === 'PUT' || method === 'PATCH') {
    config.headers['Content-Type'] = 'application/json';
    config.body = JSON.stringify(content);
  }

  return fetch(serverBaseUrl + endpoint, config)
    .then(response => (response ? response.json() : null))
    .then(response => {
      if (!response.ok) {
        if (response.status === STATUS_CODES.UNAUTHORIZED) {
          // redirect to login
        }

        return dispatch({
          errors: response && response.errors ? response.errors : [],
          type: errorType,
          ...action,
        });
      }

      return dispatch({
        data: response.results ? response.results : response,
        type: successType,
        ...action,
      });
    })
    .catch(err => {
      // Do we want to do something specific for errors?
      throw err;
    });
};
