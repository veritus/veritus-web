/* @flow */
import React from 'react';
import moment from 'moment';
import CircularProgress from 'material-ui/CircularProgress';
import { Card, CardTitle, CardText } from 'material-ui/Card';

import type { Case } from '../types';
import { STATUS_TO_BACKGROUND_COLOR, STATUS_TO_DESCRIPTION, unknown } from '../constants';
import styles from './styles';

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

    return (
      <Card style={styles.card}>
        <CardTitle title={`${parliamentCase.name} - ${parliamentCase.case_type}`} />
        <CardText>
          <div style={styles.contentContainer}>
            <div
              style={{
                ...styles.statusContainer,
                backgroundColor:
                  STATUS_TO_BACKGROUND_COLOR[parliamentCase.status] || unknown,
              }}
            >
              {STATUS_TO_DESCRIPTION[parliamentCase.status] ||
                STATUS_TO_DESCRIPTION.Unknown}
            </div>
            <div style={styles.althingiContainer}>
              <a
                href={parliamentCase.althingi_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                See on althingi.is - {parliamentCase.althingi_status}
              </a>
            </div>

            <div style={styles.dateContainer}>
              <div style={styles.date}>
                <div style={styles.dateLabel}>Created</div>
                <div>
                  {moment(parliamentCase.created).format('D MMM YYYY')}
                </div>

              </div>
              <div style={styles.date}>
                <div style={styles.dateLabel}>Last Modified</div>
                <div>
                  {moment(parliamentCase.modified).format('D MMM YYYY')}
                </div>
              </div>
            </div>
          </div>
        </CardText>
      </Card>
    );
  }
}
export default CaseDetail;
