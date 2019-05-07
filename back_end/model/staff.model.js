const mongoose = require('mongoose');
const validator = require('validator')
const Schema = mongoose.Schema;

const Staff = new Schema({

    fullName  :{
        type:String,
        required:true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: (value) => {
            return validator.isEmail(value)
        }
    },
    password:{
        type:String,
        required:true
    },
    profession:{
        type:String,
        required:true
    },
    contactNum:{
        type:String,
        required:true,
        minlength: 10,
        maxlength: 10
    },
    location:{
        type:String,
        required:true
    },
    response:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model("Staff",Staff);