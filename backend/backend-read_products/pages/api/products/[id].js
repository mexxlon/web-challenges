import dbConnect from "../../../db/connect";
import Product from "@/db/models/Product";
import mongoose from "mongoose";

export default async function handler(request, response) {
  await dbConnect();

  const { id } = request.query;

  if (request.method === "GET") {
    try {
      if (!id || !mongoose.Types.ObjectId.isValid(id)) {
        return response.status(400).json({ message: "Invalid product ID" });
      }

      const product = await Product.findById(id).populate("reviews");

      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }

      return response.status(200).json(product);
    } catch (error) {
      console.error("Error fetching product:", error.message);
      return response.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    return response.status(405).json({ message: "Method not allowed" });
  }
}
