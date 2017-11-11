/* @flow */

export type PartyId = number;
export type ParliamentId = number;
export type PromiseId = number;
export type PoliticianId = number;
export type DistrictId = number;
export type CaseId = number;
export type SubjectId = number;

export type PromiseType = {
  id: PromiseId,
  name: string,
  small_description: string,
  long_description: string,
  parliament: ParliamentType,
  created: string,
  modified: string,
  politician: *,
  party: PartyId,
  fulfilled: boolean,
};

export type PartyType = {
  id: PartyId,
  name: string,
  website: string,
};

export type PoliticianType = {
  id: PoliticianId,
  name: string,
  initials: string,
  districtNumber: number,
  party: PartyType,
  district: DistrictType,
  promises: Array<PromiseType>,
};

export type ParliamentSessionType = {
  id: ParliamentId,
  name: string,
  parliament: ParliamentType,
};

export type ParliamentType = {
  id: number,
  name: string,
};

export type CaseType = {
  id: CaseId,
  name: string,
  number: number,
  case_type: string,
  case_status: string,
  parliament_session: ParliamentSessionType,
  created: string,
  modified: string,
};

export type DistrictType = {
  id: DistrictId,
  name: string,
  abbreviation: string,
  created: string,
  modified: string,
};

export type DistrictPromiseType = {
  id: PromiseId,
  name: string,
  fulfilled: boolean,
};

export type DistrictPoliticianType = {
  id: PoliticianId,
  name: string,
  initials: string,
  party: PartyType,
  promises: Array<DistrictPromiseType>,
};

export type DetailedDistrictType = {
  id: DistrictId,
  name: string,
  abbreviation: string,
  politicians: Array<DistrictPoliticianType>,
  created: string,
  modified: string,
};

export type Subject = {
  id: SubjectId,
  name: string,
  created: string,
  modified: string,
  description: ?string,
  parliament_session: ?ParliamentId,
  number: ?string,
  parent: ?string,
};

// Redux

export type Dispatch = (action: Action | ThunkAction | PromiseAction) => *;
type GetState = () => State;
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => *;
type PromiseAction = Promise<Action>;

export type State = {
  politicians: {
    error: ?string,
    loading: boolean,
    politicians: ?Array<PoliticianType>,
  },
  promises: {
    error: ?string,
    loading: boolean,
    promises: ?Array<PromiseType>,
  },
  subjects: {
    error: ?string,
    loading: boolean,
    subjects: ?Array<Subject>,
  },
};

export type Action = *;
