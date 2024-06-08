import { Budget } from "@/models/Budget";
import { User } from "@/models/User";
import { dbConnect } from "@/utils/dbConnect";
import { NextResponse } from "next/server";


export const POST = async (req) => {
  try {
    const { userId, name } = await req.json();

    if (!userId || !name) {
      return NextResponse.json(
        {
          message: "User ID and budget name are required",
          success: false,
        },
        { status: 400 }
      );
    }

    await dbConnect();

    const newBudget = {
      userId,
      name,
    };

    const createdBudget = await Budget.create(newBudget);
    if (!createdBudget) {
      return NextResponse.json(
        {
          message: "Error creating budget",
          success: false,
        },
        { status: 500 }
      );
    }

    // Populate the user to get their list of Budget
    const user = await User.findById(userId).populate('Budget');

    // Push the new budget to the user's list of Budget
    user.Budget.push(createdBudget);
    await user.save();

    return NextResponse.json(
      {
        message: "Budget created successfully",
        success: true,
        budget: createdBudget,
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
