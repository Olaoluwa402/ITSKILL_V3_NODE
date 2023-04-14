import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TaskDetail from "../../components/TaskDetail/TaskDetail";

const Task = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    if (!task || (task && task.id !== id)) {
      getTask(id);
    }
  }, [id, task]);

  function getTask(id) {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    const copy = [...tasks];

    ///get item by id
    const task = copy.find((item) => item.id === id);
    setTask(task);

    return task;
  }

  return (
    <div>
      <TaskDetail task={task} />
    </div>
  );
};

export default Task;
