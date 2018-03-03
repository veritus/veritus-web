/* @flow */
import React from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';

import type { VoteRecord } from '../../../Stores/Votes/types';

import styles from './styles';

export type Props = {
  voteRecord: ?VoteRecord,
};

export class VoteRecordComponent extends React.Component {
  props: Props;
  render() {
    const { voteRecord } = this.props;
    return (
      <div>
        {voteRecord &&
          <Card style={styles.card}>
            <CardTitle title={'Votes'} />
            <CardText>
              <div>
                <div>
                  Yes: {voteRecord.yes}
                </div>
                <div>
                  No: {voteRecord.no}
                </div>
                <div>
                  Did not vote: {voteRecord.didNotVote}
                </div>
                <div>
                  Result: {voteRecord.althingi_result}
                </div>
              </div>
            </CardText>
          </Card>}
      </div>
    );
  }
}
export default VoteRecordComponent;
