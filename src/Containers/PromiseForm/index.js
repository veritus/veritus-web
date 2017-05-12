/* @flow */
import React from "react";
import Paper from "material-ui/Paper";
import RaisedButton from "material-ui/RaisedButton";
import Formsy from "formsy-react";
import { FormsyText } from "formsy-material-ui/lib";
export class PromiseForm extends React.Component {
  state: {
    canSubmit: boolean,
  };
  constructor() {
    super();

    this.state = {
      canSubmit: false,
    };
  }
  enableButton() {
    this.setState({
      canSubmit: true,
    });
  }

  disableButton() {
    this.setState({
      canSubmit: false,
    });
  }
  render() {
    return (
      <Paper zDepth={2}>
        <Formsy.Form
          onValid={() => this.enableButton()}
          onInvalid={() => this.disableButton()}
          // onValidSubmit={ () => {}}
          // onInvalidSubmit={ () => {} }
        >
          <FormsyText
            name="Politican name"
            validations="isWords"
            required
            floatingLabelText="Politican Name"
          />
          <br />
          <FormsyText
            name="Party"
            validations="isWords"
            required
            floatingLabelText="Party"
          />
          <br />
          <FormsyText
            name="Promise Title"
            validations="isWords"
            required
            floatingLabelText="Promise Title"
          />
          <br />
          <FormsyText
            name="Promise Description"
            validations="isWords"
            required
            floatingLabelText="Promise Description"
          />
          <br />
          <RaisedButton type="submit" label="Submit" disabled={!this.state.canSubmit} />
        </Formsy.Form>
      </Paper>
    );
  }
}
export default PromiseForm;
