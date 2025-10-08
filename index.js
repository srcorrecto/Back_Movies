const express = require("express");
require("dotenv").config();
const app = express();
const moviesRouter = require("./routes/moviesRoute");
const usersRouter = require('./routes/usersRoute')
const loginRoutes = require('./routes/loginRoute')
const connectToDataBase = require('./db/db')

app.use(express.json());

app.use('/api', usersRouter);
app.use("/api", moviesRouter);
app.use("/api", loginRoutes);



connectToDataBase();


app.listen(3000, () => {
  console.log("corriendo en localhost");
});
