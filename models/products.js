import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  desc: { type: String, required: true },
  price: { type: String, required: true },
  options: [{ type: mongoose.Schema.Types.ObjectId, ref: "Options" }],
  image: { type: String, required: true },
  amount: { type: Array },
  size: { type: Array },
  uptime: [{ type: String, required: true }],
});

const modelName = "Products";

export default mongoose.model(modelName, productSchema);
