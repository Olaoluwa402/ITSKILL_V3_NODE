import dotenv from "dotenv";
//load evironment variables
dotenv.config();

import express from "express";
import colors from "colors";
import morgan from "morgan";
import db from "./config/db.js";

import AuthRoute from "./routes/Auth.js";
import TaskRoute from "./routes/Task.js";
import UserRoute from "./routes/User.js";
import AdminRoute from "./routes/Admin.js";
//initiate express app
const app = express();

//general middlewares
app.use(morgan("dev"));
// app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes
app.use("/api/v1/auth", AuthRoute);
app.use("/api/v1/tasks", TaskRoute);
app.use("/api/v1/users", UserRoute);
app.use("/api/v1/admin", AdminRoute);

app.get("*", (req, res) => {
  res.status(404).json({
    status: "failed",
    message: "No such endpoint available",
  });
});
const port = process.env.NODE_ENV === "production" ? process.env.PORT : 8000;

//start db
db()
  .then((res) => {
    app.listen(port, (err) => {
      if (err) {
        console.log(`Error: ${err.message}`.bgMagenta);
        return;
      }
      console.log(`Server running on port ${port}`.bgGreen);
    });
  })
  .catch((err) => console.log("Error", err));
