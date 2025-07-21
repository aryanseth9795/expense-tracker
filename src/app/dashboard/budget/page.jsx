"use client";
import React, { use, useEffect } from "react";
import BudgetItem from "./_component/budgetItem";
import New_budget from "./_component/new_budget";
import { getBudgets } from "@/app/actions/expenseActions";
import { toast } from "sonner";

const Budget = () => {
  const user = "687e33612cab50b3e6ae1d4b";
  const [newdata, setNewData] = React.useState([]);

  const fetchData = async () => {
    const res = await getBudgets(user);
    console.log("Fetched Budgets:", res);
    setNewData(res);
    toast.success("Budgets fetched successfully!");
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
      <New_budget userId={user} refetchData={fetchData} />

      {newdata?.map((budget, index) => (
        <BudgetItem
          key={index}
          id={budget?._id}
          name={budget?.name}
          amount={budget?.amount}
          used={budget?.used}
        />
      ))}
    </div>
  );
};

export default Budget;
