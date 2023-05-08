import Task from "../models/Task.js";
//@tasks:  '/api/v1/tasks' : call tasks
//@method: GET
//@access: private
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

const getSingleTask = async (req, res) => {
  try {
    // const {page, limit} = req.query // /tasks?page=2&limit=10
    const { id } = req.params; // /tasks/:id
    const task = await Task.findById(id);
    if (!task) {
      throw new Error("Not found");
    }
    res.status(200).json({
      status: "success",
      task,
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: err.message,
    });
  }
};

//@tasks:  '/api/v1/tasks/:id' : update task
//@method: PUT /PATCH
//@access: private : admin

const updateTask = async (req, res) => {
  const { title, imgUrl, desc } = req.body;

  try {
    const { id } = req.params; // /tasks/:id
    const task = await Task.findById(id);
    if (!task) {
      throw new Error("Not found");
    }
    //alternative is findAndUpdate()
    //update record
    task.title = title ? title : task.title;
    task.dec = desc ? desc : task.decs;
    task.imgUrl = imgUrl ? imgUrl : task.imgUrl;

    //save the changes
    task.save();

    res.status(200).json({
      status: "success",
      message: "Task updated",
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: err.message,
    });
  }
};

//@tasks:  '/api/v1/tasks' : delete tasks
//@method: DELETE
//@access: private - admin
const deleteTask = async (req, res) => {
  try {
    const { id } = req.params; // /tasks/:id
    await Task.deleteOne(id);
    res.status(200).json({
      status: "success",
      message: "Task deleted",
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: err.message,
    });
  }
};

export { getTasks, updateTask, createTask, getSingleTask, deleteTask };
