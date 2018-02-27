/* @flow */
import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import PoliticianItem from '../PoliticianItem';
import { getPoliticianById } from '../../../utils/api';
import { getDistrictById } from '../../Districts/api';
import { getPartyById } from '../../Parties/api';
import type { PoliticianType, MatchTypePoliticianId } from '../../../types';
import type { District } from '../../Districts/types';
import type { Party } from '../../Parties/types';

export type Props = {
  match: MatchTypePoliticianId,
};

export type State = {
  politician: ?PoliticianType,
  district: ?District,
  party: ?Party,
};

export class PoliticianItemContainer extends React.Component<void, Props, State> {
  props: Props;
  state = {
    politician: null,
    district: null,
    party: null,
  };
  // $FlowFixMe, fixed in a later version
  async componentDidMount() {
    const { match: { params: { politicianId } } } = this.props;
    const politicianResp = await getPoliticianById(politicianId);
    if (politicianResp.data) {
      const politician = politicianResp.data;
      this.setState({ politician });
      getDistrictById(politician.district.id).then(districtResp => {
        const district = districtResp.data;
        this.setState({ district });
      });
      getPartyById(politician.party).then(partyResp => {
        const party = partyResp.data;
        this.setState({ party });
      });
    }
  }
  render() {
    const { politician, district, party } = this.state;
    if (!politician || !district || !party) return <CircularProgress />;
    return <PoliticianItem politician={politician} district={district} party={party} />;
  }
}

export default PoliticianItemContainer;
