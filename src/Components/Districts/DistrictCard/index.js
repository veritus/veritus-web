/* @flow */
import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';

export type Props = {
  name: string,
};

const DistrictCard = (props: Props) => {
  const { name } = props;
  return (
    <Card>
      <CardHeader title={name} actAsExpander={true} showExpandableButton={true} />
      <CardText expandable={true} />
    </Card>
  );
};

export default DistrictCard;
