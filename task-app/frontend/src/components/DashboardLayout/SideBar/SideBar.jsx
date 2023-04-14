import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="flex flex-col">
      <h2>Side bar</h2>
      <Link to="/dashboard/messages">Messages</Link>
      <Link to="/dashboard/analytics">Analytics</Link>
      <Link to="/dashboard/settings">Settings</Link>
    </div>
  );
};

export default SideBar;
