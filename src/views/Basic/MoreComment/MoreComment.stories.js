import React from "react";
import MoreComment from "./MoreComment";
import { action } from "@storybook/addon-actions";

export default {
  title: "More Comment"
};

export const zeroComment = () => (
  <MoreComment moreClick={action("more comment clicked")} />
);
export const someComments = () => (
  <MoreComment
    moreClick={action("more comment clicked")}
    comment={{ visible: 12, total: 23 }}
  />
);
export const onlyVisibleZero = () => (
  <MoreComment
    moreClick={action("more comment clicked")}
    comment={{ total: 12 }}
  />
);

export const commentCountK = () => (
  <MoreComment
    moreClick={action("more comment clicked")}
    comment={{ visible: 123, total: 4200 }}
  />
);
