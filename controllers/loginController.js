const ModelUser = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
  try {
    const { name, surname, email, password, role } = req.body;

    const newUser = {
      name,
      surname,
      email,
      password: await bcrypt.hash(password, 10),
      role,
    };

    await ModelUser.create(newUser);
    res.status(200).send("usuario creado");
  } catch (error) {
    if (error.code === 11000) {
      return res.status(500).send("el email ya esta en uso");
    }
    return res.status(500).send({ status: "Fallo", error: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await ModelUser.findOne({ email });
    if (!user) {
      return res.status(404).send("Usuario no encontrado");
    }

    const validatePassword = await bcrypt.compare(password, user.password);
    if (!validatePassword) {
      return res.status(404).send("Usuario no encontrado");
    }

    const payload = {
      id: user._id,
      name: user.name,
      role: user.role,
    };

    const token = await jwt.sign(payload, process.env.SECRET_TOKEN, {
      expiresIn: "20min",
    });

     const tokenRefresh = await jwt.sign(payload, process.env.SECRET_TOKEN_REFRESH, {
      expiresIn: "90min",
    });

    res.status(200).send({user, token, tokenRefresh });
  } catch (error) {
    return res.status(500).send({ status: "Fallo", error: error.message });
  }
};

module.exports = { signup, login };
