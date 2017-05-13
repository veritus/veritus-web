/* @flow */

export const checkStatus = (response: Response) => {
  if (response.status >= 200 && response.status < 300) { //eslint-disable-line
    return response;
  }
  const error = new Error(`HTTP Error ${response.statusText}`);
  error.message = response.statusText;
  throw error;
};

export const parseJSON = (response: Response) => {
  return response.json();
};

export const getPromises = () => {
  return fetch('/api/v1/promises/', {
    accept: 'application/json',
  })
    .then(checkStatus)
    .then(parseJSON);
};

export const signUp = (username: string, password: string) => {
  return fetch('/api/v1/rest-auth/registration/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: username,
      email: username,
      password1: password,
      password2: password,
    }),
  })
    .then(checkStatus)
    .then(parseJSON);
};

export const login = (username: string, password: string) => {
  return fetch('/api/v1/rest-auth/login/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: username,
      email: username,
      password: password,
    }),
  })
    .then(checkStatus)
    .then(parseJSON);
};
