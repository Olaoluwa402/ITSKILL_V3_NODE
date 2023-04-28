import express from "express";
import { getUsers } from "../controllers/Admin.js";
import { isVerified, authorized } from "../middlewares/auth.js";
//invoke the express router funnction
const router = express.Router();

//define route using the router object
//get all users
router.route("/users").get(isVerified, authorized(["admin"]), getUsers);

export default router;
