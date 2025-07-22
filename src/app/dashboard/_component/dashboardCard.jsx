import React from "react";

const dashboardCard = ({ title, value, icon }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-5 flex items-center justify-between w-full text-blue-800">
      <div className=" p-5 flex flex-col items-center justify-items-start">
        <div className="text-2xl font-bold mb-2 ">{title}</div>
        <div className="text-lg font-bold">{value}</div>
      </div>
      <div className=" font-bold">{icon}</div>
    </div>
  );
};

export default dashboardCard;
