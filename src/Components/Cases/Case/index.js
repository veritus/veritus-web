/* @flow */
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import type { Connector } from 'react-redux';

import type { Case } from '../../../Stores/Cases/types';
import CaseCard from '../CaseCard';
import CaseActions from '../../../Stores/Cases/actions';
import type { Dispatch, State } from '../../../types';

type OwnProps = {};

type ReduxProps = {
  cases: ?Array<Case>,
  hasLoadedCases: boolean,
  error: ?string,
  fetchCases: () => void,
};

type Props = OwnProps & ReduxProps;

export class CaseContainer extends React.Component {
  props: Props;

  componentDidMount() {
    this.props.fetchCases();
  }
  render() {
    const { cases } = this.props;

    const styles = {
      container: {
        display: 'flex',
        flexDirection: 'column',
      },
      case: {
        margin: 10,
      },
    };
    return (
      <div style={styles.container}>
        {cases &&
          cases.map(parliament_case =>
            <div key={parliament_case.id} style={styles.case}>
              <CaseCard parliament_case={parliament_case} />
            </div>
          )}
      </div>
    );
  }
}
const mapStateToProps = (state: State) => {
  return {
    error: state.cases.error,
    hasLoadedCases: state.cases.loading,
    cases: state.cases.data,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ ...CaseActions }, dispatch);

const connector: Connector<OwnProps, Props> = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default connector(CaseContainer);
