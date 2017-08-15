/* @flow */
import reducer from '../reducer';
import { politicians } from '../../../utils/testFixtures';

describe('Politicians reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      error: null,
      loading: false,
      politicians: null,
    });
  });

  it('should clear data and set Loading', () => {
    const action = {
      type: 'POLITICIANS_LOAD',
    };

    expect(reducer(undefined, action)).toEqual({
      error: null,
      loading: true,
      politicians: null,
    });
  });

  it('should error on fail', () => {
    const action = {
      type: 'POLITICIANS_LOAD_FAILURE',
      error: 'Couldnt get politicians',
    };

    expect(reducer(undefined, action)).toEqual({
      error: 'Couldnt get politicians',
      loading: false,
      politicians: null,
    });
  });

  it('should load data on success', () => {
    const action = {
      type: 'POLITICIANS_LOAD_SUCCESS',
      politicians,
    };

    expect(reducer(undefined, action)).toEqual({
      error: null,
      loading: false,
      politicians,
    });
  });
});
