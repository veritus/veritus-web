/* @flow */
import type { State, User } from '../../types';

export const userSelector = (state: State): ?User =>
  state.user.data ? state.user.data : null;
