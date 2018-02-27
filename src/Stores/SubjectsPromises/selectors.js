/* @flow */
import type { State } from '../../types';

export const subjectsPromisesSelector = (state: State) =>
  state.subjectsPromises.data ? state.subjectsPromises.data : null;
