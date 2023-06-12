const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const GOOGLE_CLIENT_ID =  process.env.GOOGLE_CLIENT_ID //"your clientID"
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET //"your clientSecret";

passport.use(
  new GoogleStrategy(
    {
      clientID:GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:5000/google/callback",
      passReqToCallback: true,
    },
    function (accessToken, refreshToken, profile, done) {
      console.log("🚀 ~ file: authenticate.js:19 ~ profile:", profile);
      //   User.findOrCreate({ googleId: profile.id }, function (err, user) {
      //     return done(err, user);
      //   });
      return done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser((user, done) => done(null, user));
