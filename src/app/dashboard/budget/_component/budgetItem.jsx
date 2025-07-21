import React from "react";
import Link from "next/link";

const BudgetItem = ({id, name, amount, used }) => {
  return (
   <Link href={`/dashboard/expenses/${id}`} > <div className="border shadow-md p-4 h-[15vh] flex flex-col items-center justify-center rounded-3xl hover:bg-gray-100 transition-all duration-300">
      <div className="flex  items-center justify-between w-full">
        <h2 className="font-bold">{name}</h2>
        <p> Allocated ${amount}</p>
      </div>
      <div className="flex  mt-2 items-center justify-between w-full ">
        <span className="text-sm text-gray-500">Used: ${used}</span>
        <span className="text-sm text-gray-500">
          Remaining: ${amount - used}
        </span>
      </div>
      <div className="mt-3  h-[2vh] w-full bg-blue-800 rounded-full">
        <div
          className="h-[2vh] bg-green-500 rounded-full "
          style={{ width: used < amount ? `${(used / amount) * 100}%` : `100%` }}
        ></div>
      </div>
    </div></Link>
  );
};

export default BudgetItem;
