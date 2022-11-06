const movieRoutes = require("./routes/movieRoutes");
const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());

require("dotenv").config();

const port = process.env.PORT || 8081;
const API_KEY = process.env.API_KEY;

app.use(express.json());

// app.use("/");
// app.get(`https://imdb-api.com/en/API/Title/${API_KEY}/tt0100502`);
// console.log(API_KEY);

app.use("/", movieRoutes);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
