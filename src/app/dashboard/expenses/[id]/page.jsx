"use client";

import {
  addExpenseToBudget,
  deleteBudget,
  getBudgetById,
  getExpensesByBudget,
} from "@/app/actions/expenseActions";
import Loader from "@/app/dashboard/_component/Loader.jsx";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import moment from "moment";
import { redirect } from "next/navigation";
import React, { use } from "react";
import { toast } from "sonner";
import BudgetItem from "../../budget/_component/budgetItem";
import Edit_budget from "../_component/EditBudget.jsx";


const page = ({ params }) => {
  const { id } = use(params);

  const [budget, setBudget] = React.useState();
  const [expenses, setExpenses] = React.useState([]);
  const [expenseName, setExpenseName] = React.useState("");
  const [expenseAmount, setExpenseAmount] = React.useState("");
  const[isloading, setIsLoading] = React.useState(false);

  const fetchExpensesandBudget = async () => {
    // Fetch expenses for the budget with id 'id'
   try {
    setIsLoading(true);
     const res = await getExpensesByBudget(id);
    setExpenses(res);
    const resBud = await getBudgetById(id);
    setBudget(resBud);
   } catch (error) {
     console.error("Error fetching expenses and budget:", error);
     toast.error("Failed to fetch expenses and budget.");
   }finally {
     setIsLoading(false);
   }
  };
 
  React.useEffect(() => {
    fetchExpensesandBudget();
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
    fetchExpensesandBudget(); // Refresh the expenses list after adding a new expense
  };

  const deletehandler = async () => {
    const resu = await deleteBudget(id);
    toast.success(resu);
    redirect("/dashboard/budget");
  };
  return (
    <>{isloading? <Loader/>:<div className="flex flex-col h-full gap-5">
      <div className="bg-white shadow-md rounded-lg p-6 md:h-[20%]  flex flex-col md:flex-row  items-center justify-between gap-2 h-[40%] gap-4">
        <div className="w-full md:w-[85%]">
          <BudgetItem
            id={budget?._id}
            name={budget?.name}
            amount={budget?.amount}
            used={budget?.used}
          />
        </div>
        <div className=" w-full md:w-[15%] flex flex-col items-center justify-center gap-2 ">
          <Edit_budget refetchData={fetchExpensesandBudget} data={budget} />
          <Button
            className="w-[80%] cursor-pointer bg-red-500"
            onClick={deletehandler}
          >
            Delete
          </Button>
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
    </div>}</>
  );
};

export default page;
