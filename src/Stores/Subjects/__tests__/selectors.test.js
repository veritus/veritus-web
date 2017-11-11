/* @flow */

import { subjectsSelector, subjectsLoaded } from '../selectors';
import { initialState, subjects } from '../../../utils/testFixtures';

describe('subjects selector', () => {
  it('loads initial state', () => {
    expect(subjectsSelector(initialState)).toEqual(null);
  });

  it('knows subjects have not been loaded', () => {
    expect(subjectsLoaded(initialState)).toEqual(false);
  });

  it('knows subjects have tried to load', () => {
    const loadedEmptyState = {
      ...initialState,
      subjects: {
        ...initialState.subjects,
        subjects: [],
      },
    };
    expect(subjectsLoaded(loadedEmptyState)).toEqual(true);
  });

  it('Returns subjects', () => {
    const loadedState = {
      ...initialState,
      subjects: {
        ...initialState.subjects,
        subjects,
      },
    };
    expect(subjectsSelector(loadedState)).toEqual(subjects);
  });
});
