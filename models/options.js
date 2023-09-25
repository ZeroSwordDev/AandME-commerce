import mongoose from "mongoose";

const optionSchema = new mongoose.Schema({
  name: { type: String, required: true ,  unique: true},
  values: { type: Array, required: true , default:[]},
  });



  const modelName = 'Options';

  const modelExists = mongoose.modelNames().includes(modelName);
  
  export default modelExists
    ? mongoose.model(modelName) 
    : mongoose.model(modelName, optionSchema);