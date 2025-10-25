import React from "react";
import { Outlet } from "react-router";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { Toaster } from "react-hot-toast";

const Root = () => {
  return (
    <div className="w-11/12 mx-auto">
      <Navbar></Navbar>
      <main>
        <Outlet></Outlet>
        <Toaster position="top-center" reverseOrder={false} />
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Root;
