let express = require("express");
var router = express.Router();
var simpleMath = require("../helpers/simple-math");

router.get("/", function(req, res, next) {
  res.send("you hit the base order route");
});

router.post("/sum", function(req, res) {
  const responseMessage = `The sum of ${
    req.body.inputNumbers
  } is ${simpleMath.sum(...req.body.inputNumbers)}`;

  console.log(responseMessage);

  res.send(responseMessage);
});

router.post("/product", function(req, res) {
  const responseMessage = `The sum of ${
    req.body.inputNumbers
  } is ${simpleMath.product(...req.body.inputNumbers)}`;

  console.log(responseMessage);

  res.send(responseMessage);
});

module.exports = router;
