import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new Schema({
  fullname: { type: String, required: true },
  Email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  order: [{type: Schema.Types.ObjectId, ref: 'Order'}]
});

export default  UserSchema;
