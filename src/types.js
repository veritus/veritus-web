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
};
