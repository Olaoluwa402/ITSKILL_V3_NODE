import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "./Input/Input";
import Spinner from "../Spinner/Spinner";
import { toast } from "react-toastify";
import "./Form.css";
import { loginAction } from "../../redux/actions/authActions";

const Form = () => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loading, error, success } = useSelector((store) => store.login);

  useEffect(() => {
    inputRef.current.focus();
    if (success) {
      toast.success("You are now logged in");
    }
  }, [success]);

  function emailHandler(e) {
    setEmail(e.target.value);
  }

  function passwordHandler(e) {
    setPassword(e.target.value);
  }

  function submitHandler(e) {
    if (!email || !password) {
      toast.warn("All fields are required");
      return;
    }
    dispatch(loginAction({ email, password }));
    // clear input field
    setEmail("");
    setPassword("");
  }

  return (
    <div className="wrapper">
      <div className="form">
        <div className="formGroup">
          <label htmlFor="username">User Name</label>
          <Input
            inputProps={{
              type: "email",
              placeholder: "email",
              value: email,
              onChange: emailHandler,
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

        {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
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
