const express = require('express');
const app = express();
const PORT = 4000 | process.env.PORT;

const cors =require('cors');
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));

const config = require('./DB');
const mongoose= require('mongoose');
mongoose.connect(config.DB,{useNewUrlParser:true})
    .then(
        ()=>{console.log('Database connected Successfully')},
        err =>{console.log('Problem while connecting to Database')}
    );

const staffRoute = require('./route/staff.route')
app.use('/admin/staff',staffRoute)

const courseRoute = require('./route/course.route')
app.use('/admin/course',courseRoute)

const fileRoute = require('./route/file.route')
app.use('/admin/file',fileRoute)

const studentRoute = require('./route/student.route')
app.use('/admin/student',studentRoute)

app.listen(PORT,()=>{
    console.log("Server listening on port ",PORT)
})