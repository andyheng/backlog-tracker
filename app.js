//Main Dependencies

const express     = require("express"),
      app         = express(),
      bodyParser  = require("body-parser"),
      mongoose    = require("mongoose"),
      methodOverride = require("method-override"),
      promise     = require("promise");

//Passport Dependencies

const passport        = require("passport"),
      LocalStrategy   = require("passport-local"),
      passportLocalMongoose = require("passport-local-mongoose");

//Model Dependencies
const Game = require("./models/game"),
      User = require("./models/user");

const gameRoutes = require("./routes/games"),
      userRoutes = require("./routes/users"),
      authRoutes = require("./routes/authentication")


//Fix mongoose promise Error
mongoose.Promise = global.Promise;

//Connect to MongoDB
mongoose.connect("mongodb://localhost/tracker");

//app.use() and app.set() of Dependencies

app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

//Passport

app.use(require("express-session")({
  secret: "A super secret string",
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

////////////////////////
////////Routes/////////
//////////////////////

//Pass req.user to all routes as middleware
app.use(function(req, res, next) {
  res.locals.currentUser = req.user;
  next();
});

//Use Routes
app.use("/games", gameRoutes);
app.use(userRoutes);
app.use(authRoutes);

//Main page
app.get("/", function(req, res) {
  res.redirect("/games");
})

//Middleware
function isLoggedIn(req, res, next) {
  if (!req.isAuthenticated) {
    return res.redirect("/login");
  }
  return next();
};

//Listen on port
app.listen(process.env.PORT || 4000, function() {
  console.log("Server started without problems");
})
