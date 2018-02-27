/* @flow */
import deepFreeze from 'deep-freeze';
import { subjectsPromisesSelector } from '../selectors';
import { initialState } from '../../../utils/testFixtures';

describe('SubjectsPromises Selector', () => {
  it('loads initial state', () => {
    expect(subjectsPromisesSelector(initialState)).toEqual(null);
  });

  it('Returns subjectPromises', () => {
    const subjectsPromises = [
      {
        id: 1,
        promise: 4,
        subject: 3,
        created: '2017-11-12T12:24:14.060672Z',
        modified: '2017-11-12T12:24:14.060699Z',
      },
    ];
    const loadedState = {
      ...initialState,
      subjectsPromises: {
        ...initialState.subjectsPromises,
        data: subjectsPromises,
      },
    };

    deepFreeze(loadedState);

    expect(subjectsPromisesSelector(loadedState)).toEqual(subjectsPromises);
  });
});
