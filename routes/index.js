var express = require("express");
var router = express.Router();
const passport = require("passport");
require("../authenticate");

router.get("/", (req, res) => {
  res.send('<a href="/auth/google">Authenticate with Google</a>');
});

router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

// router.get(
//   "/google/callback",
//   passport.authenticate("google", {
//     successRedirect: "/protected",
//     failureRedirect: "/auth/google/failure",
//   })
// );

router.get("/protected", (req, res) => {
  res.send(`Hello ${req.user.displayName}`);
});

router.get("/auth/google/failure", (req, res) => {
  res.send("Failed to authenticate..");
});

module.exports = router;
