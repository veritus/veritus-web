/* @flow */
import type { ParliamentSessionType } from '../../types';
export type CaseId = number;

export type Case = {
  id: CaseId,
  name: string,
  number: number,
  case_type: string,
  status: string,
  parliament_session: ParliamentSessionType,
  created: string,
  modified: string,
};
