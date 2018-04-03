/* @flow */
import React from 'react';
import { connect } from 'react-redux';
import type { Connector } from 'react-redux';
import CircularProgress from 'material-ui/CircularProgress';
import { Card, CardTitle, CardText } from 'material-ui/Card';

import type {
  PartyId,
  Party,
  PoliticianType,
  PromiseType,
  Case,
  VoteRecord,
  State,
} from '../../../types';
import { selectParty } from '../../../Stores/Parties/selectors';
import {
  getPromisesByPoliticalParty,
  getPoliticiansByPoliticalParty,
} from '../../../utils/api';

import styles from './styles';
import { fetchParties } from '../../../Stores/Parties/actions';

type OwnProps = {
  parliamentCase: ?Case,
  voteRecord: ?VoteRecord,
  styles: StyleSheet,
  match: {
    params: {
      partyId: string,
    },
  },
};

type ReduxProps = {
  getParties: () => void,
  party: Party,
};

type Props = OwnProps & ReduxProps;

type OwnState = {
  promises: ?Array<PromiseType>,
  politicians: ?Array<PoliticianType>,
};

export class PartyDetail extends React.Component<void, Props, OwnState> {
  props: Props;
  state = {
    promises: null,
    politicians: null,
  };
  // $FlowFixMe fixed in future versions
  async componentDidMount() {
    const { getParties, match: { params: { partyId } } } = this.props;
    getParties();
    await Promise.all([
      this.loadPoliticians(parseInt(partyId, 10)),
      this.loadPromises(parseInt(partyId, 10)),
    ]);
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
                <a href={party.website} target="_blank" rel="noopener noreferrer">
                  {party.website}
                </a>
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
    party: selectParty(state, parseInt(props.match.params.partyId, 10)),
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    getParties: () => {
      dispatch(fetchParties());
    },
  };
};

const connector: Connector<OwnProps, Props> = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default connector(PartyDetail);
