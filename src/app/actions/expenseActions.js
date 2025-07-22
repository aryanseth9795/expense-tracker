"use server";

import dbConnect from "@/lib/db";
import budget from "@/models/budget";
import Budget from "@/models/budget";
import Expenses from "@/models/expenses";

export const getBudgets = async (userId) => {
  try {
    await dbConnect();
    const budgets = await Budget.find({ userId });
    return JSON.parse(JSON.stringify(budgets));
  } catch (error) {
    console.error("Error fetching budgets:", error);
    return "Error fetching budgets";
  }
};

export const createBudget = async (newBudget) => {
  try {
    await dbConnect();
    const budget = await Budget.create(newBudget);
    return JSON.parse(JSON.stringify(budget));
  } catch (error) {
    console.error("Error creating budget:", error);
    throw error;
  }
};

export const EditBudget = async (data) => {
  try {
    await dbConnect();
    const budget = await Budget.findByIdAndUpdate(data.id, data, {
      new: true,
      runValidators: true,
    });
    return JSON.parse(JSON.stringify(budget));
  } catch (error) {
    console.error("Error editing budget:", error);
    return "Error editing budget";
  }
};

export const deleteBudget = async (id) => {
  try {
    await dbConnect();
    const budget = await Budget.findByIdAndDelete(id);
    if (!budget) {
      return "Budget not found";
    }
    // Optionally, delete associated expenses if needed
    await Expenses.deleteMany({ budgetId: id });
    return "Budget deleted successfully";
  } catch (error) {
    console.error("Error deleting budget:", error);
    return "Error deleting budget";
  }
};

export const getBudgetById = async (budgetId) => {
  try {
    await dbConnect();
    const budget = await Budget.findById(budgetId);
    return JSON.parse(JSON.stringify(budget));
  } catch (error) {
    console.error("Error fetching budget by ID:", error);
    return "Error fetching budget by ID";
  }
};

export const addExpenseToBudget = async (data) => {
  try {
    await dbConnect();
    const budget = await Budget.findById(data.budgetId);
    if (!budget) {
      return "Budget not found";
    }
    budget.used += data.amount;
    await budget.save();
    const newExpense = await Expenses.create(data);
    return JSON.parse(JSON.stringify(newExpense));
  } catch (error) {
    console.error("Error adding expense to budget:", error);
    return "Error adding expense to budget";
  }
};

export const getExpensesByBudget = async (budgetId) => {
  try {
    await dbConnect();
    const ExpensesList = await Expenses.find({ budgetId }).sort({
      createdAt: -1,
    });
    return JSON.parse(JSON.stringify(ExpensesList));
  } catch (error) {
    console.error("Error fetching Expenses by budget:", error);
    return "Error fetching Expenses by budget";
  }
};

export const deleteExpense = async (expenseId) => {
  try {
    await dbConnect();
    const expense = await Expenses.findByIdAndDelete(expenseId);
    if (!expense) {
      return "Expense not found";
    }
    // Optionally, update the budget used amount
    const budget = await Budget.findById(expense.budgetId);
    if (budget) {
      budget.used -= expense.amount;
      await budget.save();
    }
    return "Expense deleted successfully";
  } catch (error) {
    console.error("Error deleting expense:", error);
    return "Error deleting expense";
  }
};

export const getAllExpensesByUser = async (userId) => {
  try {
    // Step 1: Get all budget IDs for the user
    const budgets = await Budget.find({ userId }).select("_id");
    const budgetIds = budgets.map((b) => b._id);

    const expenses = await Expenses.find({ budgetId: { $in: budgetIds } })
      .populate("budgetId", "name")
      .sort({ createdAt: -1 });

    return JSON.parse(JSON.stringify(expenses));
  } catch (err) {
    console.error("Error fetching expenses:", err);
    throw err;
  }
};


export const getDashboardData = async (userId) => {
  try {
    const budgets = await Budget.find({ userId });
    const totalBudget = budgets.reduce((acc, budget) => acc + budget.amount, 0);
    const totalUsed = budgets.reduce((acc, budget) => acc + budget.used, 0);
    return JSON.parse(JSON.stringify({ totalBudget, totalUsed ,BudgetCount: budgets.length,budgets: budgets.slice(0, 3) }));
  } catch (error) {
    console.error("Error fetching dashboard data:", error);
    throw error;
  }
};