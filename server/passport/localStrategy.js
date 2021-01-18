const User = require("../user/index");
const LocalStrategy = require("passport-local").Strategy;

const strategy = new LocalStrategy(
    {
        usernameField: "username"
    },
    function (username, password, done) {
        User.findOne({ "local.username":username }, (err, userMatch) => {
            if (err) {
                return done(err);
            }
            if (!userMatch) {
                return done(null, false, {message: "Incorrect username"});
            }
            if (!userMatch.checkPassword(password)) {
                return done(null, false, {message: "Incorrect Password"});
            }
            return done(null, userMatch);
        });
    }
);

module.exports = strategy;