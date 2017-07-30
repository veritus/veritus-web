/* @flow */

export type PartyIdType = number;
export type PromiseIdType = number;
export type PoliticianIdType = number;
export type DistrictIdType = number;
export type CaseIdType = number;

export type PromiseType = {
  id: PromiseIdType,
  name: string,
  small_description: string,
  long_description: string,
  parliament: ParliamentType,
  created: string,
  modified: string,
  politician: PoliticianIdType,
  party: PartyIdType,
  fulfilled: boolean,
};

export type PartyType = {
  id: PartyIdType,
  name: string,
  website: string,
};

export type PoliticianType = {
  id: PoliticianIdType,
  name: string,
  initials: string,
  districtNumber: number,
  party: PartyType,
  district: DistrictType,
  promises: Array<PromiseType>,
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
  id: CaseIdType,
  name: string,
  number: number,
  case_type: string,
  case_status: string,
  parliament_session: ParliamentSessionType,
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

export type DistrictPromiseType = {
  id: PromiseIdType,
  name: string,
  fulfilled: boolean,
};

export type DistrictPoliticianType = {
  id: PoliticianIdType,
  name: string,
  initials: string,
  party: PartyType,
  promises: Array<DistrictPromiseType>,
};

export type DetailedDistrictType = {
  id: DistrictIdType,
  name: string,
  abbreviation: string,
  politicians: Array<DistrictPoliticianType>,
  created: string,
  modified: string,
};

// Redux

export type Dispatch = (action: Action | ThunkAction | PromiseAction) => *;
type GetState = () => State;
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => *;
type PromiseAction = Promise<Action>;

export type State = {
  politicians: {
    error: ?string,
    politicians: Array<PoliticianType>,
  },
  promises: {
    error: ?string,
    promises: Array<PromiseType>,
  },
};

export type Action = *;
