/* @flow */

import type { DistrictId, District } from './Components/Districts/types';
import type { PartyId as _PartyId, Party as _Party } from './Components/Parties/types';
import type { Case as _Case } from './Stores/Cases/types';
import type { VoteRecord as _VoteRecord } from './Stores/Votes/types';

export type ParliamentId = number;
export type PartyId = _PartyId;
export type PromiseId = number;
export type PoliticianId = number;
export type SubjectId = number;
export type ParliamentSessionId = number;
export type SubjectPromiseId = number;
export type Case = _Case;
export type VoteRecord = _VoteRecord;

export type Party = _Party;

export type User = {
  email: string,
};

export type CaseIdParam = {
  caseId: number,
};

export type MatchTypeCaseId = {
  params: CaseIdParam,
};

export type PoliticianIdParam = {
  politicianId: number,
};

export type MatchTypePoliticianId = {
  params: PoliticianIdParam,
};

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

export type DecoratedPromise = {
  ...PromiseType,
  subjects: Array<DecoratedSubject>,
};

export type DecoratedSubject = {
  ...Subject,
  subjectPromiseId: SubjectPromiseId,
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
  party: PartyId,
  district: District,
  promises: Array<PromiseId>,
};

export type ParliamentSessionType = {
  id: ParliamentSessionId,
  name: string,
  parliament: ParliamentType,
};

export type ParliamentType = {
  id: number,
  name: string,
};

export type DistrictPromiseType = {
  id: PromiseId,
  name: string,
  fulfilled: boolean,
};

export type DetailedDistrictType = {
  id: DistrictId,
  name: string,
  abbreviation: string,
  politicians: Array<number>,
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

export type SubjectPromise = {
  id: SubjectPromiseId,
  subject: SubjectId,
  promise: PromiseId,
  created: string,
  modified: string,
};

// Redux

export type Dispatch = (action: Action | ThunkAction | PromiseAction) => *;
type GetState = () => State;
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => *;
type PromiseAction = Promise<Action>;

export type State = {
  user: {
    error: ?string,
    loading: boolean,
    data: ?User,
  },
  parties: {
    error: ?string,
    loading: boolean,
    data: ?Array<Party>,
  },
  politicians: {
    error: ?string,
    loading: boolean,
    data: ?Array<PoliticianType>,
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
  subjectsPromises: {
    error: ?string,
    loading: boolean,
    data: ?Array<SubjectPromise>,
  },
  feedback: {
    message: ?string,
  },
  cases: {
    data: ?Array<Case>,
    loading: boolean,
    error: ?string,
  },
};

export type Action = *;
