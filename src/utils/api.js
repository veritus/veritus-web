/* @flow */
import { getToken } from './tokenStorage';
import { serverBaseUrl } from '../config';
import type {
  PoliticianType,
  PromiseType,
  PromiseId,
  Subject,
  SubjectId,
} from '../types';

import type { Case } from '../Stores/Cases/types';

export type ApiError = {
  message: string,
  response: {
    status: number,
    statusText: string,
  },
};

type BaseApiResponse = {
  error?: ApiError,
};

export type DataResponse<D> = Promise<BaseApiResponse & { data?: D }>;

export type LoginResponse = {
  key: string,
};

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

export type PartyId = number;
const STATUS_CODES = {
  NO_CONTENT: 204,
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

export const parseJSON = (response: Response) =>
  response.status === STATUS_CODES.NO_CONTENT ? null : response.json();

export const mapData = (json: ?JSON) => {
  const data = json && json.results ? json.results : json;
  return { data };
};

export const getPromisesByPoliticalParty = (partyId: PartyId) => {
  return fetch(`${serverBaseUrl}/v1/promises?parliament=${partyId}`, {
    accept: 'application/json',
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(mapData)
    .catch(error => ({ error }));
};

export const getParliamentCases = () => {
  return fetch(`${serverBaseUrl}/v1/cases/`, {
    accept: 'application/json',
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(mapData)
    .catch(error => ({ error }));
};

export const getParliamentCaseById = (id: number): DataResponse<Case> => {
  return fetch(`${serverBaseUrl}/v1/cases/${id}`, {
    accept: 'application/json',
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(mapData)
    .catch(error => ({ error }));
};

export const getPoliticianById = (id: number): DataResponse<PoliticianType> => {
  return fetch(`${serverBaseUrl}/v1/politicians/${id}`, {
    accept: 'application/json',
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(mapData)
    .catch(error => ({ error }));
};

export const getPromises = (): DataResponse<Array<PromiseType>> => {
  return fetch(`${serverBaseUrl}/v1/promises/`, {
    accept: 'application/json',
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(mapData)
    .catch(error => ({ error }));
};

export const getSubjects = (): DataResponse<Array<Subject>> => {
  return fetch(`${serverBaseUrl}/v1/subjects/`, {
    accept: 'application/json',
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(mapData)
    .catch(error => ({ error }));
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
  return fetch(`${serverBaseUrl}/v1/promises/`, {
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
    .then(parseJSON)
    .then(mapData)
    .catch(error => ({ error }));
};

export const linkSubjectPromise = (promiseId: PromiseId, subjectId: SubjectId) => {
  const token = getToken();
  if (!token) {
    throw new Error('Unauthorized action');
  }

  return fetch(`${serverBaseUrl}/v1/promises/subjects/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`,
    },
    body: JSON.stringify({
      promise: promiseId,
      subject: subjectId,
    }),
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(mapData)
    .catch(error => ({ error }));
};

export const getSubjectsPromises = () => {
  const token = getToken();
  if (!token) {
    throw new Error('Unauthorized action');
  }

  return fetch(`${serverBaseUrl}/v1/promises/subjects/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`,
    },
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(mapData)
    .catch(error => ({ error }));
};

export const deleteSubjectPromise = (subjectId: SubjectId) => {
  const token = getToken();
  if (!token) {
    throw new Error('Unauthorized action');
  }

  return fetch(`${serverBaseUrl}/v1/promises/subjects/${subjectId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`,
    },
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(mapData)
    .catch(error => ({ error }));
};

export const createSubject = (subject: string): DataResponse<Subject> => {
  const token = getToken();
  if (!token) {
    throw new Error('Unauthorized action');
  }

  return fetch(`${serverBaseUrl}/v1/subjects/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`,
    },
    body: JSON.stringify({
      name: subject,
    }),
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(mapData)
    .catch(error => ({ error }));
};

export const signUp = (
  username: string,
  password: string
): DataResponse<LoginResponse> => {
  return fetch(`${serverBaseUrl}/v1/rest-auth/registration/`, {
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
    .then(parseJSON)
    .then(mapData)
    .catch(error => ({ error }));
};

export const login = (
  username: string,
  password: string
): DataResponse<LoginResponse> => {
  return fetch(`${serverBaseUrl}/v1/rest-auth/login/`, {
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
    .then(parseJSON)
    .then(mapData)
    .catch(error => ({ error }));
};
