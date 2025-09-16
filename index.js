const express = require("express");
// 👇 Middleware para que funcione req.body

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const movies = [
  {
    id: 1,
    titulo: "Fight Club",
    director: "David Fincher",
    actors: "Brad Pitt, Edward Norton, Helena Bonham Carter",
    year: 1999,
    description:
      "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
    category: "Drama",
    rating: 8.8,
  },
  {
    id: 2,
    titulo: "The Dark Knight",
    director: "Christopher Nolan",
    actors: "Christian Bale, Heath Ledger, Aaron Eckhart",
    year: 2008,
    description:
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    category: "Action",
    rating: 9,
  },
  {
    id: 3,
    titulo: "Pulp Fiction",
    director: "Quentin Tarantino",
    actors: "Samuel L. Jackson, Uma Thurman, Bruce Willis",
    year: 1994,
    description:
      "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    category: "Crime",
    rating: 8.9,
  },
  {
    id: 4,
    titulo: "Schindler's List",
    director: "Steven Spielberg",
    actors: "Liam Neeson, Ralph Fiennes, Ben Kingsley",
    year: 1993,
    description:
      "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
    category: "Biography",
    rating: 8.9,
  },
  {
    id: 5,
    titulo: "The Lord of theRing: The Return of the King",
    director: "Peter Jackson",
    actors: "Elijah Wood, Viggo Mortensen, Ian McKellen",
    year: 2003,
    description:
      "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
    category: "Adventure",
    rating: 8.9,
  },
  {
    id: 6,
    titulo: "The Social Network",
    director: "David Fincher",
    actors: "Jesse Eisenberg, Andrew Garfield, Justin Timberlake",
    year: 2010,
    description:
      "Harvard student Mark Zuckerberg creates the social networking site that would become known as Facebook, but is later sued by two brothers who claimed he stole their idea, and the co-founder who was later squeezed out of the business.",
    category: "Biography",
    rating: 7.7,
  },
];

app.get("/", (req, res) => {
  res.send(movies);
});

app.get("/movies/:id/", (req, res) => {
  const idMovie = req.params.id;
  const movie = movies.find((p) => p.id === parseInt(idMovie));
  !movie
    ? res.status(404).send("no se ha encontrado película")
    : res.send(movie);
});

app.get("/movies/:id/titulo", (req, res) => {
  const idMovie = req.params.id;

  const movie = movies.find((p) => p.id === parseInt(idMovie));
  !movie
    ? res.status(404).send("no se ha encontrado película")
    : res.send(movie.titulo);
});

app.post("/movies", (req, res) => {
  const { titulo, director, actors, year, description, category, rating } =
    req.body;
  if (
    !titulo ||
    !director ||
    !actors ||
    !year ||
    !description ||
    !category ||
    !rating
  ) {
    return res.status(404).send("no se ha encontrado película");
  }

  const newMovie = {
    id: movies.length + 1,
    titulo,
    director,
    actors,
    year,
    description,
    category,
    rating,
  };
  movies.push(newMovie);
  res.send(newMovie);
});

app.delete("/movies/:id", (req, res) => {
  const idDelete = req.params.id;
  const movieDelete = movies.filter((p) => p.id !== parseInt(idDelete));

  movies.splice(movieDelete, 1);
  res.send(movies);
});

app.put("/movies/:id", (req, res) => {
  const pelicula = req.params.id;
  const index = movies.findIndex((p) => p.id === parseInt(pelicula));

  movies[index] = {
    id: movies[index].id,
    ...req.body,
  };
  res.send(movies);
});

app.listen(3000, () => {
  console.log("corriendo en localhost");
});
