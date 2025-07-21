import connectDB from "@/lib/db.js";
import Budget from "@/models/budget";
export const GET = async (req) => {
  try {
    await connectDB();
    const body = req.json();
    const expenseList = await Budget.find({ userId: body?.id });
    return new Response(JSON.stringify(expenseList), { status: 200 });
  } catch (error) {
    return new Response("Failed to get budgets", { status: 500 });
  }
};

export const POST = async (req) => {
  try {
    await connectDB();
    const body = await req.json();
    const newBudget = await Budget.create(body);
    console.log("yha tk cALLING", body);
    return new Response(
      JSON.stringify({ newBudget, message: "Budget Created Successfully" }),
      { status: 201 }
    );
  } catch (error) {
    return new Response("Failed to create budget", { status: 500 });
  }
};

export const DELETE = async (req) => {
  try {
    await connectDB();
    const body = await req.json();
    const deletedBudget = await Budget.findByIdAndDelete(body?.id);
    return new Response(JSON.stringify(deletedBudget), { status: 200 });
  } catch (error) {
    return new Response("Failed to delete budget", { status: 500 });
  }
};

export const PUT = async (req) => {
  try {
    await connectDB();
    const body = await req.json();
    const updatedBudget = await Budget.findByIdAndUpdate(body?.id, body, {
      new: true,
    });
    return new Response(JSON.stringify(updatedBudget), { status: 200 });
  } catch (error) {
    return new Response("Failed to update budget", { status: 500 });
  }
};
