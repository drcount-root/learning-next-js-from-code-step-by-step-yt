import mongoose, { ConnectionStates } from "mongoose";
import { NextResponse } from "next/server";
import { connectionSrt } from "../../../lib/db";
import { Product } from "../../../lib/model/product";

// GET Products

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

// POST

export async function POST(request) {
  const payload = await request.json();
  await mongoose.connect(connectionSrt);
  let product = new Product(payload);

  const newProduct = await product.save();
  return NextResponse.json({ result: newProduct, status: true });
}
