const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');

var User = mongoose.model('User');

passport.use(
  new localStrategy( {usernameField: 'email'},
        ( username , password, done) => {
            User.findOne({ email: username },
                (err,user) => {
                    console.log('in passport');
                    console.log(user);
                    if (err) { return done(err); }
                    else if (!user) { 
                        console.log('no existing user');
                        return done(null,false,{ message: 'No existing user' }); }
                    else if (!user.verifyPassword(password)) { 
                        console.log('wrong password');
                        return done(null, false, { message: 'Wrong password'}); 
                    }
                    else { return done(null, user); }
                }); 
        })   
);
