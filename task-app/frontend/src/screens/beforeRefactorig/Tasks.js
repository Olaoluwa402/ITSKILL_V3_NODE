import React, { useState, useEffect } from "react";
import NewTask from "../../components/NewTask/NewTask";
import UpdateTask from "../../components/UpdateTask/UpdateTask";
import Modal from "../../components/Modal/Modal";
import TaskList from "../../components/TaskList/TaskList";

const Tasks = () => {
  const [openCreateTask, setOpenCreateTask] = useState(false);
  const [openUpdateTask, setOpenUpdateTask] = useState(false);
  const [updateId, setUpdateId] = useState("");
  const [tasks, setTasks] = useState([]);

  // console.log(updateId, "updateId");
  useEffect(() => {
    getTasks();
  }, [openCreateTask, openUpdateTask]);

  function getTasks() {
    const tasks = localStorage.getItem("tasks");
    const tasksJSON = JSON.parse(tasks);
    console.log(tasksJSON, "tsas");
    setTasks(tasksJSON);
  }

  return (
    <div>
      {/* create task modal */}
      {openCreateTask && (
        <Modal>
          <NewTask setOpenCreateTask={setOpenCreateTask} />
        </Modal>
      )}

      {/* update task */}
      {openUpdateTask && (
        <Modal>
          <UpdateTask setOpenUpdateTask={setOpenUpdateTask} id={updateId} />
        </Modal>
      )}
      {/* tab section */}
      <div className="w-full bg-slate-300 h-[80px] flex items-center ">
        <div className="generalContainer">
          <button
            onClick={() => setOpenCreateTask(true)}
            className="px-[15px] py-[10px] bg-black text-white rounded-lg hover:opacity-40"
          >
            New Task
          </button>
        </div>
      </div>

      {/* tasks component */}
      <TaskList
        tasks={tasks}
        setOpenUpdateTask={setOpenUpdateTask}
        setUpdateId={setUpdateId}
        getTasks={getTasks}
      />
    </div>
  );
};

export default Tasks;
