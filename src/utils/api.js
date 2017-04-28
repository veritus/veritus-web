/* @flow */

export type ResponseType = {
  status: number,
  statusText: string,
  json: JSON,
};

export const checkStatus = (response: ResponseType) => {
  console.log(response);
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(`HTTP Error ${response.statusText}`);
  error.message = response.statusText;
  console.log('error > ', error); // eslint-disable-line no-console
  console.log('body > ', response.body);
  throw error;
};

export const parseJSON = (response: ResponseType) => {
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
  });
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
  });
};
