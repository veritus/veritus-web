/* @flow */

import { promisesSelector } from '../selectors';
import { initialState, promises } from '../../../utils/testFixtures';

describe('Promises selector', () => {
  it('loads initial state', () => {
    expect(promisesSelector(initialState)).toEqual(null);
  });

  it('Returns promises', () => {
    const loadedState = {
      ...initialState,
      promises: {
        ...initialState.promises,
        promises,
      },
    };
    expect(promisesSelector(loadedState)).toEqual(promises);
  });
});
