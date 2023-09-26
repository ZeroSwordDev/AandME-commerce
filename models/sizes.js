import mongoose from 'mongoose';

const sizesSchema = new mongoose.Schema({
  amount: { type: String, required: true, unique: true },
  size: { type: Number, required: true, default: 0 },
});

const modelName = 'Sizes';

// Verificar si el modelo ya existe en los modelos de Mongoose
const modelExists = mongoose.modelNames().includes(modelName);

export default modelExists
  ? mongoose.model(modelName) // Si existe, obtener el modelo existente
  : mongoose.model(modelName, sizesSchema);