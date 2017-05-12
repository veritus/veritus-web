/* @flow */
import React from "react";
import { storiesOf } from "@kadira/storybook";
import { muiTheme } from "storybook-addon-material-ui";
import NavBar from "../index.js";

storiesOf("Navigation Bar", module)
  .addDecorator(muiTheme())
  .add("Default", () => <NavBar />);
