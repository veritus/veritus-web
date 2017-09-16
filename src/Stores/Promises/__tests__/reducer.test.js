/* @flow */
import reducer from '../reducer';
import { promises } from '../../../utils/testFixtures';

describe('Promises reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      error: null,
      loading: false,
      promises: null,
    });
  });

  it('should clear data and set Loading', () => {
    const action = {
      type: 'PROMISES_LOAD',
    };

    expect(reducer(undefined, action)).toEqual({
      error: null,
      loading: true,
      promises: null,
    });
  });

  it('should error on fail', () => {
    const action = {
      type: 'PROMISES_LOAD_FAILURE',
      error: 'Couldnt get promises',
    };

    expect(reducer(undefined, action)).toEqual({
      error: 'Couldnt get promises',
      loading: false,
      promises: null,
    });
  });

  it('should load data on success', () => {
    const action = {
      type: 'PROMISES_LOAD_SUCCESS',
      promises,
    };

    expect(reducer(undefined, action)).toEqual({
      error: null,
      loading: false,
      promises,
    });
  });
});
