function countFormatter(num) {
  if (num > 1000) {
    num = Math.floor(num / 1000);
    return num + "k+";
  }
  return num;
}

export default countFormatter;
