'use client';

import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import BudgetItem from "../../budget/_component/budgetItem";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
addExpenseToBudget,
  getExpensesByBudget,
  getBudgetById,
  deleteBudget
} from "@/app/actions/expenseActions";
import {use} from "react";
import moment from "moment";
import { toast } from "sonner";
import { redirect } from "next/navigation";


const page = ({ params }) => {
  const { id } =use(params);
  

  const [budget, setBudget] = React.useState();
  const [expenses, setExpenses] = React.useState([]);
  const [expenseName, setExpenseName] = React.useState("");
  const [expenseAmount, setExpenseAmount] = React.useState("");


  const fetchExpenses = async () => {
    // Fetch expenses for the budget with id 'id'
    const res = await getExpensesByBudget(id);
    console.log("Fetched Expenses:", res);
    setExpenses(res);
  };
  const fetchBudget = async () => {
    // Fetch budget details by id
    const res = await getBudgetById(id);
    console.log("Fetched Budget:", res);
    setBudget(res);
  };
  React.useEffect(() => {
     fetchBudget();
    fetchExpenses();
  }, [id]);

  const handleAddExpense = async () => {
    const newExpense = {
      name: expenseName,
      amount: Number(expenseAmount),
      budgetId: id,
    };

    const res = await addExpenseToBudget(newExpense);
    console.log("Expense added:", res);
    setExpenseName("");
    setExpenseAmount("");
    fetchExpenses(); 
    fetchBudget(); // Refresh the expenses list after adding a new expense
  };

  const deletehandler=async()=>{
  const resu=await deleteBudget(id ) ;
  toast.success(resu);
  redirect("/dashboard/budget")
}
  return (
    <div className="flex flex-col h-full gap-5">
      <div className="bg-white shadow-md rounded-lg p-6 h-[20%]  flex items-center justify-between gap-2">
        <div className="w-[85%]">
          <BudgetItem
            id={budget?._id}
            name={budget?.name}
            amount={budget?.amount}
            used={budget?.used}
          />
        </div>
        <div className="w-[15%] flex flex-col items-center justify-center gap-2 ">
          <Button className="w-[80%] cursor-pointer bg-blue-800 ">
            Edit Budget
          </Button>
          <Button className="w-[80%] cursor-pointer bg-red-500" onClick={deletehandler}>Delete</Button>
        </div>
      </div>
      <div className="bg-white shadow-md rounded-lg p-6 h-[15%] flex items-center justify-between gap-2 ">
        <h1 className="text-2xl bold font-bold">Add Expense</h1>
        <Input
          placeholder="Expense Name"
          className="w-[30%]"
          value={expenseName}
          onChange={(e) => setExpenseName(e.target.value)}
          type={"text"}
        />
        <Input
          placeholder="Amount"
          className="w-[30%] "
          value={expenseAmount}

          type={"number"}
          onChange={(e) => setExpenseAmount(e.target.value)}
        />
        <Button
          className="w-[15%] cursor-pointer bg-green-600"
          disabled={!expenseName || !expenseAmount}
          onClick={handleAddExpense}
        >
          Add Expense
        </Button>
      </div>
      {/* <div className="bg-white shadow-md rounded-lg p-6 h-[5%] flex items-center justify-center">
        <h1 className="text-2xl bold  font-bold">Expenses List</h1>
      </div> */}
      <div className="bg-white shadow-md rounded-lg p-6 h-[60%] overflow-auto">
        {/* <div className="bg-white shadow-md rounded-lg p-6 h-[5%] flex items-center justify-center mb-5"> */}
        <h1 className="text-2xl bold  font-bold text-center mb-5">
          Expenses List
        </h1>
        {/* </div> */}
        <Table className="w-full">
          <TableCaption>A list of your recent expenses.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="text-left">Date</TableHead>
              <TableHead className="text-center">Expense Name</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {expenses?.map((item, index) => (
              <TableRow key={index}>
                <TableCell className="text-left font-medium">
                  {moment(item.createdAt).format("DD/MM/YYYY")}
                </TableCell>
                <TableCell className="text-center">{item.name}</TableCell>
                <TableCell className="text-right">${item.amount}.00</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default page;
