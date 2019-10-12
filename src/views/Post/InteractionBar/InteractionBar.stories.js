import React from "react";
import { action } from "@storybook/addon-actions";
import {number} from "@storybook/addon-knobs"
import InteractionBar from "./index";

export default {
  title: "Post|Interaction Bar"
};

export const Unlike = () => (
  <InteractionBar likes={2356} comments={234} onLikeClick={action("liked")} onCommentClick={action("comment clicked")} onReplyClick={action("replied")}/>
);
export const NoInteraction = () => (
  <InteractionBar onLikeClick={action("liked")} onCommentClick={action("comment clicked")} onReplyClick={action("replied")}/>
);
export const LikeDynamic = () => (
  <InteractionBar liked likes={number("Likes",1223)} comments={number("Comments",34)} onLikeClick={action("liked")} onCommentClick={action("comment clicked")} onReplyClick={action("replied")}/>
);
