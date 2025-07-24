"use client";
import React, { useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
} from "@/components/ui/table";
import moment from "moment";
import { getAllExpensesByUser } from "@/app/actions/expenseActions";
import { toast } from "sonner";
import Loader from '@/app/dashboard/_component/Loader'
import { useSession } from "next-auth/react";
const ExpensesPage = () => {
  const { data: session } = useSession();
  const [allExpenses, setallExpenses] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const fetchallExpenses = async () => {
    try {
      setLoading(true);
      const res = await getAllExpensesByUser(session?.user?.id);
      setallExpenses(res);
    } catch (error) {
      toast.error("Failed to fetch data.");
    } finally {
      setLoading(false);
    }
  };

  
  useEffect(() => {
    fetchallExpenses();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <div>All Latest Expenses</div>
          <div>
            <Table className="w-full">
              <TableCaption>A list of your recent expenses.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-left">Date</TableHead>
                  <TableHead className="">Budget Name</TableHead>
                  <TableHead className="">Expense Name</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {allExpenses?.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="text-left font-medium">
                      {moment(item.createdAt).format("DD/MM/YYYY")}
                    </TableCell>
                    <TableCell className="">{item.budgetId?.name}</TableCell>
                    <TableCell className="">{item.name}</TableCell>
                    <TableCell className="text-right">
                      ${item.amount}.00
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      )}
    </>
  );
};

export default ExpensesPage;
