import React, { useState, useEffect, useContext } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import Spinner from "../Spinner/Spinner";
import { toast } from "react-toastify";
import GlobalContext from "../../context";

const NewTask = () => {
  const { setOpenUpdateTask, id } = useContext(GlobalContext);
  const [loading, setLoading] = useState(false);
  const [task, setTask] = useState(null);
  const [state, setState] = useState({
    title: "",
    desc: "",
    date: "",
  });

  useEffect(() => {
    if (!task || (task && task.id !== id)) {
      getTask(id);
    }
  }, [id, task]);

  useEffect(() => {
    if (task) {
      setState({
        title: task.title,
        desc: task.desc,
        date: task.date,
      });
    }
  }, [task]);

  function getTask(id) {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    const copy = [...tasks];

    ///get item by id
    const task = copy.find((item) => item.id === id);
    setTask(task);

    return task;
  }

  // console.log(task, "task");

  //destruction items from the current state
  const { title, desc, date } = state;

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const submitHandler = (id) => {
    setLoading(true);

    setTimeout(() => {
      const tasks = localStorage.getItem("tasks")
        ? JSON.parse(localStorage.getItem("tasks"))
        : [];
      const copy = [...tasks];

      const index = copy.findIndex((item) => item.id === id);

      ///get item by id
      const task = copy[index];

      task.title = state.title;
      task.desc = state.desc;
      task.date = state.date;

      // console.log(index, "updated task");
      localStorage.setItem("tasks", JSON.stringify(copy));

      //set loading to false
      setLoading(false);

      toast.success("Task updated");

      setOpenUpdateTask(false);
    }, 3000);
  };
  return (
    <div className="w-[300px] h-[340px] bg-white drop-shadow-xl rounded-md relative p-5">
      {/* close icon */}
      <div
        onClick={() => setOpenUpdateTask(false)}
        className="absolute top-2 right-3 text-[20px] cursor-pointer"
      >
        <IoMdCloseCircle />
      </div>{" "}
      <h2 className="text-dark">Update Task</h2>
      {/* form */}
      <div className="flex flex-col">
        <div className="my-[5px] flex flex-col">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={changeHandler}
            placeholder="title"
          />
        </div>

        <div className="my-[5px] flex flex-col">
          <label htmlFor="desc">Description</label>
          <textarea
            type="text"
            id="desc"
            name="desc"
            value={desc}
            onChange={changeHandler}
            placeholder="description"
          ></textarea>
        </div>
        <div className="my-[5px] flex flex-col">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={date}
            onChange={changeHandler}
          />
        </div>

        {/* cta */}

        <div className="flex justify-center items-center my-5">
          {loading ? (
            <Spinner />
          ) : (
            <button
              onClick={() => submitHandler(task.id)}
              className="px-[15px] py-[10px] bg-black text-white rounded-md hover:bg-slate-500"
            >
              Update
            </button>
          )}
        </div>
      </div>
      {/* form ends */}
    </div>
  );
};

export default NewTask;
