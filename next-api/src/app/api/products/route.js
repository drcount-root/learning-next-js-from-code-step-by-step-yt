import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { connectionSrt } from "../../../lib/db";
import { Product } from "../../../lib/model/product";

export async function GET() {
  let data = [];
  try {
    await mongoose.connect(connectionSrt);
    data = await Product.find();
    console.log(data);
  } catch (error) {
    data = { success: false };
  }

  return NextResponse.json({ result: data, success: true });
}
