export const serializeUser = (user) => {
  const { email, name, role, ...rest } = user; //filter and return only desired fields
  console.log(rest);
  return {
    email: email,
    name: name,
    role,
  };
};
