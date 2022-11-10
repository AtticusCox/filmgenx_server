const router = require("express").Router();
const helpers = require("../utils/helper");
const fs = require("fs");
const crypto = require("crypto");

router.get("/reviews/:id", (req, res) => {
  const reviews = helpers
    .readReviewList()
    .filter((review) => review.videoId === req.params.id);
  res.status(200).json(reviews);
});

router.post("/reviews/new", (req, res) => {
  const { content, rating, videoId } = req.body;
  const newReview = {
    id: crypto.randomBytes(16).toString("hex"),
    videoId: videoId,
    name: "Atticus Cox",
    content: content,
    rating: rating,
    timestamp: Date.now(),
  };
  const reviews = helpers.readReviewList();
  console.log(req.body);
  reviews.push(newReview);

  fs.writeFileSync("./data/reviews.json", JSON.stringify(reviews));
  res.status(201).json(newReview);
});

// router.get("/review:id", (req, res) => {
//     const reviews = helpers.readReviewList();
//     const selectedReviews =
// })
const fileContent = fs.readFileSync("./data/reviews.json");
const array = JSON.parse(fileContent);
module.exports = router;
