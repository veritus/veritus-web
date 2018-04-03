/* @flow */
import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import type { Connector } from 'react-redux';
import CircularProgress from 'material-ui/CircularProgress';
import { Card, CardTitle, CardText } from 'material-ui/Card';

import type { PoliticianType, PromiseType } from '../../../types';
import { selectParty } from '../../../Stores/Parties/selectors';
import {
  getPromisesByPoliticalParty,
  getPoliticiansByPoliticalParty,
  PartyId,
} from '../../../utils/api';
import styles from './styles';
import { fetchParties } from '../../../Stores/Parties/actions';

export type Props = {
  parliamentCase: ?Case,
  voteRecord: ?VoteRecord,
  styles: StyleSheet,
};
type State = {
  promises: ?Array<PromiseType>,
  politicians: ?Array<PoliticianType>,
};

export class PartyDetail extends React.Component<void, Props, State> {
  props: Props;
  state = {
    promises: null,
    politicians: null,
  };
  // $FlowFixMe, async is fixed in a later version
  componentDidMount() {
    console.log(this.props);
    this.props.fetchParties();
    const { match: { params: { partyId } } } = this.props;
    // await Promise.all([this.loadPoliticians(partyId), this.loadPromises(partyId)]);
  }

  loadPoliticians = async (partyId: PartyId) => {
    const politiciansResponse = await getPoliticiansByPoliticalParty(partyId);
    if (politiciansResponse.data) {
      this.setState({ politicians: politiciansResponse.data });
    }
  };

  loadPromises = async (partyId: PartyId) => {
    const promisesResp = await getPromisesByPoliticalParty(partyId);
    if (promisesResp.data) {
      this.setState({ promises: promisesResp.data });
    }
  };

  hasloaded = () => {
    const { politicians, promises } = this.state;
    if (politicians && promises) return true;
    return false;
  };

  render() {
    const { party } = this.props;
    if (!party) return null;
    if (!this.hasloaded()) {
      return (
        <CircularProgress
          style={{ position: 'absolute', top: '50%', left: '50%' }}
          size={80}
          thickness={5}
        />
      );
    }

    return (
      <div>
        <Card style={styles.card}>
          <CardTitle title={party.name} />
          <CardText>
            <div style={styles.contentContainer}>
              <div
                style={{
                  ...styles.statusContainer,
                }}
              />
              <div style={styles.althingiContainer}>
                <a href={party.althingi_link} target="_blank" rel="noopener noreferrer">
                  See on althingi.is - {party.althingi_status}
                </a>
              </div>

              <div style={styles.dateContainer}>
                <div style={styles.date}>
                  <div style={styles.dateLabel}>Created</div>
                  <div>
                    {moment(party.created).format('D MMM YYYY')}
                  </div>

                </div>
                <div style={styles.date}>
                  <div style={styles.dateLabel}>Last Modified</div>
                  <div>
                    {moment(party.modified).format('D MMM YYYY')}
                  </div>
                </div>
              </div>
            </div>
          </CardText>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = (state: State, props: OwnProps) => {
  return {
    party: selectParty(state, props.params.partyId),
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    fetchParties: () => {
      dispatch(fetchParties());
    },
  };
};

const connector: Connector<OwnProps, ReduxProps> = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default connector(PartyDetail);
