/* @flow */
import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import type { CaseType } from '../../types';

const moment = require('moment');

export type Props = {
  parliament_case: CaseType,
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
        <p>Parliament: {parliament_case.parliament_session.parliament.name}</p>
        <p>Parliament session: {parliament_case.parliament_session.name}</p>
        <p>Created: {moment(parliament_case.created).format('MMM Mo YYYY')}</p>
        <p>Modified: {moment(parliament_case.modified).format('MMM Mo YYYY')}</p>
        <p>Type: {parliament_case.case_type}</p>
        <p>Status: {parliament_case.case_status}</p>
      </CardText>
    </Card>
  );
};

export default CaseCard;
