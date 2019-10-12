import React from "react";
import { text } from "@storybook/addon-knobs";
import PostContent from "./index";

export default {
  title: "Post|Post Content"
};

export const normal = () => <PostContent>Hi My name is Manick</PostContent>;
export const compressed = () => {
  return (
    <PostContent compressLength={100} dangerLength={150}>
      Hi there is manick lal jamadar working with comment box ui this is so must
      work in a simple comment box design i thought it's lest time consuming but
      it's not
    </PostContent>
  );
};
export const dynamic = () => (
  <PostContent>{text("Content", "My name is manick")}</PostContent>
);
