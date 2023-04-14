import React, { useState } from "react";
import Title from "../Title/Title";
import InputComponent from "../Input/Input";
import {v4 as uuidv4 } from "uuid";

import "./Subscribe.css";

const Subscribe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  function nameHandler(e) {
    setName(e.target.value);
  }

  function emailHandler(e) {
    setEmail(e.target.value);
  }

  const data = [{name:'john'}, {name:'dammy'}]

  const res = data.map((user)=> {
    const newUser = {
      id:uuidv4(),
      ...user
    }
    return newUser
  })


  console.log(res,'res')


  function submitHandler(e) {
    console.log({ name, email });
  }

  return (
    <div>
      <Title title="Submit" color="#000" case="uppercase" align="center" />
      <div className="subscribeInputs">
        {/* <InputComponent placeholder="name" />
        <InputComponent type="email" placeholder="example@gmail.com" />
        <InputComponent placeholder="addrress" /> */}
        <InputComponent
          inputProps={{
            type: "text",
            placeholder: "name",
            name: "name",
            color: "green",
            value: name,
            onChange: nameHandler,
          }}
        />

        <InputComponent
          inputProps={{
            type: "email",
            placeholder: "@example.com",
            name: "email",
            color: "red",
            value: email,
            onChange: emailHandler,
          }}
        />

        {/* <InputComponent
          inputProps={{
            type: "text",
            placeholder: "name",
            name: "name",
            color: "blue",
          }}
        /> */}

        <input type="submit" value="submit" onClick={submitHandler} />
      </div>
    </div>
  );
};

export default Subscribe;
