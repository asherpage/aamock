const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const {Schema} = mongoose;


const userSchema = new Schema({
    email:{
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    }
}, {database: "Site", collection: "Users"});


userSchema.pre("save", function(next){
    const user = this
    if(!user.isModified('password')) return next();
    bcrypt.genSalt(10, function(err, salt){
        if(err) return next(err);

        bcrypt.hash(user.password, salt, function(err, hash){
            if(err) return next(err);
            user.password = hash
            next();
        })
    })
})

userSchema.method("checkPassword", function(password){
    return bcrypt.compare(password, this.password);
});

const User = mongoose.model("User", userSchema);
module.exports = User;