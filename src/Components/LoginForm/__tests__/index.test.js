/* @flow */
import React from 'react';
import { mount } from 'enzyme';
import LoginForm from '../index';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

describe('Login Form', () => {
  const muiTheme = getMuiTheme();
  const submitMock = jest.fn();
  // const submitMock = () => console.error('hello');

  it('should call onSubmit', () => {
    const wrapper = mount(<LoginForm onSubmit={submitMock} />, {
      context: { muiTheme },
      childContextTypes: { muiTheme: React.PropTypes.object },
    });
    const emailInput = wrapper.find('.qa-login-email input').first();
    const passwordInput = wrapper.find('.qa-login-password input').first();
    const submitButton = wrapper.find('.qa-login-submit button').first();

    emailInput.simulate('change', { target: { value: 'foo@bar.com' } });
    passwordInput.simulate('change', { target: { value: 'strongpassword1' } });

    submitButton.simulate('click');
    console.log(submitButton.debug());

    expect(submitMock).toBeCalled();
  });
});
