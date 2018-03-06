/* @flow */
import type { State } from '../../types';

export const politiciansSelector = (state: State) => state.politicians.data;

export const politiciansLoaded = (state: State) => state.politicians.data !== null;
