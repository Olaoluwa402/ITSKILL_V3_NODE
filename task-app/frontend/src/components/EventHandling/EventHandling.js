import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../Spinner/Spinner";
import { toast } from "react-toastify";
import { registerAction } from "../../redux/actions/authActions";

import styles from "./EventHandling.module.css";

const EventHandling = () => {
  const router = useNavigate();
  const dispatch = useDispatch();
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    repeat_password: "",
  });

  const { loading, error, success, user } = useSelector(
    (store) => store.register
  );

  useEffect(() => {
    if (success) {
      toast.success(`Registration successful, pls login`);

      setTimeout(() => {
        router("/");
      }, 4000);
    }
  }, [success]);

  function changeHandler(e) {
    console.log(e.target);
    // destructurig
    const { type, name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  }
  const { email, name, password, repeat_password } = state;

  function submitHandler(e) {
    e.preventDefault(); //valid if you use form element. prevents browser page reload
    if (!email || !password || !name || !repeat_password) {
      toast.warn("All fields are required");
      return;
    }
    //check that password match
    if (password !== repeat_password) {
      toast.warn("password do not match");
      return;
    }

    dispatch(registerAction({ email, password, repeat_password, name }));

    //clear input fields
    setState({
      name: "",
      email: "",
      password: "",
      repeat_password: "",
    });
  }

  return (
    <div className={styles.container}>
      {/* form handling without using form element */}
      {/* <div>
        <input
          type="text"
          name="firstName"
          placeholder="first name"
          value={firstName}
          onChange={changeHandler}
        />

        <button type="button" onClick={submitHandler}>
          submit
        </button>
      </div> */}
      <form onSubmit={submitHandler}>
        <div className={styles.formGroup}>
          <label htmlFor="name">name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="name"
            value={name}
            onChange={changeHandler}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email"
            value={email}
            onChange={changeHandler}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            value={password}
            onChange={changeHandler}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Reset Password</label>
          <input
            type="password"
            name="repeat_password"
            id="repeat_password"
            placeholder="repeat_password"
            value={repeat_password}
            onChange={changeHandler}
          />
        </div>
        {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
        {loading ? (
          <Spinner />
        ) : (
          <button className={styles.btn} type="submit">
            submit
          </button>
        )}

        <p>
          Have an account already?{" "}
          <a href="/login" style={{ color: "green" }}>
            Login
          </a>
        </p>
      </form>
    </div>
  );
};

export default EventHandling;
