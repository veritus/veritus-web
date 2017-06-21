/* @flow */
import React from 'react';
import { List } from 'material-ui/List';
import PromiseItem from '../PromiseItem';
import type { PromiseType } from '../../types';

export type Props = {
  promises: Array<PromiseType>,
};

const PromiseList = (props: Props) => {
  const { promises } = props;
  const promiseList = promises.map(promise =>
    <PromiseItem
      key={promise.id}
      id={promise.id}
      title={promise.title}
      fulfilled={promise.fulfilled}
    />
  );

  return <List> {promiseList} </List>;
};

export default PromiseList;
