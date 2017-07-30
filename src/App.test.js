/* @flow */
import React from 'react';
import ReactDOM from 'react-dom';
import fetchMock from 'fetch-mock';

import App from './App';
import { politicians } from './utils/testFixtures';

// Root route is Politicians. So serve those
fetchMock.get('end:/api/v1/politicians/', politicians);

describe('App base file', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
});
