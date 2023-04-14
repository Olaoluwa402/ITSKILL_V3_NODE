import React, { useContext } from "react";
import { FaTrashAlt, FaEdit, FaShareAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { RWebShare } from "react-web-share";
import GlobalContext from "../../context";

const TaskCard = ({ task }) => {
  const { truncate, setOpenUpdateTask, removeTaskHandler, setUpdateId } =
    useContext(GlobalContext);

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
