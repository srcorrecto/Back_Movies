const express = require("express");
const router = express.Router();
const {allUsers , addUser, userId, deleteUser, editUser} = require("../controllers/userController");
const { verifyToken } = require("../middlewares/auth");

router.get('/user', allUsers )
router.get('/user/myPorfile', verifyToken, userId )
router.put('/user/:id', editUser )
router.delete('/user/:id', deleteUser )
router.post('/user', addUser)


module.exports = router;