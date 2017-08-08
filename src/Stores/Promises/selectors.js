/* @flow */
import type { State } from '../../types';

export const promisesSelector = (state: State) => state.promises.promises;
