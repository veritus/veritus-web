/* @flow */
import { getToken } from './tokenStorage';

export type LoginType = {
  email: string,
  password: string,
};

export type PromiseFormType = {
  name: string,
  shortDescription: string,
  longDescription: string,
  parliamentId: number,
  politicianId: number,
  partyId: number,
};

export const checkStatus = (response: Response) => {
  /* eslint-disable no-magic-numbers */
  if (response.status >= 200 && response.status < 300) {
    /* eslint-enable no-magic-numbers */
    return response;
  }
  const error = new Error(`HTTP Error ${response.statusText}`);
  error.message = response.statusText;
  throw error;
};

export const parseJSON = (response: Response) => {
  return response.json();
};

export const getPoliticalParties = () => {
  return fetch('/api/v1/parties/', {
    accept: 'application/json',
  })
    .then(checkStatus)
    .then(parseJSON);
};

export const getPoliticans = () => {
  return fetch('/api/v1/politicians/', {
    accept: 'application/json',
  })
    .then(checkStatus)
    .then(parseJSON);
};

export const getParliamentCases = () => {
  return fetch('/api/v1/cases/', {
    accept: 'application/json',
  })
    .then(checkStatus)
    .then(parseJSON);
};

export const getPromises = () => {
  return fetch('/api/v1/promises/', {
    accept: 'application/json',
  })
    .then(checkStatus)
    .then(parseJSON);
};

export const createPromise = (
  name: string,
  small_description: string,
  long_description: string,
  parliament: number,
  politician_id?: number,
  party_id?: number
) => {
  const token = getToken();
  if (!token) {
    throw new Error('Unauthorized action');
  }
  return fetch('/api/v1/promises/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`,
    },
    body: JSON.stringify({
      name,
      small_description,
      long_description,
      parliament,
      politician: politician_id,
      party: party_id,
    }),
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
