import { NextResponse } from "next/server";
import { connectionSrt } from "../../../../lib/db";
import mongoose from "mongoose";
import { Product } from "../../../../lib/model/product";

// PUT API
export async function PUT(request, content) {
  const productId = content.params.productId;
  console.log(productId);

  const filter = { _id: productId };
  console.log(filter);

  const payload = await request.json();
  console.log(payload);

  await mongoose.connect(connectionSrt);
  const result = await Product.findOneAndUpdate(filter, payload);

  return NextResponse.json({ result, success: true });
}

export async function GET(request, content) {
  const productId = content.params.productId;

  const record = { _id: productId };

  await mongoose.connect(connectionSrt);

  const result = await Product.findById(record);

  return NextResponse.json({ result, success: true });
}
