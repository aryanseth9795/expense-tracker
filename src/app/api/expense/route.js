import budget from "@/models/budget";


export const POST = async (req) => {
    try {
        await connectDB();
        const body = await req.json();
        const newExpense = await Expense.create(body);
        return new Response(JSON.stringify(newExpense), { status: 201 });
    } catch (error) {
        return new Response("Failed to create expense", { status: 500 });
    }
};

export const GET = async (req) => {
    try {
        await connectDB();
        const body = req.json();
        const expenseList = await Expense.find({ budgetId: body?.id }).sort({createdAt:-1}).limit(10);
        return new Response(JSON.stringify(expenseList), { status: 200 });
    } catch (error) {
        return new Response("Failed to get expenses", { status: 500 });
    }
};