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

const readWatchList = () => {
  const fileContent = fs.readFileSync("./data/watchList.json");
  return JSON.parse(fileContent);
};

const writeWatchList = (myData) => {
  fs.writeFileSync("./data/watchList.json", JSON.stringify(myData));
};

const readReviewList = () => {
  const fileContent = fs.readFileSync("./data/reviews.json");
  return JSON.parse(fileContent);
};

module.exports = {
  getRandomID,
  readTempMovie,
  readWatchList,
  writeWatchList,
  readReviewList,
};
