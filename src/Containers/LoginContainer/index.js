/* @flow */
import React, { Component } from 'react';
import ReactMaterialUiNotifications from 'react-materialui-notifications';
import Done from 'material-ui/svg-icons/action/done';
import { green500 } from 'material-ui/styles/colors';
import moment from 'moment';
import { LoginForm } from '../../Components/LoginForm';
import { login } from '../../utils/api';
import type { LoginType } from '../../utils/api';
import { saveToken } from '../../utils/tokenStorage';
import { Notification } from '../../Components/Notification';

class LoginContainer extends Component {
  successNotification = () => {
    console.log('notificiation running');
    ReactMaterialUiNotifications.showNotification({
      title: 'Title',
      additionalText: `Successfully logged in`,
      icon: <Done />,
      iconBadgeColor: green500,
      overflowText: 'joe@gmail.com',
      timestamp: moment().format('h:mm A'),
      autoHide: 3000,
    });
  };

  submit = (data: LoginType) => {
    login(data.email, data.password)
      .then(resp => {
        const token = resp.key;
        if (token) {
          saveToken(token);
          this.successNotification();
        } else {
          throw new Error('Login failed');
        }
      })
      .catch(error => {
        console.log('invalid login');
      });
  };
  render() {
    return (
      <div>
        <LoginForm onSubmit={this.submit} />
        <button onClick={this.successNotification}> Click me! </button>
        <ReactMaterialUiNotifications
          desktop={true}
          transitionName={{
            leave: 'dummy',
            leaveActive: 'fadeOut',
            appear: 'dummy',
            appearActive: 'zoomInUp',
          }}
          transitionAppear={true}
          transitionLeave={true}
        />
      </div>
    );
  }
}

export default LoginContainer;
