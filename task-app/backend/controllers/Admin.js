import User from "../models/User.js";
import { serializeUser } from "../utils/serialize.js";

//@tasks:  '/api/v1/users' : get all users
//@method: GET
//@access: private : admin
const getUsers = async () => {
  try {
    const users = await User.find({});
    const modifiedUser = users.map((user) => serializeUser(user));
    res.status(200).json({
      status: "success",
      data: modifiedUser,
    });
  } catch (err) {
    res.status(401).json({
      status: "failed",
      message: err.message,
    });
  }
};

export { getUsers };
