"use client";
import React from "react";
import DashboardCard from "./_component/dashboardCard";
import { getDashboardData } from "../actions/expenseActions";
import BudgetItem from "./budget/_component/budgetItem";
import BarChartDashboard from "./_component/BarChartDashboard";
import { PiggyBank, ReceiptIcon, Shield } from "lucide-react";
import Loader from "@/app/dashboard/_component/Loader";
import { useSession } from "next-auth/react";

const Dashboard = () => {
  const [dashboardData, setDashboardData] = React.useState();
  const [loading, setLoading] = React.useState(true);
  const { data: session } = useSession();
  console.log("Session Data:", session);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      const result = await getDashboardData(session?.user?.id);
      setDashboardData(result);
      console.log(result);
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    } finally {
      setLoading(false);
    }
  };
  React.useEffect(() => {
    fetchDashboardData();
  }, [session?.user?.id]);

  // This is the main dashboard page
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="h-screen w-full grid grid-col-1 gap-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-5 justify-between items-center w-full h-[40%] ">
            <DashboardCard
              title="Total Budget"
              value={dashboardData?.totalBudget}
              icon={<PiggyBank size={80} />}
            />
            <DashboardCard
              title="Total Expense"
              value={dashboardData?.totalUsed}
              icon={<ReceiptIcon size={80} />}
            />
            <DashboardCard
              title="No. of Budget"
              value={dashboardData?.BudgetCount}
              icon={<Shield size={80} />}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5  w-full h-[200%] md:h-[60%]">
            <div className="md:col-span-2  p-5 ml-5 border h-[120%] md:h-[100%]">
              <BarChartDashboard data={dashboardData?.budgets} />
            </div>
            <div className="grid grid-cols-1 gap-3 border-shadow-md h-[80%] md:h-[100%] mt-25 md:mt-0 p-5 ">
              <h1 className="text-2xl font-bold text-center">Budgets</h1>
              {dashboardData?.budgets.map((budget) => (
                <BudgetItem
                  key={budget._id}
                  id={budget._id}
                  name={budget.name}
                  amount={budget.amount}
                  used={budget.used}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
