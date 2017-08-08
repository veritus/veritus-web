/* @flow */
import type { State } from '../../types';

export const politiciansSelector = (state: State) => state.politicians.politicians;

export const politiciansLoaded = (state: State) => state.politicians.politicians !== null;
