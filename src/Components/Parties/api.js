/* @flow */

import { serverBaseUrl } from '../../config';
import { checkStatus, parseJSON, mapData } from '../../utils/api';
import type { PartyId, Party } from './types';
import type { DataResponse } from '../../utils/api';

export const getPoliticalParties = () => {
  return fetch(`${serverBaseUrl}/v1/parties/`, {
    accept: 'application/json',
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(mapData)
    .catch(error => ({ error }));
};

export const getPartyById = (id: PartyId): DataResponse<Party> => {
  return fetch(`${serverBaseUrl}/v1/parties/${id}`, {
    accept: 'application/json',
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(mapData)
    .catch(error => ({ error }));
};
