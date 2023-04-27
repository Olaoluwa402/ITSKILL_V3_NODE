import express from "express";
const router = express.Router();
import {
  getTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
} from "../controllers/Task.js";
import { isVerified, authorized } from "../middlewares/auth.js";

//get all tasks
router.route("/").get(getTasks).post(createTask);
//get single task
router.route("/:id").get(getSingleTask);
//update task
router.route("/:id").put(isVerified, authorized(["admin", "user"]), updateTask);
router
  .route("/:id")
  .delete(isVerified, authorized(["admin", "user"]), deleteTask);

//alternative
export default router;
