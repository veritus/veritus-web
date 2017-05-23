/* @flow */
import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import type { CaseType } from '../../types';

export type Props = {
  cases: Array<CaseType>,
  parliament_case: ObjectConstructor,
};

const CaseCard = (props: Props) => {
  const { parliament_case } = props;
  return (
    <Card>
      <CardHeader
        title={parliament_case.name}
        subtitle={parliament_case.id}
        actAsExpander={true}
        showExpandableButton={true}
      />
      <CardText expandable={true}>
        Text
      </CardText>
    </Card>
  );
};

export default CaseCard;
