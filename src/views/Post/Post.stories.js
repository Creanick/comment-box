import React from "react";
import { action } from "@storybook/addon-actions";
import Post from ".";
export default {
  title: "Post|Main Post"
};
const postOptions = {
  name: "Manick",
  date: new Date("2018"),
  liked: true,
  likes: 234,
  comments: 1234,
  onPostComment: action("comment clicked"),
  onPostDelete: action("post deleted"),
  onPostLike: action("post liked"),
  onPostReply: action("on Post replied")
};
export const normal = () => (
  <Post {...postOptions}>My name is manick lal jamadar</Post>
);
