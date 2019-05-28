const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({

    courseId  :{
        type:String,
        required:true,
        unique: true
    },
    courseName:{
        type:String,
        required:true
    },
    enrollment:{
        type:String,
        required:true
    },
    faculty:{
        type:String,
        required:true
    },
    year:{
        type:Number,
        required:true
    },
    semester:{
        type:Number,
        required:true,

    }
});

module.exports = mongoose.model("Course",Course);