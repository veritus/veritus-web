/* @flow */
import type { State } from '../../types';

export const subjectsSelector = (state: State) => state.subjects.subjects;

export const subjectsLoaded = (state: State) => state.subjects.subjects !== null;
