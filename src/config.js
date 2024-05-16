const mongoose = require("mongoose");

async function connectToDatabase() {
  try {
    await mongoose.connect("mongodb://localhost:27017/loginRegistro");
    console.log("Conexión con base de datos exitosa");
  } catch (error) {
    console.log("Error en la conexión:", error);
  }
}


// Llama a la función async para usar await
connectToDatabase();


const LoginSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});


  const collection = new mongoose.model("usuarios", LoginSchema);


  module.exports = collection;


