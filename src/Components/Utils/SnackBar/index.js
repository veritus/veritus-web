/* @flow */
import React from 'react';
import MatieralSnackBar from 'material-ui/Snackbar';
import { connect } from 'react-redux';
import type { Connector } from 'react-redux';
import { clearError as reduxClearError } from '../../../Stores/Common/actions';
import type { Dispatch, State } from '../../../types';

type OwnProps = {};

type ReduxProps = {
  error: ?string,
  clearError: () => void,
};

type Props = OwnProps & ReduxProps;

class SnackBar extends React.Component {
  props: Props;

  render() {
    const { error, clearError } = this.props;

    return (
      <MatieralSnackBar
        open={Boolean(error)}
        message={error}
        autoHideDuration={4000}
        onRequestClose={clearError}
      />
    );
  }
}

const mapStateToProps = (state: State) => {
  return {
    error: state.common.error,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    clearError: () => {
      dispatch(reduxClearError());
    },
  };
};

const connector: Connector<OwnProps, Props> = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default connector(SnackBar);
