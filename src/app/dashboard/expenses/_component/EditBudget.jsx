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

const Edit_budget = ({ refetchData, data }) => {
  const [newdata, setNewData] = React.useState({
    name: data?.name || "",
    amount: data?.amount || 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewData((prevData) => ({
      ...prevData,
      [name]: value,
      userId: data?.userId,
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
          <h1 className="font-bold text-white border rounded-md px-23 py-2 md:px-7 md:py-2 w-[100%] hover:bg-gray-200 cursor-pointer bg-green-500  ">
            Edit Budget{" "}
          </h1>
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
