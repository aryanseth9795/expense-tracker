import React from "react";

const BudgetItem = ({ name, amount, used }) => {
  return (
    <div className="border shadow-md p-4 h-[15vh] flex flex-col items-center justify-center">
      <div className="flex  items-center justify-between w-full">
        <h2 className="font-bold">{name}</h2>
        <p>${amount}</p>
      </div>
      <div className="flex  mt-2 items-center justify-between w-full">
        <span className="text-sm text-gray-500">Used: ${used}</span>
        <span className="text-sm text-gray-500">
          Remaining: ${amount - used}
        </span>
      </div>
      <div className="mt-2 h-[10vh] w-full bg-gray-800 rounded-full">
        <div
          className="h-full bg-green-500 rounded-full "
          style={{ width: `${(used / amount) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default BudgetItem;
