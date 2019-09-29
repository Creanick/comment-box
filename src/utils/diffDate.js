function diffDate(str) {
  const pastDate = new Date(str);
  if (isNaN(pastDate)) {
    return;
  }
  const now = new Date();
  var millisecond = Math.floor(now.getTime() - pastDate.getTime());
  if (millisecond < 1000) {
    return "a few moment ago";
  }
  const second = Math.floor(millisecond / 1000);
  const minute = Math.floor(second / 60);
  const hour = Math.floor(minute / 60);
  var days = Math.floor(hour / 24);
  var months = Math.floor(days / 31);
  var years = Math.floor(months / 12);

  if (years > 0) {
    return formatter(years, "year");
  }
  if (months > 0) {
    return formatter(months, "month");
  }
  if (days > 0) {
    return formatter(days, "day");
  }
  if (hour > 0) {
    return formatter(hour, "hour");
  }
  if (minute > 0) {
    return formatter(minute, "minute");
  }
  if (second > 0) {
    return formatter(second, "second");
  }
}
function formatter(value, name) {
  return `${value} ${name}${value > 1 ? "s" : ""} ago`;
}

export default diffDate;
