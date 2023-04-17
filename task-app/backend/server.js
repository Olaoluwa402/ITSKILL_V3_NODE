import express from "express";
import colors from "colors";
import morgan from "morgan";
import db from "./config/db.js";
import User from "./models/User.js";
import Joi from "joi";
//initiate express app
const app = express();

//general middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//@login: '/api/v1/login' login user
//@ethod: POST
//@access: Public
app.post("/api/v1/login", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "login",
  });
});

//@register: '/api/v1/register' register user
//@ethod: POST
//@access: Public
app.post("/api/v1/register", async (req, res) => {
  const { name, email, password, repeat_password } = req.body;

  console.log(name, email, password, "password");

  const schema = Joi.object({
    name: Joi.string().required(),
    password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
    repeat_password: Joi.ref("password"),
    email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    }),
  }).with("password", "repeat_password");

  try {
    //validate form fields
    const value = await schema.validateAsync({
      email: email,
      password: password,
      name: name,
      repeat_password: repeat_password,
    });

    console.log(value);

    const user = await User.create({
      name,
      email,
      password,
    });
    res.status(200).json({
      status: "success",
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      error: err.message,
    });
  }
});

//@tasks:  '/api/v1/tasks' : gets all tasks
//@method: GET
//@access: Public
app.get("/api/v1/tasks", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "All tasks",
  });
});

//@tasks:  '/api/v1/tasks' : create task
//@method: POST
//@access: private : admin
app.post("/api/v1/tasks", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "taskk created",
  });
});

//@tasks:  '/api/v1/tasks/:id' : get single task
//@method: GET
//@access: public
app.get("/api/v1/tasks/:id", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "task updated",
  });
});

//@tasks:  '/api/v1/tasks/:id' : create task
//@method: PUT /PATCH
//@access: private : admin
app.put("/api/v1/tasks/:id", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "task updated",
  });
});

//@tasks:  '/api/v1/tasks/:id' : delete task
//@method: DELETE
//@access: private : admin
app.delete("/api/v1/tasks/:id", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "task deleted",
  });
});

app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Welcome to taskActivity backend",
  });
});

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
