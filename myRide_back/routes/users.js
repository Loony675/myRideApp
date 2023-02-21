var express = require("express");
var router = express.Router();
const User = require("../models/users");

router.post("/test", function (req, res) {
  User.findOne({ email: req.body.email }).then((data) => {
    if (data) {
      res.json({ result: false, error: "User already exists" });
    } else {
      const newUser = new User({
        email: req.body.email,
        password: req.body.password,
      });
      newUser.save().then((newUser) => {
        User.find().then((data) => {
          res.json({ result: true, email: newUser.email });
        });
      });
    }
  });
});

module.exports = router;
