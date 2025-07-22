import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const BarChartDashboard = ({data}) => {

  const formattedData = data?.map((budget) => ({
    name: budget.name,
    Used: budget.used,
    Remaining: budget.amount-budget.used,
  })) || [];

  return (
    <div className="w-full h-full">
      <h2 className="text-center text-xl font-bold mb-4">Budget Overview</h2>
      <p className="text-center mb-4">Used vs Remaining Budget</p>
      {" "}
      <ResponsiveContainer width="100%" height="90%">
        <BarChart
          data={formattedData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Used" stackId="a" fill="#8884d8" />
          <Bar dataKey="Remaining" stackId="a" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartDashboard;
