/* @flow */
import type { PromiseType } from '../types';

export const promiseCompletionPercentage = (promiseList: Array<PromiseType>): number => {
  const totalPromises = promiseList.length;
  if (totalPromises === 0) {
    return 0;
  }

  const fulfilledPromises = promiseList.filter(promise => promise.fulfilled);
  /* eslint-disable no-magic-numbers */
  return Math.floor(fulfilledPromises.length / totalPromises * 100);
};
