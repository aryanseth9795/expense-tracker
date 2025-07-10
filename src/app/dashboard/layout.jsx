'use client";'

import React from "react";
import Sidebar from "./_component/sidebar";
import Image from "next/image";

const layout = ({ children }) => {
  return (
    <div className="flex flex-row h-screen w-screen">
      <div className="w-[15vw] h-screen border flex-col p-4 gap-5  bg-amber-50 hidden lg:flex">
        <Sidebar />
      </div>
       <div className="h-15 w-15 border border-black  flex-col p-4 gap-5  bg-amber-50 flex lg:hidden absolute top-5 left-5 right-0 z-10">
        hii
      </div>
      <div className="lg:w-[85vw] w-full h-screen border border-black">
        <div className="flex items-center justify-center h-[10vh] w-full bg-amber-100  shadow-md rounded-md">
          {" "}
          <h1 className="text-2xl font-bold">Expense Tracker</h1>
        </div>
        {children}
      </div>
    </div>
  );
};

export default layout;
