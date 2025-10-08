const express = require("express");
const router = express.Router();

const {allMovies, getById, getByName, deleteMovie, addMovie, editMovie} = require("../controllers/moviesController")

router.get('/movies', allMovies)
router.get('/movies/:id', getById)
router.get('/movies/:idMovies/name', getByName)
router.post('/movies', addMovie)
router.delete('/movies/:id', deleteMovie)
router.put('/movies/:id', editMovie);

module.exports = router;