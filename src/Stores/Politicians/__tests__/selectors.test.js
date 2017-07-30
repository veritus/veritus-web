/* @flow */

import { politiciansSelector } from '../selectors';
import { initialState, politicians } from '../../../utils/testFixtures';

describe('Politicians selector', () => {
  it('Returns politicians', () => {
    expect(politiciansSelector(initialState)).toEqual(politicians);
  });
});
