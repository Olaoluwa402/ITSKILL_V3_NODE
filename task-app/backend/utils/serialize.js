export const serializeUser = (user) => {
  const { password, ...rest } = user; //filter and return only desired fields
  return rest;
};
