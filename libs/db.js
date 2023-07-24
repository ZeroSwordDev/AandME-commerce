import UserSchema from "@/models/users";
import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    const conn = mongoose.createConnection(process.env.MONGO_URI);
    const user =  conn.model("User", UserSchema);
    console.log("conectado a la base de datos");

    return {user}
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default dbConnect;
