const mongoose = require("mongoose");

const dbUrl = process.env.MONGO_URI;

const connectToDataBase = async () => {
  try {
    await mongoose.connect(dbUrl, {
    });
    console.log("Esta todo correcto");
  } catch (error) {
    console.log("no se carga");
  }
};

module.exports = connectToDataBase;

