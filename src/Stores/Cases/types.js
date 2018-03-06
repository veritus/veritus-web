/* @flow */
import type { ParliamentSessionId } from '../../types';
export type CaseId = number;

export type Case = {
  id: CaseId,
  name: string,
  number: number,
  case_type: string,
  status: string,
  parliament_session: ParliamentSessionId,
  created: string,
  modified: string,
  althingi_link: string,
  althingi_status: string,
  case_creators: Array<number>,
};
