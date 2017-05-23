/* @flow */
import { saveToken, getToken, deleteToken, isAuthenticated } from '../tokenStorage';

describe('Token storage', () => {
  it('saves token', () => {
    const expectedResult = 'my-token';

    saveToken('my-token');
    const actualResult = getToken();

    expect(actualResult).toEqual(expectedResult);
  });

  it('removes token', () => {
    const expectedResult = null;

    saveToken('my-token');
    deleteToken();
    const actualResult = getToken();

    expect(actualResult).toEqual(expectedResult);
  });

  it('correctly identifies unauthenticated user', () => {
    const expectedResult = false;

    deleteToken();
    const actualResult = isAuthenticated();

    expect(actualResult).toEqual(expectedResult);
  });

  it('correctly identifies authenticated user', () => {
    const expectedResult = true;

    saveToken('my-token');
    const actualResult = isAuthenticated();

    expect(actualResult).toEqual(expectedResult);
  });
});
