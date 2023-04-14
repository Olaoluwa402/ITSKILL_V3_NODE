import React, { useContext } from "react";
import NewTask from "../components/NewTask/NewTask";
import UpdateTask from "../components/UpdateTask/UpdateTask";
import Modal from "../components/Modal/Modal";
import TaskList from "../components/TaskList/TaskList";
import GlobalContext from "../context";
import DocTitleTwo from "../components/CustomHooks/DocTitleTwo";
import CounterTwo from "../components/CustomHooks/counterTwo";

const Tasks = () => {
  const { tasks, openCreateTask, openUpdateTask, setOpenCreateTask } =
    useContext(GlobalContext);

  return (
    <div>
      {/* create task modal */}
      {openCreateTask && (
        <Modal>
          <NewTask />
        </Modal>
      )}

      {/* update task */}
      {openUpdateTask && (
        <Modal>
          <UpdateTask />
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
      <CounterTwo />
      <DocTitleTwo />

      {/* tasks component */}
      <TaskList tasks={tasks} />
    </div>
  );
};

export default Tasks;
