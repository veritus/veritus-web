/* @flow */
import React from 'react';
import DistrictCard from '../DistrictCard';
import { getDistricts } from '../../../utils/api';
import type { DetailedDistrictType } from '../../../types';

export class DistrictContainer extends React.Component {
  state: {
    districts: Array<DetailedDistrictType>,
  };

  state = {
    districts: [],
  };

  componentDidMount() {
    getDistricts().then(districts => {
      this.setState({ districts });
    });
  }

  render() {
    const { districts } = this.state;
    return (
      <div>
        {districts.map(district =>
          <DistrictCard
            key={district.id}
            name={district.name}
            politicians={district.politicians}
          />
        )}
      </div>
    );
  }
}

export default DistrictContainer;
