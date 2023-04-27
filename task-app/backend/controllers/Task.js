//@tasks:  '/api/v1/tasks' : call tasks
//@method: GET
//@access: public
const getTasks = (req, res) => {
  console.log(req.user, "fro Tasks");
  res.status(200).json({
    status: "success",
    message: "All tasks",
  });
};

//@tasks:  '/api/v1/tasks' : create tasks
//@method: POST
//@access: private - admin
const createTask = (req, res) => {
  console.log(req.user, "fro Tasks");
  res.status(200).json({
    status: "success",
    message: "All tasks",
  });
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
