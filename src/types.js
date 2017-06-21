/* @flow */
export type PromiseType = {
  id: number,
  title: string,
  fulfilled: boolean,
};

export type PoliticianType = {
  id: number,
  first_name: string,
  last_name: string,
  party_name: string,
  promise_completion: number,
};

export type PartyType = {
  id: number,
  name: string,
  website: string,
};

export type ParliamentSessionType = {
  id: number,
  name: string,
  parliament: ParliamentType,
};

export type ParliamentType = {
  id: number,
  name: string,
};

export type CaseType = {
  id: number,
  case_status: string,
  case_type: string,
  created: string,
  name: string,
  number: number,
  modified: string,
  parliament_session: ParliamentSessionType,
};
