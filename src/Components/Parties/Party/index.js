/* @flow */
import React from 'react';
import { connect } from 'react-redux';
import type { Connector } from 'react-redux';
import { fetchParties } from '../../../Stores/Parties/actions';
import type { Party, State } from '../../../types';
import PartyCard from '../PartyCard';

type OwnProps = {};

type ReduxProps = {
  parties: ?Array<Party>,
  error: ?string,
  fetchParties: () => void,
};

type Props = OwnProps & ReduxProps;

export class PartyContainer extends React.Component {
  props: Props;

  componentDidMount() {
    this.props.fetchParties();
  }

  render() {
    const { parties } = this.props;
    if (!parties) return null;
    return (
      <div>
        {parties.map(party => <PartyCard key={party.id} party={party} />)}
      </div>
    );
  }
}

const mapStateToProps = (state: State) => {
  return {
    error: state.parties.error,
    parties: state.parties.data,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    fetchParties: () => {
      dispatch(fetchParties());
    },
  };
};

const connector: Connector<OwnProps, Props> = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default connector(PartyContainer);
