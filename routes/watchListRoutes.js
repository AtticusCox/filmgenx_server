const router = require("express").Router();
const helpers = require("../utils/helper");
const fs = require("fs");

router.get("/watchlist", (req, res) => {
  const movies = helpers.readWatchList();
  res.status(200).json(movies);
});

router.post("/watchlist", (req, res) => {
  const newMovie = req.body;
  const movies = helpers.readWatchList();
  console.log(req.body);
  movies.push(newMovie);

  fs.writeFileSync("./data/watchList.json", JSON.stringify(movies));
  res.status(201).json(newMovie);
});

// router.delete("/watchlist/:id", (req, res) => {
//   const movies = helpers
//     .readWatchList()
//     .filter((movie) => movie.id === req.params.id);
//   res.status(200).json();
// });

const fileContent = fs.readFileSync("./data/watchList.json");
const array = JSON.parse(fileContent);
module.exports = router;
