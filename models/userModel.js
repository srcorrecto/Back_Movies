const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "El nombre es obligatorio"],
  },
  surname: {
    type: String,
    required: [true, "El apellido es obligatorio"],
  },
  email: {
    type: String,
    required: [true, "El email es obligatorio"],
    unique: true,
  },

  password: {
    type: String,
    required: [true, "La contraseña es obligatoria"],
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  favorites: [
    {
      type: Schema.Types.ObjectId,
      ref: "Movie", // ⬅️ El nombre exacto del modelo (no de la colección)
    },
  ],
});

const ModelUser = mongoose.model("User", userSchema, "User");

module.exports = ModelUser;
