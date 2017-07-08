/* @flow */

export type PoliticianIdType = number;
export type DistrictIdType = number;

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
  'id': PoliticianIdType,
  'name': string,
  'initials': string,
  'districtNumber': number,
  'party': PartyType,
  'district': DistrictType,
  'promises': Array<PromiseType>,
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

export type DistrictType = {
  id: DistrictIdType,
  name: string,
  abbreviation: string,
  created: string,
  modified: string,
};
