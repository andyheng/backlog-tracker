const express  = require("express"),
      passport = require("passport"),
      router   = express.Router({mergeParams: true}),
      promise  = require("promise");

const User = require("../models/user");

//Authentication

router.get("/register", function(req, res) {
  res.render("./auth/register");
})

router.post("/register", function(req, res) {
  User.register(new User({username: req.body.username}), req.body.password, function(err, newUser) {
    if (err) {return err};
    passport.authenticate("local")(req, res, function() {
      res.redirect("/");
    })
  });
});

router.get("/login", function(req, res) {
  res.render("./auth/login");
});

router.post("/login", passport.authenticate("local", {
  failureRedirect: "/login"
}), function (req, res) {
  console.log(req.user.username + " logged in");
  res.redirect("/users/" + req.user.username);
})

// router.post("/login", passport.authenticate("local", {
//   successRedirect: "/user/",
//   failureRedirect: "/login"
// }), function(user) {
//   console.log(user)
// });

router.get("/logout", function(req, res) {
  req.logout();
  console.log("Logged out");
  res.redirect("/");
});

module.exports = router;
