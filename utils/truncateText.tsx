export const truncateText = (text: string) => {
  //   if (text.length < 34) return text;
  return text.substring(0, 19) + "...";
};
