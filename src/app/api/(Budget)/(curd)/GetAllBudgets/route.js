import { Budget } from "@/models/Budget";
import { dbConnect } from "@/utils/dbConnect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const userId = req.nextUrl.searchParams.get("userId");

  if (!userId) {
    return NextResponse.json(
      {
        message: "User ID is required",
        success: false,
      },
      { status: 400 }
    );
  }

  try {
    await dbConnect();

    const budgets = await Budget.find({ userId });
    return NextResponse.json(
      {
        success: true,
        data: budgets,
      },
      { status: 200 }
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
