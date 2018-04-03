/* @flow */
import type { CaseId } from '../Cases/types';
import type { PoliticianType } from '../../types';
export type VoteRecordId = number;
export type VoteId = number;

export type VoteRecord = {
  case: CaseId,
  althingi_id: number,
  no: number,
  yes: number,
  didNotVote: number,
  althingi_result: string,
  votes: Array<Vote>,
};

export type Vote = {
  parliament_member: PoliticianType,
  althingi_result: string,
  vote_record: VoteRecordId,
};
