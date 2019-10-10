import React from "react";
import CommentAdder from "./index";
import { action } from "@storybook/addon-actions";
import { randomStyleGenerator } from "../../components/RandomAvatar";
export default {
  title: "Component Adder|Main"
};
const avatarStyle = randomStyleGenerator();
export const Normal = () => (
  <CommentAdder
    onCommentChange={action("Comment Changed")}
    onNameChange={action("Name Changed")}
    onSubmit={action("Submitted")}
    avatarStyle={avatarStyle}
  />
);
