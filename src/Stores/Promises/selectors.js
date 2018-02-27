/* @flow */
import type { State, PromiseType } from '../../types';
import { subjectsSelector } from '../Subjects/selectors';
import { subjectsPromisesSelector } from '../SubjectsPromises/selectors';
import { createSelector } from 'reselect';

export const promisesSelector = (state: State): ?Array<PromiseType> =>
  state.promises.promises ? state.promises.promises : null;

export const promiseSubjectsSelector: (
  state: State
) => ?Array<
  PromiseType
> = createSelector(
  promisesSelector,
  subjectsSelector,
  subjectsPromisesSelector,
  (promises, subjects, subjectsPromises) => {
    if (!promises) {
      return null;
    }
    return promises.map(promise => {
      const links = subjectsPromises
        ? subjectsPromises.filter(sP => sP.promise === promise.id)
        : [];
      const subs = links.map(
        link => (subjects ? subjects.find(s => link.subject === s.id) : [])
      );
      return { ...promise, subjects: subs };
    });
  }
);
export const promisesLoaded = (state: State) => state.promises.promises !== null;
