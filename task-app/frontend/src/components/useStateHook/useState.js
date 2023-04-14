import React, { useState } from "react";

const Input = () => {
  const [title, setTitle] = useState("John");
  const [inputValue, setInputValue] = useState("");
  const [email, setEmail] = useState("");

  function buttonHandler(e) {
    e.preventDefault();
    setTitle("Daniel");
  }

  function submitHandler() {
    console.log({
      inputValue,
      email,
    });
  }

  return (
    <form
      method="POST"
      action="/form"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <h1>{title}</h1>
      <h2>{inputValue}</h2>
      <h2>{email}</h2>
      <button onClick={buttonHandler}>Change Name</button>
      <input
        type="text"
        name="title"
        placeholder="title"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <input
        type="email"
        name="email"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input type="submit" value="submit" onClick={submitHandler} />
    </form>
  );
};

export default Input;
