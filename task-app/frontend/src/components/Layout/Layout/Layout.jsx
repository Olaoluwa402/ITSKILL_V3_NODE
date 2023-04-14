import React from "react";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import SideBar from "../SideBar/SideBar";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Layout = ({ sideBarOpened, children }) => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <div className="h-screen flex flex-col justify-between">
        <Navigation />
        {sideBarOpened && <SideBar />}
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
