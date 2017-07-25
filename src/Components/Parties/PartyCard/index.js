/* @flow */
import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import type { PartyType } from '../../../types';
import PartyPromises from '../PartyPromises';

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
        <h2>Promises</h2>
        <PartyPromises partyId={party.id} />
      </CardText>
    </Card>
  );
};

export default PartyCard;
