import React from "react";
import { text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import PostContent from "./index";

export default {
  title: "Post|Post Content",
  decorators: [storyFn => <div style={{ margin: "100px" }}>{storyFn()}</div>]
};

export const normal = () => (
  <PostContent onDeleteClick={action("deleted")}>
    Hi My name is Manick
  </PostContent>
);
export const compressed = () => {
  return (
    <PostContent
      onDeleteClick={action("deleted")}
      compressLength={100}
      dangerLength={150}
    >
      Hi there is manick lal jamadar working with comment box ui this is so must
      work in a simple comment box design i thought it's lest time consuming but
      it's not
    </PostContent>
  );
};
export const dynamic = () => (
  <PostContent onDeleteClick={action("deleted")}>
    {text("Content", "My name is manick")}
  </PostContent>
);
