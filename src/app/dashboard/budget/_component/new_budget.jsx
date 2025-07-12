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
import axios from "axios";
import { toast } from "sonner";

const New_budget = ({ setNewDatas }) => {
  const [newdata, setNewData] = React.useState({
    name: "",
    amount: 0,
    used: 500,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewData((prevData) => ({
      ...prevData,
      [name]: name === "amount" || name === "used" ? parseFloat(value) : value,
    }));
    
    
  };

  const handleCreateBudget = async() => {
    // Logic to handle budget creation

    const res= await axios.post("/api/budget", newdata);
    console.log("New Budget Created:", res);
    
    // setNewDatas((prevData) => [...prevData, newdata]);
    setNewData({ name: "", amount: 0, used: 0 }); //
  };

  return (
    <>
      <Dialog>
        <DialogTrigger>
          {" "}
          <div className="border shadow-md p-4 h-[15vh] flex flex-col items-center justify-center cursor-pointer rounded-3xl hover:bg-gray-100 transition-all duration-300">
            <h2 className="font-bold">Create New Budget </h2>
            <CirclePlus />
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader className="text-center">
            <DialogTitle className={"text-2xl font-bold text-center"}>
              Add New Budget ?
            </DialogTitle>
          </DialogHeader>
          <DialogDescription className="text-center">
           
              Please enter the budget details below.
        

          
           
          </DialogDescription>
            <Input placeholder="Budget Name" className="mb-2" onChange={handleInputChange} name="name" />
            <Input placeholder="Budget Amount" className="mb-2" onChange={handleInputChange} name="amount" />
          <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
             <Button
              className="w-full bg-blue-500 text-white hover:bg-blue-600"
              onClick={handleCreateBudget}
            >
              Create Budget
            </Button>
          </DialogClose>
        </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default New_budget;
