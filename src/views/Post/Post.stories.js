import React from "react";
import { action } from "@storybook/addon-actions";
import { text, boolean, date, number } from "@storybook/addon-knobs";
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

export const dynamic = () => {
  const dynamicOptions = {
    ...postOptions,
    name: text("name", postOptions.name),
    date: date("Date"),
    liked: boolean("Is Liked? ", false),
    likes: number("Likes", 234),
    comments: number("comments", 4567)
  };
  return (
    <Post {...dynamicOptions}>
      {text("Content", "My name is manick lal jamadar")}
    </Post>
  );
};
