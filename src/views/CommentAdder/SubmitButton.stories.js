import React from "react";
import { action } from "@storybook/addon-actions";
import Button from "./SubmitButton";

export default {
  title: "Component Adder|Button"
};

export const normalButton = () => (
  <Button onClick={action("clicked")}>Submit</Button>
);
export const disabled = () => (
  <Button disabled onClick={action("clicked")}>
    Submit
  </Button>
);
