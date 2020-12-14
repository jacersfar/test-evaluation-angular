const mongoose = require('mongoose');
const bycrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

var UserSchema = mongoose.Schema({
    nom: { type: String, required: true },
    prenom: { type: String, required: true},
    age: { type: Number, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true},
    admin: { type: Boolean, required: true},
    saltSecret: String 
});

UserSchema.pre('save', function(next){
    bycrypt.genSalt(10,(err,salt)=>{
        bycrypt.hash(this.password,salt,(err,hash)=>{
            this.password = hash;
            this.saltSecret = salt;
            next();
        });
    });
});

UserSchema.methods.verifyPassword = function( password ){
    return bycrypt.compareSync(password,this.password);
}

UserSchema.methods.generateJwt = function() {
    return jwt.sign({ _id: this._id, admin: this.admin }, process.env.SECRET,
        { expiresIn: process.env.JWT_EXP});
}

mongoose.model('User', UserSchema);