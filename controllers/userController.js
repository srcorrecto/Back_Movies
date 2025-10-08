const ModelUser = require("../models/userModel");

const allUsers = async (req, res) => {
  try {
    const users = await ModelUser.find();
    res.status(200).send(users);
  } catch (error) {
    res.status(400).send({ status: "falla", error: error.message });
  }
};

const userId = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await ModelUser.findById(id);

    if (!user) {
      return res.status(400).send("Usuario no encontrado");
    }
    res.status(201).send(user);
  } catch (error) {
    res.status(500).json({ status: "falla", error: error.message });
  }
};

const addUser = async (req, res) => {
  try {
    const user = await ModelUser.create(req.body);
    res.status(200).json({ message: "Usuario creado", user });
  } catch (error) {
    res.status(400).json({ error: error.message, details: error.errors });
  }
};

const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await ModelUser.findByIdAndDelete(id);
    if (!user) {
      return res.status(400).send("Usuario no encontrado");
    }
    res.status(200).send("usuario eliminado");
  } catch (error) {
    res.status(500).json({ status: "falla", error: error.message });
  }
};

const editUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = req.body;
    const newUser = await ModelUser.findByIdAndUpdate(id, user, {
      new: true,
    });

    if (!newUser) {
      return res.status(400).send("Usuario no encontrado");
    }
    res.status(200).send(newUser);
  } catch (error) {
    res.status(404).send({error: error.message})
  }
};

module.exports = { allUsers, addUser, userId, deleteUser, editUser };
