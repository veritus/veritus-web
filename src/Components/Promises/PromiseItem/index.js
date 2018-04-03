/* @flow */
import React from 'react';
import { ListItem } from 'material-ui/List';
import InCompleteIcon from 'material-ui-icons/Close';
import CompleteIcon from 'material-ui-icons/Check';
import { red500, green500 } from 'material-ui/colors';

export type Props = {
  id: number,
  title: string,
  fulfilled: boolean,
};

const PromiseItem = (props: Props) => {
  const { title, fulfilled } = props;
  const icon = fulfilled
    ? <CompleteIcon color={green500} />
    : <InCompleteIcon color={red500} />;
  return <ListItem primaryText={title} rightIcon={icon} />;
};

export default PromiseItem;
