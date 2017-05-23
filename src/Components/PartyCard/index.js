/* @flow */
import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import type { PartyType } from '../../types';

export type Props = {
  party: PartyType,
};

const PartyCard = (props: Props) => {
  const { party } = props;
  return (
    <Card key={party.id}>
      <CardHeader
        title={party.name}
        actAsExpander={true}
        subtitle={party.website}
        showExpandableButton={true}
      />
      <CardText expandable={true}>
        {party.name}
      </CardText>
    </Card>
  );
};

export default PartyCard;
