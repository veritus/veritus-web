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

    emailInput.node.value = 'foo@bar.com';
    passwordInput.node.value = 'strongpassword1';
    emailInput.simulate('change', emailInput);
    passwordInput.simulate('change', passwordInput);
    //submitButton.simulate('change', submitButton);
    wrapper.find('[type="submit"]').get(0).click();
    //submitButton.simulate('click');

    expect(submitMock).toBeCalled();
  });
});
