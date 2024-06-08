import { Budget } from "@/models/Budget";
import { Expense } from "@/models/Expense";
import { dbConnect } from "@/utils/dbConnect";
import { NextResponse } from "next/server";


export const POST = async (req) => {
  try {
    const { budgetId, category, name, amount } = await req.json();

    if (!budgetId || !category || !name || !amount) {
      return NextResponse.json(
        {
          message: "Please provide all required fields",
          success: false,
        },
        { status: 400 }
      );
    }

    await dbConnect();

    const newExpense = {
      budgetId,
      category,
      name,
      amount,
    };

    const createdExpense = await Expense.create(newExpense);
    if (!createdExpense) {
      return NextResponse.json(
        {
          message: "Error creating expense",
          success: false,
        },
        { status: 500 }
      );
    }

    // Populate the expenses array of the corresponding budget
    const populatedBudget = await Budget.findById(budgetId).populate('expenses');

    // Push the new expense to the populated expenses array
    populatedBudget.expenses.push(createdExpense);

    // Save the updated budget
    await populatedBudget.save();

    return NextResponse.json(
      {
        message: "Expense created successfully",
        success: true,
        expense: createdExpense,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message,
        success: false,
      },
      { status: 500 }
    );
  }
};
