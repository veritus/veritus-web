/* @flow */
import React from 'react';
import { mount } from 'enzyme';
import PromiseForm from '../index';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { parties, politicians } from '../../../../utils/testFixtures';

describe('Promise Form', () => {
  const muiTheme = getMuiTheme();
  const submitMock = jest.fn();
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <PromiseForm parties={parties} politicians={politicians} onSubmit={submitMock} />,
      {
        context: { muiTheme },
      childContextTypes: { muiTheme: React.PropTypes.object }, // eslint-disable-line
      }
    );
  });

  afterEach(() => {
    submitMock.mockClear();
  });

  it('should not call onSubmit with invalid input', () => {
    wrapper.find('[type="submit"]').get(0).click();

    expect(submitMock).toHaveBeenCalledTimes(0);
  });
});
