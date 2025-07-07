import Image from "next/image";
import React from "react";

const Dashboard = () => {
  return (
    <div className="flex flex-row h-screen w-screen">
      <div className="w-[15vw] h-screen border border-black flex flex-col p-4 gap-5  bg-amber-50">
        <div className="pl-3">
          <Image src="/exp_logo.png" alt="logo" width={160} height={100} />
        </div>
        <div>side menu</div>
        <div>side menu</div>
        <div>side menu</div>
      </div>
      <div className="w-[85vw] h-screen border border-black">jii</div>
    </div>
  );
};

export default Dashboard;
