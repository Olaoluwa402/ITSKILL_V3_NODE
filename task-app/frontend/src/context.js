import React, { useState, useEffect } from "react";

//create instance of a context
const GlobalContext = React.createContext();

//Two components are made available at the instance of creating a context - Provider & consumer

//provider
const Provider = ({ children }) => {
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

  const store = {
    openCreateTask,
    openUpdateTask,
    id: updateId,
    tasks,
    setUpdateId,
    setOpenCreateTask,
    setOpenUpdateTask,
    truncate,
    removeTaskHandler,
  };
  return (
    <GlobalContext.Provider value={store}>{children}</GlobalContext.Provider>
  );
};

//consumer
const Consumer = GlobalContext.Consumer;

export { Provider, Consumer };

export default GlobalContext;
