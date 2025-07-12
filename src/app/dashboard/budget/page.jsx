'use client';
import React, { use } from "react";
import BudgetItem from "./_component/budgetItem";
import New_budget from "./_component/new_budget";



const Budget = () => {



const [newdata, setNewData] = React.useState([]);

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
      <New_budget setNewDatas={setNewData} />

      {newdata.map((budget, index) => (
        <BudgetItem
          key={index}
          id={budget.id}
          name={budget.name}
          amount={budget.amount}
          used={budget.used}
        />
      ))}
    </div>
  );
};

export default Budget;
