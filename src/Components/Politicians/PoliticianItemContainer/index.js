/* @flow */
import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import PoliticianItem from '../PoliticianItem';
import { getPoliticianById } from '../../../utils/api';
import type { MatchTypePoliticianId } from '../../../types';
import type { PoliticianType } from '../../../types';

export type Props = {
  match: MatchTypePoliticianId,
};

export type State = {
  politician: ?PoliticianType,
};

export class PoliticianItemContainer extends React.Component<void, Props, State> {
  props: Props;
  state = {
    politician: null,
  };
  componentDidMount() {
    const { match: { params: { politicianId } } } = this.props;
    getPoliticianById(politicianId).then(resp => {
      this.setState({ politician: resp.data });
    });
  }
  render() {
    if (!this.state.politician) return <CircularProgress />;
    return <PoliticianItem politician={this.state.politician} />;
  }
}
export default PoliticianItemContainer;
