import React, { useState, useRef, useEffect } from "react";
import Input from "./Input/Input";
import Spinner from "../Spinner/Spinner";
import { toast } from "react-toastify";
import "./Form.css";

const Form = () => {
  const inputRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  function userNameHandler(e) {
    setUserName(e.target.value);
  }

  function passwordHandler(e) {
    setPassword(e.target.value);
  }

  function submitHandler(e) {
    //set loadig to true
    setLoading(true);

    setTimeout(() => {
      // clear input field
      setUserName("");
      setPassword("");
      setLoading(false);
    }, 4000);

    toast.success("Successfull");

    console.log({ username, password });
  }

  return (
    <div className="wrapper">
      <div className="form">
        <div className="formGroup">
          <label htmlFor="username">User Name</label>
          <Input
            inputProps={{
              type: "text",
              placeholder: "username",
              value: username,
              onChange: userNameHandler,
              ref: inputRef,
            }}
          />
        </div>

        <div className="formGroup">
          <label htmlFor="password">Password</label>
          <Input
            inputProps={{
              type: "password",
              placeholder: "Enter Password",
              value: password,
              onChange: passwordHandler,
            }}
          />
        </div>

        {loading ? (
          <Spinner />
        ) : (
          <button className="btn" onClick={submitHandler}>
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default Form;
