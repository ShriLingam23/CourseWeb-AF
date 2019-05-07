const express = require('express');
const router = express.Router();

const Staff = require('../model/staff.model');

//Create a new staff
router.route('/add').post(function(req,res){
    let staff = new Staff(req.body);
    console.log(staff)
    staff.save()
        .then(result =>{
            res.status(200).json({'staff':"Staff Successfully Added"})
        })
        .catch(err=>{
            res.status(400).send("unable to save to database");
        })
})

//Read staff details
router.route('/').get(function(req,res){
    Staff.find(function(err,staffs){
        if(err){
            console.log(err);
        }
        else {
            res.status(200).json(staffs);
        }
    })
})

//Get Staff details for Edit
router.route('/edit/:id').get(function (req, res) {

    Staff.findById(req.params.id,function(err, staff){
    if(err){
      console.log(err);
    }
    else {
        res.status(200).json(staff);
    }
  });
});

//Update Staff details
router.route('/update/:id').post(function (req, res) {

    Staff.findById(req.params.id,function(err, staff){

        if(err){
            console.log(err);
        }
        else {

            staff.fullName=req.body.fullName;
            staff.email=req.body.email;
            staff.password=req.body.password;
            staff.profession=req.body.profession;
            staff.contactNum=req.body.contactNum;
            staff.location=req.body.location;
            staff.response=req.body.response;
            
            staff.save()
                .then(result=>{
                    res.status(200).json({'Staff':"Successfully Updated"})
                })
                .catch(err=>{
                    res.status(400).send("Unable to Update Staff");
                })
            
        }
    });
});

//Delete Staff
router.route('/delete/:id').get(function(req,res){

    Staff.findByIdAndDelete(req.params.id,function(err,staff){

        if(err) 
            res.status(400).json(err);

        else 
            res.status(200).json('Successfully removed'+staff.fullName)
    })
})

module.exports=router;