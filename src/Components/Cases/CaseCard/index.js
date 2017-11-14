/* @flow */
import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import Paper from 'material-ui/Paper';

import type { Case } from '../types';

const moment = require('moment');

export type Props = {
  parliament_case: Case,
};

const styles = {
  container: {
    width: '100%',
    overflow: 'auto',
  },
  field: {
    width: '27%',
    margin: '3%',
    float: 'left',
  },
};

const CaseCard = (props: Props) => {
  const { parliament_case } = props;
  return (
    <Card key={parliament_case.id}>
      <CardHeader
        title={parliament_case.name}
        subtitle={parliament_case.parliament_session.name}
        actAsExpander={true}
        showExpandableButton={true}
      />
      <CardText expandable={true}>
        <Paper zDepth={1} rounded={false}>
          <div style={styles.container}>
            <div style={styles.field}>
              <span>Parliament: {parliament_case.parliament_session}</span>
            </div>
            <div style={styles.field}>
              <span>Parliament session: {parliament_case.parliament_session}</span>
            </div>
            <div style={styles.field}>
              <span>Type: {parliament_case.case_type}</span>
            </div>
          </div>
          <div style={styles.container}>
            <div style={styles.field}>
              <span>Status: {parliament_case.status}</span>
            </div>
            <div style={styles.field}>
              <span>
                Created on {moment(parliament_case.created).format('MMM Mo YYYY')}
              </span>
            </div>
            <div style={styles.field}>
              <span>
                Last Modified on {moment(parliament_case.modified).format('MMM Mo YYYY')}
              </span>
            </div>
          </div>
        </Paper>
      </CardText>
    </Card>
  );
};

export default CaseCard;
