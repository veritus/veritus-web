/* @flow */
import React from 'react';
import PromiseForm from '../PromiseForm';
import { createPromise, getPoliticians, getPoliticalParties } from '../../../utils/api';
import type { PromiseFormType } from '../../../utils/api';

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

export class PromiseFormContainer extends React.Component {
  state = {
    politicians: [],
    parties: [],
  };

  componentDidMount() {
    getPoliticians().then(resp => {
      if (resp.error) {
        console.log('getPoliticians error > ', getPoliticians); // eslint-disable-line
      } else if (resp.data) {
        this.setState({ politicians: resp.data });
      }
    });

    getPoliticalParties().then(resp => {
      if (resp.error) {
        console.log('getPoliticalParties error > ', getPoliticalParties); // eslint-disable-line
      } else if (resp.data) {
        this.setState({ parties: resp.data });
      }
    });
  }

  render() {
    return (
      <PromiseForm
        onSubmit={submit}
        politicians={this.state.politicians}
        parties={this.state.parties}
      />
    );
  }
}
export default PromiseFormContainer;
