/* @flow */
import React from "react";
import { storiesOf } from "@kadira/storybook";
import { muiTheme } from "storybook-addon-material-ui";
import PromiseItem from "../index";

storiesOf("Promise Item", module)
  .addDecorator(muiTheme())
  .add("Unfulfilled promise", () => (
    <PromiseItem id={1} title="Save the whales" fulfilled={false} />
  ))
  .add("Fulfilled promise", () => (
    <PromiseItem id={1} title="Higher politician salary" fulfilled={true} />
  ));
