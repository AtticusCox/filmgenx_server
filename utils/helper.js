const fs = require("fs");

const readTempMovie = () => {
  const fileContent = fs.readFileSync("./data/tempmovie.json");
  return JSON.parse(fileContent);
};

const getRandomID = () => {
  const fileContent = fs.readFileSync("./data/tempmovie.json");
  fileContent[Math.floor(Math.random() * fileContent.length)];
  console.log(getRandomID);
  getRandomID();
};

module.exports = {
  getRandomID,
  readTempMovie,
};
