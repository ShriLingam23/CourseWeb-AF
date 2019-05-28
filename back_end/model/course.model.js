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
    Faculty:{
        type:String,
        required:true
    },
    Year:{
        type:Number,
        required:true
    },
    Semester:{
        type:Number,
        required:true,

    }
});

module.exports = mongoose.model("Course",Course);