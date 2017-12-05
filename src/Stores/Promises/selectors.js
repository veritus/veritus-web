/* @flow */
import type { State, PromiseType, LinkedPromise } from '../../types';
import { subjectsSelector } from '../Subjects/selectors';
import { subjectsPromisesSelector } from '../SubjectsPromises/selectors';
import { createSelector } from 'reselect';

export const promisesSelector = (state: State): ?Array<PromiseType> => {
  const promises = state.promises.promises;

  if (!promises) return null;

  return promises;
};

export const promiseSubjectsSelector: (
  state: State
) => ?Array<
  LinkedPromise
> = createSelector(
  promisesSelector,
  subjectsSelector,
  subjectsPromisesSelector,
  (promises, subjects, subjectsPromises) => {
    if (!promises) {
      return null;
    }
    const subed = subjects;
    return promises.map(promise => {
      const links = subjectsPromises
        ? subjectsPromises.filter(sP => sP.promise === promise.id)
        : [];
      const subs = subed ? links.map(link => subed.find(s => link.subject === s.id)) : [];
      return { ...promise, subjects: subs };
    });
  }
);
export const promisesLoaded = (state: State) => state.promises.promises !== null;
