import React, { useState } from "react";

import styles from "./EventHandling.module.css";

const EventHandling = () => {
  // const [firstName, setFirstName] = useState("");
  // const [email, setEmail] = useState("");

  const [state, setState] = useState({
    firstName: "",
    email: "",
  });

  console.log(state, "state");

  function changeHandler(e) {
    console.log(e.target);
    // destructurig
    const { type, name, value } = e.target;
    console.log(type, name);
    setState({
      ...state,
      [name]: value,
    });
  }
  const { email, firstName } = state;

  function submitHandler(e) {
    e.preventDefault(); //valid if you use form element. prevents browser page reload
    console.log(state);
    // axios.post("/admin", { formData: firstName });
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
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="first name"
            value={firstName}
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

        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default EventHandling;
