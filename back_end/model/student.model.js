const mongoose = require('mongoose');
const validator = require('validator')
const Schema = mongoose.Schema;

const Student = new Schema({

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
    contactNum:{
        type:String,
        required:true,
        minlength: 10,
        maxlength: 10
    },
    courses:[{
        type:Schema.Types.ObjectId,
        ref:"Course"
    }]
});

module.exports = mongoose.model("Student",Student);