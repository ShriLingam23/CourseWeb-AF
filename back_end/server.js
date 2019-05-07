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
app.use('/staff',staffRoute)

app.listen(PORT,()=>{
    console.log("Server listeing on port ",PORT)
})