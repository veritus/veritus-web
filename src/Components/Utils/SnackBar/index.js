/* @flow */
import React from 'react';
import MatieralSnackBar from 'material-ui/Snackbar';

class SnackBar extends React.Component {
  render() {
    return (
      <MatieralSnackBar open={true} message="Hello Stephen" autoHideDuration={4000} />
    );
  }
}

export default SnackBar;
