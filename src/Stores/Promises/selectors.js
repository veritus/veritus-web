/* @flow */
import type { State, Promise, Politician } from '../../types';

export const promisesSelector = (state: State) => {
  const promises = state.promises.promises;
  const politicians: ?Array<Politician> = state.politicians.politicians;

  if (!politicians || !promises) return null;

  const enrichedPromises: Array<Promise> = promises.map(promise => {
    promise.politician = politicians[0];
  });

  return enrichedPromises;
};

export const promisesLoaded = (state: State) => state.promises.promises !== null;
