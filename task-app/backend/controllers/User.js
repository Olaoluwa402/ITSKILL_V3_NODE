import User from "../models/User.js";
import { serializeUser } from "../utils/serialize.js";

//@tasks:  '/api/v1/users/profile' : get profile
//@method: GET
//@access: private
const getProfile = async (req, res) => {
  try {
    const profile = await User.findById(req.user._id);
    if (!profile) {
      throw new Error("No user found");
    }

    res.status(200).json({
      status: "success",
      data: serializeUser(profile),
    });
  } catch (err) {
    res.status(401).json({
      status: "failed",
      message: err.message,
    });
  }
};

//@tasks:  '/api/v1/users/update-profile' : update profile
//@method: GET
//@access: private
const updateProfile = async (req, res) => {
  const { name } = req.body;
  try {
    //get user to be uopdated
    const user = await User.findById(req.user._id);
    if (!user) {
      throw new Error("No user found");
    }

    //update desired record
    user.name = name ? name : user.name;
    //save the updated user
    const updatedUser = await user.save();

    res.status(200).json({
      status: "success",
      data: serializeUser(updatedUser),
    });
  } catch (err) {
    res.status(401).json({
      status: "failed",
      message: err.message,
    });
  }
};
export { getProfile, updateProfile };
