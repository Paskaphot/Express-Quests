// installation d'Express
const express = require("express");
const database = require("./database");
const app = express();

// appel du middleware express.json pour requetes POST
app.use(express.json());

// Gestion de variables d'environnement
require("dotenv").config();
const port = process.env.APP_PORT ?? 50002;

//---------- ROUTES ----------------//

// route 1 / GET Homepage
const welcome = (req, res) => {
  res.send("Welcome to the Express Quest");
};
app.get("/", welcome);

///* routes MOVIE training : */
const movieHandlers = require("./movieHandlers");
// route 2 GET List
app.get("/api/movies", movieHandlers.getMovies);
// route 3 GET Detail
app.get("/api/movies/:id", movieHandlers.getMovieById);
// route 4 POST New item detail
app.post("/api/movies", movieHandlers.postMovie);
// route 5 PUT Change detail
app.put("/api/movies/:id", movieHandlers.updateMovie);
// route 6 DELETE Detail
app.delete("/api/movies/:id", movieHandlers.deleteMovie);

///* routes USER challenge : */
const userHandlers = require("./userHandlers");
// route 2bis GET List
app.get("/api/users", userHandlers.getUsers);
// route 3bis GET Details
app.get("/api/users/:id", userHandlers.getUserById);
// route 4bis POST new detail
app.post("/api/users", userHandlers.postUser);
// route 5 PUT change detail
app.put("/api/users/:id", userHandlers.updateUser);
//route 6 DELETE Detail
app.delete("/api/users/:id", userHandlers.deleteUser);


//---------- fin ROUTES ----------------//

//connexion au serveur
app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});
