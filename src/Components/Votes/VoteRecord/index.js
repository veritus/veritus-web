/* @flow */
import React from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';

import type { VoteRecord } from '../../../Stores/Votes/types';
import PoliticianCard from '../../Politicians/PoliticianCard';
import { VOTE_STATUS_TO_COLOR } from '../../../Stores/Votes/constants';
import styles from './styles';

export type Props = {
  voteRecord: ?VoteRecord,
};

export class VoteRecordComponent extends React.Component {
  props: Props;
  render() {
    const { voteRecord } = this.props;
    if (!voteRecord) return null;

    return (
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
            <div style={styles.politiciansContainer}>
              {voteRecord.votes.map(vote =>
                <PoliticianCard
                  key={vote.parliament_member.id}
                  style={{ backgroundColor: VOTE_STATUS_TO_COLOR[vote.althingi_result] }}
                  politician={vote.parliament_member}
                />
              )}
            </div>
          </div>
        </CardText>
      </Card>
    );
  }
}
export default VoteRecordComponent;
