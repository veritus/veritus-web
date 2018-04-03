/* @flow */
import type { PartyId, State } from '../../types';

export const partiesSelector = (state: State) => state.parties.data;

export const partiesLoaded = (state: State) => state.parties.data !== null;

export const selectParty = (state: State, partyId: PartyId) => {
  const { data } = state.parties;

  if (!data) return null;
  const foundParty = data.find(party => party.id === partyId);
  return foundParty;
};
