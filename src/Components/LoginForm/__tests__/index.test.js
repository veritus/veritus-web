/* @flow */
import React from 'react';
import { mount } from 'enzyme';
import LoginForm from '../index';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

describe('Login Form', () => {
  const muiTheme = getMuiTheme();
  const submitMock = jest.fn();
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<LoginForm onSubmit={submitMock} />, {
      context: { muiTheme },
      childContextTypes: { muiTheme: React.PropTypes.object }, // eslint-disable-line
    });
  });

  afterEach(() => {
    submitMock.mockClear();
  });

  it('should call onSubmit', () => {
    const emailInput = wrapper.find('.qa-login-email input').first();
    const passwordInput = wrapper.find('.qa-login-password input').first();
    const submitButton = wrapper.find('.qa-login-submit button').first();

    emailInput.node.value = 'foo@bar.com';
    passwordInput.node.value = 'strongpassword1';
    emailInput.simulate('change', emailInput);
    passwordInput.simulate('change', passwordInput);

    wrapper.find('[type="submit"]').get(0).click();

    expect(submitMock).toBeCalled();
  });

  it('should not call onSubmit with invalid input', () => {
    const submitButton = wrapper.find('.qa-login-submit button').first();

    wrapper.find('[type="submit"]').get(0).click();

    expect(submitMock).toHaveBeenCalledTimes(0);
  });
});
