import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  rut: { type: String, required: true },
    addrees: { type: String, required: true },
    phone: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    status: { type: String, required: true, default: "pending Payment" },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    products: { type: Array, default: [] },
    deliveryMethod: { type: String, required: true, default: "Retiro" },
    total: { type: Number, required: true ,  default:0 },
    payment: { type: Boolean, required: true, default: false },
  },{ timestamps: true});


 
const modelName = 'Orders';

const modelExists = mongoose.modelNames().includes(modelName);

export default modelExists
  ? mongoose.model(modelName) 
  : mongoose.model(modelName, orderSchema);