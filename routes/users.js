const express = require("express"),
      router  = express.Router(),
      promise = require("promise")

const User = require("../models/user");
//User Profile Routes

router.get("/users/:username", function(req, res) {
  var user = req.params.username;
  User.findOne({username: user}).populate("gamesCollection").exec(function(err, foundUser) {
    if (err) {return err};
    res.render("./user/show", {user: foundUser});
  });
});

module.exports = router;
