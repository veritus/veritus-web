/* @flow */
import React from 'react';
import { ListItem } from 'material-ui/List';
import InCompleteIcon from 'material-ui/svg-icons/navigation/close';
import CompleteIcon from 'material-ui/svg-icons/navigation/check';
import { red500, green500 } from 'material-ui/styles/colors';

export type Props = {
  id: number,
  name: string,
  fulfilled: boolean,
};

const PromiseItem = (props: Props) => {
  const { name, fulfilled } = props;
  const icon = fulfilled
    ? <CompleteIcon color={green500} />
    : <InCompleteIcon color={red500} />;
  return <ListItem primaryText={name} rightIcon={icon} />;
};

export default PromiseItem;
