/* @flow */
import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import PoliticianItem from '../PoliticianItem';
import { getPoliticianById } from '../../../utils/api';
import { getDistrictById } from '../../Districts/api';
import type { PoliticianType, MatchTypePoliticianId } from '../../../types';
import type { District } from '../../Districts/types';

export type Props = {
  match: MatchTypePoliticianId,
};

export type State = {
  politician: ?PoliticianType,
  district: ?District,
};

export class PoliticianItemContainer extends React.Component<void, Props, State> {
  props: Props;
  state = {
    politician: null,
    district: null,
  };
  componentDidMount() {
    const { match: { params: { politicianId } } } = this.props;
    getPoliticianById(politicianId).then(politicianResp => {
      const politician = politicianResp.data;
      this.setState({ politician });
      getDistrictById(politician.district).then(districtResp => {
        const district = districtResp.data;
        this.setState({ district });
      });
    });
  }
  render() {
    const { politician, district } = this.state;
    if (!politician || !district) return <CircularProgress />;
    return <PoliticianItem politician={politician} district={district} />;
  }
}
export default PoliticianItemContainer;
