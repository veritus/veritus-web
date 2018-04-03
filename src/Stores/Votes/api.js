/* @flow */

import type { VoteRecord } from './types';
import type { CaseId } from '../Cases/types';
import { serverBaseUrl } from '../../config';
import { checkStatus, parseJSON, mapData } from '../../utils/api';
import type { DataResponse } from '../../utils/api';

export const getVoteRecordByCaseId = (caseId: CaseId): DataResponse<VoteRecord> => {
  return fetch(`${serverBaseUrl}/v1/voteRecord/?case=${caseId}`, {
    accept: 'application/json',
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(mapData)
    .catch(error => ({ error }));
};
