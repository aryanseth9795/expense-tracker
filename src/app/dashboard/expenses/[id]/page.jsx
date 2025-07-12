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

const page = ({ params }) => {
  // const { id } = params;
  const budget = { id: 1, name: "Home Renovation", amount: 5000, used: 2000 };

  const arr = [
    { name: "milk", price: 100, Date: "2023-01-01" },
    { name: "bread", price: 50, Date: "2023-01-02" },
    { name: "eggs", price: 30, Date: "2023-01-03" },
  ];
  return (
    <div className="flex flex-col h-full gap-5">
      <div className="bg-white shadow-md rounded-lg p-6 h-[30%]  flex items-center justify-between gap-2">
        <div className="w-[85%]">
          <BudgetItem
            id={budget.id}
            name={budget.name}
            amount={budget.amount}
            used={budget.used}
          />
        </div>
        <div className="w-[15%] flex flex-col items-center justify-center gap-2 ">
          <Button className="w-[80%] cursor-pointer bg-blue-800 ">Edit Budget</Button>
          <Button className="w-[80%] cursor-pointer bg-red-500">Delete</Button>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 h-[5%] flex items-center justify-center">
        <h1 className="text-2xl bold  font-bold">Expenses List</h1>
      </div>
      <div className="bg-white shadow-md rounded-lg p-6 h-[60%] overflow-auto">
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
            {arr.map((item,index) => (
              <TableRow key={index}>
                <TableCell className="text-left font-medium">
                  {item.Date}
                </TableCell>
                <TableCell className="text-center">{item.name}</TableCell>
                <TableCell className="text-right">${item.price}.00</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default page;
