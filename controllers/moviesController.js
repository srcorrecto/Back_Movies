const ModelMovie = require("../models/moviesModel");

const getById = async (req, res) => {
  try {
    const id = req.params.id;
    const movie = await ModelMovie.findById(id);

    if (!movie) {
      return res.status(404).send( "Película no encontrada" );
    }

    res.status(200).send(movie);
  } catch (error) {
    res.status(500).send({ status: "falla", error: error.message });
  }
};

const getByName = (req, res) => {
  //const idMovies = req.params.idMovies;
  //const movie = moviesModel.find(p => p.id === parseInt(idMovies) );
  //res.status(200).send(movie.titulo);
};





const deleteMovie = async (req, res) => {

  try {
    const id = req.params.id;
    const movie =  await ModelMovie.findByIdAndDelete(id);

    if (!movie) {
      return res.status(404).json({ message: "Película no encontrada" });
    }
    res.status(200).send({ ModelMovie, status:'peli borrada'});
  } catch (error) {
    res.status(500).send({ status: "falla", error: error.message });
  }
};

const addMovie = async (req, res) => {
  try {
    const movieData = req.body;
    await ModelMovie.create(movieData);
    res.status(200).send("La peli se ha creado correctamente");
  } catch (error) {
    res.status(500).send({ status: "falla", error: error.status });
  }
};

const editMovie = async (req, res) => {
  try {
    const id = req.params.id;
    const movieData = req.body;

    const movie = await ModelMovie.findByIdAndUpdate(id, movieData, {
      new: true, // ✅ devuelve el documento actualizado
    });

    if (!movie) {
      return res.status(404).json({ message: "Película no encontrada" });
    }

    res.status(200).json({ message: "Película actualizada", movie });
    
  } catch (error) {
    res.status(500).json({ status: "falla", error: error.message });
  }
};



const allMovies = async (req, res) => {
  try {
    const movies = await ModelMovie.find();
    res.status(200).send(movies);
  } catch (error) {
    res.status(500).send({ status: "falla", error: error.message });
  }
};

module.exports = { allMovies, getById, getByName, deleteMovie, addMovie, editMovie };
