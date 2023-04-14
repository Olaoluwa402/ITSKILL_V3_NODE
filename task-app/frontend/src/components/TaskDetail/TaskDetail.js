import React from "react";

const TaskDetail = ({ task }) => {
  return (
    <div>
      <h1>{task && task.title ? task.title : ""}</h1>

      <p>{task && task.desc ? task.desc : ""}</p>

      <span>{task && task.date ? task.date : ""}</span>
    </div>
  );
};

export default TaskDetail;
