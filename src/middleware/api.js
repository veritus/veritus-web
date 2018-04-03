import { serverBaseUrl } from '../config';
import { getToken } from '../utils/tokenStorage';

const STATUS_CODES = {
  UNAUTHORIZED: 401,
};

export default () => dispatch => async action => {
  const { endpoint, method, types, content } = action;
  if (typeof types === 'undefined') {
    // So the middleware doesn't get applied to every single action
    return dispatch(action);
  }

  const { request, success, failure } = types;

  dispatch({
    type: request,
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

  const response = await fetch(serverBaseUrl + endpoint, config);

  const { status, ok } = response;

  const payload = await response.json();

  if (!ok) {
    if (status === STATUS_CODES.UNAUTHORIZED) {
      // redirect to login
    }

    return dispatch({
      errors: payload && payload.errors ? payload.errors : [],
      type: failure,
      ...action,
    });
  }

  return dispatch({
    data: payload.results ? payload.results : payload,
    type: success,
    ...action,
  });
};
