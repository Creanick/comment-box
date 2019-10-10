import React from "react";
import { number } from "@storybook/addon-knobs";
import Header from "./index";
export default {
  title: "Basic|Header"
};

export const main = () => <Header totalPost={23} />;
export const NoPost = () => <Header />;
export const dynamic = () => <Header totalPost={number("Total Post", 34)} />;
