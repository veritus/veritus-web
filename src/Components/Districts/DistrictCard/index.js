/* @flow */
import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import PoliticianItem from '../../Politicians/PoliticianItem';

export type Props = {
  name: string,
  politicians: Array<number>,
};

const DistrictCard = (props: Props) => {
  const { name, politicians } = props;
  return (
    <Card>
      <CardHeader title={name} actAsExpander={true} showExpandableButton={true} />
      <CardText expandable={true} />
    </Card>
  );
};

export default DistrictCard;
