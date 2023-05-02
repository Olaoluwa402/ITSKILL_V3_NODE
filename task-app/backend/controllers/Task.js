import Task from "../models/Task.js";
//@tasks:  '/api/v1/tasks' : call tasks
//@method: GET
//@access: public
const getTasks = async (req, res) => {
  const userId = req.user._id;
  const tasks = await Task.find({ user: userId }).sort({ _id: -1 });
  res.status(200).json({
    status: "success",
    data: tasks,
  });
};

//@tasks:  '/api/v1/tasks' : create tasks
//@method: POST
//@access: private
const createTask = async (req, res) => {
  const { title, desc, imgUrl } = req.body;
  const { _id } = req.user;
  try {
    if (!title || !desc || !imgUrl) {
      res.status(400).json({
        status: "error",
        message: "All fields are required",
      });

      return;
    }
    const createdTask = await Task.create({
      title,
      imgUrl,
      desc,
      user: _id,
    });
    res.status(200).json({
      status: "success",
      createdTask,
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: err.message,
    });
  }
};

//@tasks:  '/api/v1/tasks/:id' : get single task
//@method: GET
//@access: public

const getSingleTask = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "single task",
  });
};

//@tasks:  '/api/v1/tasks/:id' : update task
//@method: PUT /PATCH
//@access: private : admin

const updateTask = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "task updated",
  });
};

//@tasks:  '/api/v1/tasks' : deleye tasks
//@method: PUT
//@access: private - admin
const deleteTask = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "task deleted",
  });
};

export { getTasks, updateTask, createTask, getSingleTask, deleteTask };
