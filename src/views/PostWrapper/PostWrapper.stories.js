import React from "react";
import Post from "../Post";
import PostWrapper from ".";

export default {
  title: "Post Wrapper"
};
export const normal = () => (
  <PostWrapper>
    {color => (
      <>
        <Post likes={345} comments={12} postColor={color}>
          My name is manick
        </Post>
        <Post likes={456} name="Manick" liked postColor={color}>
          My name is manick lal jamadar, so i am creative human live in earth
          for long time
        </Post>
      </>
    )}
  </PostWrapper>
);
