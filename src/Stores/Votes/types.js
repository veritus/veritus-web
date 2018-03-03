/* @flow */
import type { CaseId } from '../Cases/types';
export type VoteRecordId = number;
export type VoteId = number;

export type VoteRecord = {
  id: VoteRecordId,
  case: CaseId,
  althingi_id: number,
  no: number,
  yes: number,
  didNotVote: number,
  althingi_result: string,
  votes: Array<VoteId>,
};

export type Vote = {
  parliament_member: number,
  althingi_result: string,
  vote_record: VoteRecordId,
};
