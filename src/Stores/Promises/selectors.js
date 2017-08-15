/* @flow */
import type { State, PromiseType, PoliticianType } from '../../types';

export const promisesSelector = (state: State) => {
  const promises = state.promises.promises;
  const politicians: ?Array<PoliticianType> = state.politicians.politicians;

  if (!politicians || !promises) return null;

  return promises;
};

export const promisesLoaded = (state: State) => state.promises.promises !== null;
