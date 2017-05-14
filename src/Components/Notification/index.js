/* @flow */
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Message from 'material-ui/svg-icons/communication/message';
import ReactMaterialUiNotifications from 'react-materialui-notifications';
import { deepOrange500 } from 'material-ui/styles/colors';
import moment from 'moment';

export class Notification extends React.Component {
  state: {
    count: number,
  };
  constructor() {
    super();
    this.state = { count: 0 };
  }

  showNotification = () => {
    ReactMaterialUiNotifications.showNotification({
      title: 'Title',
      additionalText: `Some message to be displayed ${this.state.count}`,
      icon: <Message />,
      iconBadgeColor: deepOrange500,
      overflowText: 'joe@gmail.com',
      timestamp: moment().format('h:mm A'),
      zDepth: 3,
    });
    // update notifications count
    this.setState({
      count: ++this.state.count,
    });
  };
  render() {
    return (
      <div>
        <RaisedButton label="Show Notification" onTouchTap={this.showNotification} />
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

export default Notification;
