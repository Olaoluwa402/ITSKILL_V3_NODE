import React from "react";
import Products from "../Products/Products";
import Subscribe from "../Subscribe/Subscribe";

import "./Main.css";
const Main = () => {
  return (
    <div className="main">
      <div className="main__content">
        <Products />
      </div>
      <div className="main__about">
        <Subscribe />
      </div>
    </div>
  );
};

export default Main;
