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
      <CardHeader title={party.name} actAsExpander={true} showExpandableButton={true} />
      <CardText expandable={true}>
        <a href={party.website} rel="noopener noreferrer" target="_blank">
          {party.website}
        </a>
      </CardText>
    </Card>
  );
};

export default PartyCard;
