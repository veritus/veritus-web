/* @flow */
import React from 'react';
import PromiseItem from '../../Components/PromiseItem';
import { getPromisesByPoliticalParty } from '../../utils/api';
export class CaseContainer extends React.Component {
  propTypes = {
    partyId: PropTypes.number.isRequired,
  };
  state = {
    partyPromises: [],
  };
  componentDidMount() {
    /* getPromisesByPoliticalParty(this.props.partyId).then(partyPromises => {
      this.setState({ partyPromises });
    }); */
  }

  render() {
    return (
      <div>
        {this.state.partyPromises.map(promise => (
          <PromiseItem key={promise.id} promise={promise} />
        ))}
      </div>
    );
  }
}
export default CaseContainer;
