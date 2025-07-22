"use client";
import React, { use, useEffect } from "react";
import BudgetItem from "./_component/budgetItem";
import New_budget from "./_component/new_budget";
import { getBudgets } from "@/app/actions/expenseActions";
import { toast } from "sonner";
import Loader from "@/app/dashboard/_component/Loader";
const Budget = () => {
  const user = "687e33612cab50b3e6ae1d4b";
  const [newdata, setNewData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await getBudgets(user);
      setNewData(res);
    } catch (error) {
      toast.error("Failed to fetch data.");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
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
      )}
    </>
  );
};

export default Budget;
