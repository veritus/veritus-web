/* @flow */
import { serverBaseUrl } from '../../config';
import { checkStatus, parseJSON, mapData } from '../../utils/api';
import type { DistrictId, District } from './types';
import type { DataResponse } from '../../types';

export const getDistrictById = (id: DistrictId): DataResponse<District> => {
  return fetch(`${serverBaseUrl}/v1/districts/${id}`, {
    accept: 'application/json',
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(mapData)
    .catch(error => ({ error }));
};

export const getDistricts = () => {
  return fetch(`${serverBaseUrl}/v1/districts/`, {
    accept: 'application/json',
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(mapData)
    .catch(error => ({ error }));
};
