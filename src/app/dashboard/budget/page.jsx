'"use client";';
import React, { use } from "react";
import BudgetItem from "./_component/budgetItem";
import New_budget from "../_component/new_budget";

const bugelist = [
  { name: "Home Renovation", amount: 5000, used: 2000 },
  { name: "Vacation", amount: 2000, used: 100 },
  { name: "Emergency Fund", amount: 3000, used: 500 },
];

const budget = () => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
      <New_budget />

      {bugelist.map((budget, index) => (
        <BudgetItem
          key={index}
          name={budget.name}
          amount={budget.amount}
          used={budget.used}
        />
      ))}
    </div>
  );
};

export default budget;
