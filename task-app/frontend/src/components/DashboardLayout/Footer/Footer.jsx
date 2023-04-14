import React from "react";
import { tailStyle } from "./tail";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={`${tailStyle.container} ${styles.container}`}>
      <h2 className={`${tailStyle.h2}`}>Footer</h2>
    </div>
  );
};

export default Footer;
