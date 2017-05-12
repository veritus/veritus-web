/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import LoginForm from '../index';

describe('Login Form', () => {
  const submitMock = jest.fn();
  it('should call onSubmit', () => {
    const wrapper = shallow(<LoginForm onSubmit={submitMock} />);

    const emailInput = wrapper.find('input type=text').first();
    const passwordInput = wrapper.find('input type=password').first();
    const submitButton = wrapper.find('input type=submit').first();

    emailInput.simulate('change', { target: { value: 'foo@bar.com' } });
    passwordInput.simulate('change', { target: { value: 'strongpassword1' } });

    submitButton.simulate('click');
    console.log(submitButton);

    expect(submitMock).toBeCalled();
  });
});
