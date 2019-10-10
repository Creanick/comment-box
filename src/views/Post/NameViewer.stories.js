import React from "react";
import NameViewer from "./NameViewer";
import { text, date } from "@storybook/addon-knobs";
export default {
  title: "Post|Name Viewer"
};
export const Unknown = () => <NameViewer />;
const now = new Date();
export const fewMoment = () => (
  <NameViewer name="Manick" date={now.toString()} />
);
export const YearAgo = () => {
  const past = new Date();
  past.setFullYear(now.getFullYear() - 10);
  return <NameViewer name="Manick" date={past.toString()} />;
};
export const Month = () => {
  const past = new Date();
  past.setMonth(now.getMonth() - 3);
  return <NameViewer name="Manick" date={past.toString()} />;
};
export const day = () => {
  const past = new Date();
  past.setDate(now.getDate() - 3);
  return <NameViewer name="Manick" date={past.toString()} />;
};
export const Hour = () => {
  const past = new Date();
  past.setHours(now.getHours() - 1);
  return <NameViewer name="Manick" date={past.toString()} />;
};
export const minute = () => {
  const past = new Date();
  past.setMinutes(now.getMinutes() - 37);
  return <NameViewer name="Manick" date={past.toString()} />;
};
export const second = () => {
  const past = new Date();
  past.setSeconds(now.getSeconds() - 27);
  return <NameViewer name="Manick" date={past.toString()} />;
};
export const dynamic = () => {
  const past = new Date();
  past.setSeconds(now.getSeconds() - 27);
  return <NameViewer name={text("Name", "Manick")} date={date("Date")} />;
};
