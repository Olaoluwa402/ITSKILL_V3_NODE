import React from "react";

const Title = (props) => {
  //   let result;
  //   if (props.title) {
  //     result = props.title;
  //   } else {
  //     result = "suscribe";
  //   }
  console.log(props, "props");
  return (
    <h2
      style={{
        color: props.color ? props.color : "#000",
        textTransform: props.case ? props.case : "capitalize",
        textAlign: props.align ? props.align : "left",
      }}
      className="title"
    >
      {props.title ? props.title : "subscribe"}
    </h2>
  );
};

export default Title;
