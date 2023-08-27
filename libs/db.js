import orderSchema from "@/models/orders";
import productSchema from "@/models/products";
import UserSchema from "@/models/users";
import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    const conn = mongoose.createConnection(process.env.MONGO_URI);
    const user =  conn.model("User", UserSchema);
    const products = conn.model("Products", productSchema)
    const order = conn.model('Orders', orderSchema)
    console.log("conectado a la base de datos");

    return {user,products, order}
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default dbConnect;
