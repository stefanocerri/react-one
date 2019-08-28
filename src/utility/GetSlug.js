export const getSlug = url => {
  var a = new URL(url);
  var result = a.pathname;
  return result;
};
