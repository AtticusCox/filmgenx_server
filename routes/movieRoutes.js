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

const fileContent = fs.readFileSync("./data/tempmovie.json");

const array = JSON.parse(fileContent);
module.exports = router;
