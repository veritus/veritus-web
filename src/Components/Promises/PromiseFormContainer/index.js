/* @flow */
import React from 'react';
import { connect } from 'react-redux';
import type { Connector } from 'react-redux';

import PromiseForm from '../PromiseForm';
import { createPromise } from '../../../utils/api';
import { getPoliticalParties } from '../../Parties/api';
import type { PromiseFormType } from '../../../utils/api';
import { fetchPoliticians } from '../../../Stores/Politicians/actions';
import type { Dispatch, State, PoliticianType } from '../../../types';

const submit = (data: PromiseFormType) => {
  createPromise(
    data.name,
    data.shortDescription,
    data.longDescription,
    data.parliamentId,
    data.politicianId,
    data.partyId
  ).then(resp => {
    if (resp.data) {
      alert(`Promise with ID:${resp.data.id} created`); // eslint-disable-line no-alert
    } else if (resp.error) {
      alert(`Ooops failed creating promise > ${resp.error}`); // eslint-disable-line no-alert
    }
  });
};

export type OwnProps = {};

export type PropTypes = {
  fetchPoliticians: () => void,
  politicians: ?Array<PoliticianType>,
};

type Props = OwnProps & PropTypes;

export class PromiseFormContainer extends React.Component {
  props: Props;

  state = {
    parties: [],
  };

  componentDidMount() {
    this.props.fetchPoliticians();

    getPoliticalParties().then(resp => {
      if (resp.error) {
        console.log('getPoliticalParties error > ', resp.error); // eslint-disable-line
      } else if (resp.data) {
        this.setState({ parties: resp.data });
      }
    });
  }

  render() {
    return (
      <PromiseForm
        onSubmit={submit}
        politicians={this.props.politicians}
        parties={this.state.parties}
      />
    );
  }
}

const mapStateToProps = (state: State) => {
  return {
    politicians: state.politicians.data,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    fetchPoliticians: () => {
      dispatch(fetchPoliticians());
    },
  };
};

const connector: Connector<OwnProps, PropTypes> = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default connector(PromiseFormContainer);
