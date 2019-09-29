import React from "react";
import { configure, addDecorator } from "@storybook/react";
import "../src/index.css";

configure(require.context("../src", true, /\.stories\.js$/), module);
const styles = {
  margin: "20px"
};
const CenterDecorator = storyFn => <div style={styles}>{storyFn()}</div>;
addDecorator(CenterDecorator);
