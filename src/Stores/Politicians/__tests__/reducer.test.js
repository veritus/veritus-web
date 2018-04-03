/* @flow */
import reducer from '../reducer';
import { politicians } from '../../../utils/testFixtures';

describe('Politicians reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      errors: null,
      loading: false,
      data: null,
    });
  });

  it('should clear data and set Loading', () => {
    const action = {
      type: 'POLITICIANS_LOAD',
    };

    expect(reducer(undefined, action)).toEqual({
      errors: null,
      loading: true,
      data: null,
    });
  });

  it('should error on fail', () => {
    const action = {
      type: 'POLITICIANS_LOAD_FAILURE',
      errors: 'Couldnt get politicians',
    };

    expect(reducer(undefined, action)).toEqual({
      errors: 'Couldnt get politicians',
      loading: false,
      data: null,
    });
  });

  it('should load data on success', () => {
    const action = {
      type: 'POLITICIANS_LOAD_SUCCESS',
      data: politicians,
    };

    expect(reducer(undefined, action)).toEqual({
      errors: null,
      loading: false,
      data: politicians,
    });
  });
});
