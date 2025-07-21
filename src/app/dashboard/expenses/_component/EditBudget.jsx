"use client";
import React from "react";
import { CirclePlus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { createBudget } from "@/app/actions/expenseActions";


const Edit_budget = ({ refetchData, userId }) => {
  const [newdata, setNewData] = React.useState({
    name: "",
    amount: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewData((prevData) => ({
      ...prevData,
      [name]: value,
      userId: userId,
    }));
   
  };

  const handleUpdateBudget = async () => {
    const res = await createBudget(newdata);
    console.log("Budget Updated:", res);
    refetchData();
    toast.success("Budget updated successfully!");
  };

  return (
    <>
      <Dialog>
        <DialogTrigger>
          {" "}
          <div className="border shadow-md p-4 h-[15vh] flex flex-col items-center justify-center cursor-pointer rounded-3xl hover:bg-gray-100 transition-all duration-300">
            <h2 className="font-bold">Edit Budget </h2>
            <CirclePlus />
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader className="text-center">
            <DialogTitle className={"text-2xl font-bold text-center"}>
              Edit Budget
            </DialogTitle>
          </DialogHeader>
          <DialogDescription className="text-center">
            Please enter the budget details below.
          </DialogDescription>
          <Input
            placeholder="Budget Name"
            className="mb-2"
            onChange={handleInputChange}
            name="name"
            value={newdata.name}
          />
          <Input
            placeholder="Budget Amount"
            className="mb-2"
            onChange={handleInputChange}
            name="amount"
            value={newdata.amount}
          />
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button
                className="w-full bg-blue-500 text-white hover:bg-blue-600"
                onClick={handleUpdateBudget}
              >
                Update Budget
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Edit_budget;
