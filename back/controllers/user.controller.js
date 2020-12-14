const mongoose = require('mongoose');
const User = mongoose.model('User');
const passport = require('passport');
const _ = require('lodash');


module.exports.register = (req, res, next) =>{
    var newUser = new User();
    newUser.nom = req.body.nom;
    newUser.prenom = req.body.prenom;
    newUser.age = req.body.age;
    newUser.email = req.body.email;
    newUser.password = req.body.password;
    newUser.admin = req.body.admin;
    newUser.save((err,doc) =>{
        if (!err)
            res.status(200).send(doc);
        else
            res.status(500).send(err);
    })
}


module.exports.authenticate = (req, res, next ) => {
    passport.authenticate('local', (err,user,info) => {
        if (err) { return res.send({success: false}); }
        else if (user) {
            return res.status(200).json({ token: user.generateJwt(), success: true } ); }
        else { return res.send({success: false}) }
    })(req,res);
}

async function batchDelete(userList) {
    for (const user of userList) {
        await User.findByIdAndDelete(user._id);
    }
}

module.exports.batchDelete = async (req, res, next) => {
    await batchDelete(req.body).then(res.status(200).send({success: true}));
}

module.exports.find = (req, res, next) => {
    User.find((err, doc) => {
        if (!err) 
            return res.status(200).send(doc);
        else 
            return res.status(500).send(err);
    });
}