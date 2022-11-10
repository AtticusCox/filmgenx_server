const router = require("express").Router();
const helpers = require("../utils/helper");
const fs = require("fs");

router.get("/movies", (req, res) => {
  const movies = helpers.readTempMovie();
  res.status(200).json(movies);
});

router.get("/random", (req, res) => {
  //   const random = helpers.getRandomID();
  const movies = helpers.readTempMovie();
  const randomNumber = Math.floor(Math.random() * movies.length);
  res.status(200).json(movies[randomNumber]);
});

// router.get("/watchlist", (req, res) => {
//   const movies = helpers.readWatchList();
//   res.status(200).json(movies);
// });

// router.post("/watchlist", (req, res) => {
//   const newMovie = req.body;
//   const movies = helpers.readWatchList();
//   console.log(req.body);
//   movies.push(newMovie);

//   fs.writeFileSync("./data/watchList.json", JSON.stringify(movies));
//   res.status(201).json(newMovie);
// });

router.post("/movies/:id");

const fileContent = fs.readFileSync("./data/tempmovie.json");

const array = JSON.parse(fileContent);
module.exports = router;
