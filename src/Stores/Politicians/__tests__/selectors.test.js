/* @flow */

import { politiciansSelector } from '../selectors';
import { initialState, politicians } from '../../../utils/testFixtures';

describe('Politicians selector', () => {
  it('loads initial state', () => {
    expect(politiciansSelector(initialState)).toEqual(null);
  });

  it('Returns politicians', () => {
    const loadedState = {
      ...initialState,
      politicians: {
        ...initialState.politicians,
        politicians,
      },
    };
    expect(politiciansSelector(loadedState)).toEqual(politicians);
  });
});
