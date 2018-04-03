/* @flow */
import type { State, PromiseType, DecoratedPromise } from '../../types';
import { subjectsSelector } from '../Subjects/selectors';
import { subjectsPromisesSelector } from '../SubjectsPromises/selectors';
import { createSelector } from 'reselect';

export const promisesSelector = (state: State): ?Array<PromiseType> =>
  state.promises.promises ? state.promises.promises : null;

export const promiseSubjectsSelector: (
  state: State
) => ?Array<
  DecoratedPromise
> = createSelector(
  promisesSelector,
  subjectsSelector,
  subjectsPromisesSelector,
  (promises, subjects, subjectsPromises) => {
    // Need to pull this to a const so that Flow understands nothing has changed
    const _subjects = subjects;
    if (!promises || !_subjects) {
      return null;
    }
    return promises.map(promise => {
      const links = subjectsPromises
        ? subjectsPromises.filter(sP => sP.promise === promise.id)
        : [];
      const subs = links.map(link => {
        const subject = _subjects.find(s => link.subject === s.id);
        if (!subject) {
          throw new Error(
            'Promises selector: Found subjectPromise link without subject',
            link
          );
        }
        return {
          ...subject,
          subjectPromiseId: link.id,
        };
      });
      return { ...promise, subjects: subs };
    });
  }
);
export const promisesLoaded = (state: State) => state.promises.promises !== null;
