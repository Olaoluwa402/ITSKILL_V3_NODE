import express from "express";
import { register, login } from "../controllers/Auth.js";
//invoke the express router funnction
const router = express.Router();

//define route using the router object
router.route("/register").post(register);
router.route("/login").post(login);

export default router;
