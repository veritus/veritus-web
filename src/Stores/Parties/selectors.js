/* @flow */
import { createSelector } from 'reselect';
import type { State } from '../../types';

export const partiesSelector = (state: State) => state.parties.data;

export const partiesLoaded = (state: State) => state.parties.data !== null;

export const selectParty = (state: State, partyId: PartyId) =>
  createSelector(partiesSelector, parties => {
    console.log('selecting party');
    if (!parties) return null;
    return parties.find(party => party.id === partyId);
  });
