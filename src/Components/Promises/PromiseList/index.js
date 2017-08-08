/* @flow */
import React from 'react';
import { List } from 'material-ui/List';
import PromiseItem from '../PromiseItem';
import type { Promise } from '../../../types';

export type Props = {
  promises: Array<Promise>,
};

const PromiseList = (props: Props) => {
  const { promises } = props;
  if (!promises) {
    return null;
  }
  const promiseList = promises.map(promise =>
    <PromiseItem
      key={promise.id}
      id={promise.id}
      title={promise.name}
      fulfilled={promise.fulfilled}
    />
  );

  return <List> {promiseList} </List>;
};

export default PromiseList;
