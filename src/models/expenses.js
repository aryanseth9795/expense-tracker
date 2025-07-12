
import  mongoose from "mongoose";

const expenseSchema = mongoose.Schema({
        name: {
            type: String,
            required: true,
        },
        amount: {
            type: Number,
            required: true,
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        budgetId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Budget",
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
    });
    
    export default   mongoose.models.Expense ||   mongoose.model("Expense", expenseSchema);