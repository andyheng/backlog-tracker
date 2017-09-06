const express = require("express"),
      router  = express.Router(),
      promise = require("promise");

const Game = require("../models/game"),
      User = require("../models/user");

//Routes

router.get("/", function(req, res) {
  Game.find({})
    .then(function(allGamesData) {
    res.render("index", {games: allGamesData})
  })
    .catch((err) => {
      return err;
    })
});

// router.get("/", function(req, res) {
//   Game.find({}, function(err, allGamesData) {
//     if (err) {return err};
//     res.render("index", {games: allGamesData});
//   });
// });

//Show new form
router.get("/new", isLoggedIn, function(req, res) {
  res.render("./games/new");
});

//Create new
router.post("/", isLoggedIn, function(req, res) {
  var submittedGame = req.body.game;
  let submitted = {
    title: req.body.game.title,
    platform: req.body.game.platform,
    description: req.body.game.description,
    completed: req.body.game.completed,
    users: req.body.game.users,
  }

  if (req.body.game.image) {
    submitted.image = req.body.game.image;
  }

  if (req.body.game.nowPlaying) {
    submitted.nowPlaying = req.body.game.nowPlaying;
  }

  User.findById(req.user._id, function(err, foundUser) {
    if (err) {return err};
    Game.create(submitted, function(err, newGame) {
      if (err) {return err};
      foundUser.gamesCollection.push(newGame);
      foundUser.save();
      newGame.users.push(foundUser);
      newGame.save();
      res.redirect("/users/" + req.user.username);
    });
  });
});

//Show edit
router.get("/:id/edit", isLoggedIn, function(req, res) {
  Game.findById(req.params.id, function(err, foundGame) {
    if (err) {return err};
    res.render("./games/edit", {game: foundGame});
  });
});

//Edit
router.put("/:id", isLoggedIn, function(req, res) {
  //var game = req.body.game;
  let submitted = {
    title: req.body.game.title,
    platform: req.body.game.platform,
    description: req.body.game.description,
    completed: req.body.game.completed,
    users: req.body.game.users,
    nowPlaying: req.body.game.nowPlaying
  }

  if (req.body.game.image) {
    submitted.image = req.body.game.image;
  }

  if (!req.body.game.nowPlaying) {
    submitted.nowPlaying = false;
  }

  Game.findByIdAndUpdate(req.params.id, submitted, function(err, updatedGame) {
    if (err) {return err};
    res.redirect("/users/" + req.user.username);
  });
});

//Delete
router.delete("/:id", isLoggedIn, function(req, res) {
  Game.findByIdAndRemove(req.params.id, function(err, deletedGame) {
    if (err) {return err};
    console.log("Deleted " + deletedGame.title);
    res.redirect("/users/" + req.user.username);
  });
});

//Middleware
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) { //passport function that checks if user is logged in
        return next();
    }
    res.redirect("/login");
}

module.exports = router;
