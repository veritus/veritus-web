/* @flow */

import { politiciansSelector, politiciansLoaded } from '../selectors';
import { initialState, politicians } from '../../../utils/testFixtures';

describe('Politicians selector', () => {
  it('loads initial state', () => {
    expect(politiciansSelector(initialState)).toEqual(null);
  });

  it('knows politicans have not been loaded', () => {
    expect(politiciansLoaded(initialState)).toEqual(false);
  });

  it('knows politicians have tried to load', () => {
    const loadedEmptyState = {
      ...initialState,
      politicians: {
        ...initialState.politicians,
        data: [],
      },
    };
    expect(politiciansLoaded(loadedEmptyState)).toEqual(true);
  });

  it('Returns politicians', () => {
    const loadedState = {
      ...initialState,
      politicians: {
        ...initialState.politicians,
        data: politicians,
      },
    };
    expect(politiciansSelector(loadedState)).toEqual(politicians);
  });
});
