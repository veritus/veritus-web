/* @flow */
import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import { Card, CardTitle } from 'material-ui/Card';
import type { Case } from '../types';

export type Props = {
  case: Case,
};

export class CaseDetailContainer extends React.Component {
  props: Props;
  render() {
    if (!this.props.case.id) {
      return <CircularProgress />;
    }
    const style = {
      width: '80%',
      margin: 'auto',
      padding: '1%',
    };
    return (
      <Card style={style}>
        <CardTitle title={this.props.case.name} />
      </Card>
    );
  }
}
export default CaseDetailContainer;
