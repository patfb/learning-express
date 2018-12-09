let express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
  res.send("you hit the base order route");
});

router.post("/", function(req, res) {
  res.send("Got a POST request");
});

module.exports = router;
