import express from "express";
import { getProfile, updateProfile } from "../controllers/User.js";
import { isVerified, authorized } from "../middlewares/auth.js";
//invoke the express router funnction
const router = express.Router();

//define route using the router object
//get profile
router.route("/profile").get(isVerified, getProfile);
//get update profile
router
  .route("/update-profile")
  .put(isVerified, authorized(["admin", "user"]), updateProfile);
export default router;
