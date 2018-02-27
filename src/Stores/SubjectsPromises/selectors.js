/* @flow */
import type { State } from '../../types';

export const subjectsPromisesSelector = (state: State) => {
  const subjectPromises = state.subjectsPromises.data;

  if (!subjectPromises) return null;

  return subjectPromises;
};
