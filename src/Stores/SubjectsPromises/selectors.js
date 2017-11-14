/* @flow */
import type { State } from '../../types';

export const subjectsPromisesSelector = (state: State) => {
  const subjectPromises = state.subjectsPromises.subjectsPromises;

  if (!subjectPromises) return null;

  return subjectPromises;
};
