/* @flow */
import reducer from '../reducer';
import { subjects } from '../../../utils/testFixtures';

describe('subjects reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      error: null,
      loading: false,
      subjects: null,
    });
  });

  it('should clear data and set Loading', () => {
    const action = {
      type: 'SUBJECTS_LOAD',
    };

    expect(reducer(undefined, action)).toEqual({
      error: null,
      loading: true,
      subjects: null,
    });
  });

  it('should error on fail', () => {
    const action = {
      type: 'SUBJECTS_LOAD_FAILURE',
      error: 'Couldnt get subjects',
    };

    expect(reducer(undefined, action)).toEqual({
      error: 'Couldnt get subjects',
      loading: false,
      subjects: null,
    });
  });

  it('should load data on success', () => {
    const action = {
      type: 'SUBJECTS_LOAD_SUCCESS',
      subjects,
    };

    expect(reducer(undefined, action)).toEqual({
      error: null,
      loading: false,
      subjects,
    });
  });
});
