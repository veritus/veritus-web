/* @flow */
import React from "react";
import { Card, CardHeader, CardText } from "material-ui/Card";
import LinearProgress from "material-ui/LinearProgress";
import PromiseList from "../PromiseList";
import type { PromiseType } from "../../types";

export type Props = {
  name: string,
  party: string,
  progress: number,
  promises: Array<PromiseType>,
};

const PoliticianCard = (props: Props) => {
  const { name, party, progress, promises } = props;
  return (
    <Card>
      <CardHeader
        title={name}
        subtitle={party}
        actAsExpander={true}
        showExpandableButton={true}
        avatar="http://lorempixel.com/200/200/"
      >
        {progress}%
        <LinearProgress mode="determinate" value={progress} />
      </CardHeader>
      <CardText expandable={true}>
        <PromiseList promises={promises} />
      </CardText>
    </Card>
  );
};

export default PoliticianCard;
