import React from "react";

const Input = (props) => {
  console.log(props.inputProps, "props.inputProps");
  //   const { type, placeholder } = props;
  //   return <input type={type ? type : "text"} placeholder={placeholder} />;
  return (
    <input {...props.inputProps} style={{ color: props.inputProps.color }} />
  );
};

export default Input;
