import mongoose from "mongoose";

const uptimeSchema = new mongoose.Schema({
  name: { type: String, required: true ,  unique: true},
  agg: { type: Number, required: true , default:0},
  });

  const modelName = 'Uptimes';

  const modelExists = mongoose.modelNames().includes(modelName);
  
  export default modelExists
    ? mongoose.model(modelName) 
    : mongoose.model(modelName, uptimeSchema);