/* @flow */
import React from 'react';
import MaterialSnackBar from 'material-ui/Snackbar';
import { connect } from 'react-redux';
import type { Connector } from 'react-redux';
import { clearMessage as reduxClearMessage } from '../../../Stores/Feedback/actions';
import type { Dispatch, State } from '../../../types';

type OwnProps = {};

type ReduxProps = {
  message: ?string,
  clearMessage: () => void,
};

type Props = OwnProps & ReduxProps;

class SnackBar extends React.Component {
  props: Props;

  render() {
    const { message, clearMessage } = this.props;

    return (
      <MaterialSnackBar
        open={Boolean(message)}
        message={message}
        autoHideDuration={4000}
        onRequestClose={clearMessage}
      />
    );
  }
}

const mapStateToProps = (state: State) => {
  return {
    message: state.feedback.message,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    clearMessage: () => {
      dispatch(reduxClearMessage());
    },
  };
};

const connector: Connector<OwnProps, Props> = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default connector(SnackBar);
