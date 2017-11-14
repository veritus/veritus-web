/* @flow */
export type CaseId = number;

export type Case = {
  id: CaseId,
  name: string,
  number: number,
  case_type: string,
  case_status: string,
  parliament_session: ParliamentSessionType,
  created: string,
  modified: string,
};
