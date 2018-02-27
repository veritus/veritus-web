/* @flow */
import React from 'react';
import moment from 'moment';

import CircularProgress from 'material-ui/CircularProgress';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import type { Case } from '../types';

export type Props = {
  parliamentCase: ?Case,
};

export class CaseDetail extends React.Component {
  props: Props;
  render() {
    const { parliamentCase } = this.props;
    if (!parliamentCase || !parliamentCase.id) {
      return (
        <CircularProgress
          style={{ position: 'absolute', top: '50%', left: '50%' }}
          size={80}
          thickness={5}
        />
      );
    }
    const style = {
      width: '80%',
      margin: 'auto',
      padding: '1%',
    };
    return (
      <Card style={style}>
        <CardTitle title={parliamentCase.name} />
        <CardText>
          <div>
            <div>
              {parliamentCase.case_type}
              {parliamentCase.status}
            </div>
            <div>
              <a href={parliamentCase.althingi_link}>
                Althingi
              </a>
              {parliamentCase.althingi_status}
            </div>
            <div>
              Creators:
              {parliamentCase.case_creators}
            </div>
            <div>
              <div>
                Created:
                {moment(parliamentCase.created).format('D MMM YYYY')}

              </div>
              <div>
                Last Modified:
                {moment(parliamentCase.modified).format('D MMM YYYY')}
              </div>
            </div>

          </div>
        </CardText>
      </Card>
    );
  }
}
export default CaseDetail;
