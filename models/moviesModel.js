const { Schema, default: mongoose } = require("mongoose");


const movieSchema = new Schema({
  titulo: {
    type: String,
    required: [true, 'el título es requerido']
  },
  director: {
    type: String,
  },
  actors: {
    type: String,
  },
  year: {
    type: Number,
  },
  category: {
    type: String,
  },
  rating: {
    type: Number,
  },
  createAt: {
    type: Date, 
    default: Date.now()
  }
});

const ModelMovie = mongoose.model('movie', movieSchema, 'movie')

module.exports = ModelMovie;

/*

const moviesModel = [
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


module.exports = moviesModel;
*/
