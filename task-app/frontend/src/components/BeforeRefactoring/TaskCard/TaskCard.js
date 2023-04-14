import React from "react";
import { FaTrashAlt, FaEdit, FaShareAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { RWebShare } from "react-web-share";

const TaskCard = ({ task, setOpenUpdateTask, setUpdateId, getTasks }) => {
  const truncate = (str, num) => {
    if (str.length > num) {
      str = str.substring(0, num) + "...";
      return str;
    }
    return str;
  };

  function removeTask(id) {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    const copy = [...tasks];

    ///get item by id
    const newTasks = copy.filter((item) => item.id !== id);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  }

  const removeTaskHandler = (id) => {
    console.log(id);
    const decision = window.confirm(
      "Are you sure you want to delete ths items?"
    );

    if (decision) {
      removeTask(id);
      getTasks();
    }
  };

  return (
    <div className="w-[250px] h-[300px] flex flex-col drop-shadow-md rounded-md bg-slate-400 m-4 p-2">
      <div className="flex-1">
        <h2 className="font-bold">
          <Link to={`/tasks/${task.id}`}>{truncate(task.title, 20)}</Link>
        </h2>
        <p style={{ wordWrap: "break-word" }}>{truncate(task.desc, 300)}</p>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-1">
          <FaTrashAlt
            className="cursor-pointer"
            onClick={() => removeTaskHandler(task.id)}
          />{" "}
          <FaEdit
            className="cursor-pointer"
            onClick={() => {
              setUpdateId(task.id);
              setOpenUpdateTask(true);
            }}
          />
        </div>

        <RWebShare
          data={{
            text: task.desc.slice(0, 30),
            url: "http://localhost:3000/tasks",
            title: task.title,
          }}
          onClick={() => console.log("shared successfully!")}
        >
          <FaShareAlt className="cursor-pointer" />
        </RWebShare>
      </div>
    </div>
  );
};

export default TaskCard;
