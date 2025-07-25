'use client";';

import React from "react";
import Sidebar from "./_component/sidebar";
import MobileMenu from "./_component/mobileMenu";

const layout = ({ children }) => {
  return (
    <div className="flex flex-row h-screen w-screen">
      <div className="w-[15vw] h-screen border flex-col p-4 gap-5  bg-amber-50 hidden lg:flex">
        <Sidebar />
      </div>
      <div className=" lg:hidden absolute top-5 left-5  z-10">
        <MobileMenu />
      </div>
      <div className="lg:w-[85vw] w-full h-screen border border-black">
        <div className="flex items-center justify-center h-[10vh] w-full bg-amber-100  shadow-md rounded-md">
          <h1 className="text-2xl font-bold">Expense Tracker</h1>
        </div>
        <div className="flex flex-col h-[89vh] w-full p-4 overflow-auto bg-gray-100">
          {children}
        </div>
      </div>
    </div>
  );
};

export default layout;
