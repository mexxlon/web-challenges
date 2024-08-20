import dbConnect from "../../../db/connect";
import Product from "../../../db/models/Product";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    try {
      const products = await Product.find();
      return response.status(200).json(products); // 200 - OK
    } catch (error) {
      console.error("Failed to load products:", error);
      return response.status(500).json({ error: "Failed to load products" }); // 500 - Internal Server Error
    }
  }

  if (request.method === "POST") {
    try {
      const productData = request.body;
      const newProduct = await Product.create(productData);
      return response.status(201).json({ status: "Product created." }); // 201 - Created
    } catch (error) {
      console.error("Failed to create product:", error);
      return response.status(400).json({ error: error.message }); // 400 - Bad Request
    }
  }
}
