import React, { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import Spinner from "../Spinner/Spinner";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";

const NewTask = ({ setOpenCreateTask }) => {
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState({
    title: "",
    desc: "",
    date: "",
  });

  //destruction items from the current state
  const { title, desc, date } = state;

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const submitHandler = (e) => {
    //prevent submissiion if fields are empty
    if (!title || !desc || !date) {
      toast.warning("All fields are required");
      return;
    }
    setLoading(true);
    const data = { id: uuidv4(), title, desc, date };

    setTimeout(() => {
      const tasts = localStorage.getItem("tasks")
        ? JSON.parse(localStorage.getItem("tasks"))
        : [];
      const taskCopy = [...tasts, data];
      localStorage.setItem("tasks", JSON.stringify(taskCopy));

      //clear input fields
      setState({ title: "", desc: "", date: "" });

      //set loading to false
      setLoading(false);

      toast.success("Task created");

      setOpenCreateTask(false);
    }, 3000);
  };
  return (
    <div className="w-[300px] h-[340px] bg-white drop-shadow-xl rounded-md relative p-5">
      {/* close icon */}
      <div
        onClick={() => setOpenCreateTask(false)}
        className="absolute top-2 right-3 text-[20px] cursor-pointer"
      >
        <IoMdCloseCircle />
      </div>{" "}
      <h2 className="text-dark">New Task</h2>
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
              onClick={submitHandler}
              className="px-[15px] py-[10px] bg-black text-white rounded-md hover:bg-slate-500"
            >
              Submit
            </button>
          )}
        </div>
      </div>
      {/* form ends */}
    </div>
  );
};

export default NewTask;
