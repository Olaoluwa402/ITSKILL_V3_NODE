import React from "react";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import SideBar from "../SideBar/SideBar";
import { ToastContainer } from "react-toastify";
import { Outlet } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";

const Layout = () => {
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

      <div className="relative">
        <div className="ml-[100px] ">
          <Navigation />
        </div>

        <div className="fixed top-0 left-0 w-[100px] h-screen bg-slate-500">
          <SideBar />
        </div>
        <main className="ml-[100px] h-screen">{<Outlet />}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
