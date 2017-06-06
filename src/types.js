/* @flow */
export type PromiseType = {
  id: number,
  title: string,
  fulfilled: boolean,
};

export type PartyType = {
  id: number,
  name: string,
  website: string,
};

export type PoliticianType = {
  id: number,
  name: string,
  party: PartyType,
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
  modified: string,
};
