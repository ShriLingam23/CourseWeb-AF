import React,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import { Alert ,Spinner} from 'reactstrap';

import logo from '../logo.svg'

import {IoIosKey} from "react-icons/io"
import {IoMdStarHalf} from "react-icons/io"
import {IoIosJournal} from "react-icons/io"
import {IoMdBusiness} from "react-icons/io"
import {IoIosKeypad} from "react-icons/io"
import {IoIosGrid} from "react-icons/io"
import {IoIosPeople} from "react-icons/io"



class Course_Register extends Component{

    constructor(props) {
        super(props);
        // this.toggle = this.toggle.bind(this);
        this.state = { 
            visible: false,
            pending: false,
            courseId:'',
            courseName:'',
            enrollment:'',
            faculty:'',
            year:'',
            semester:''
        };

        this.onFormSubmit= this.onFormSubmit.bind(this);
        this.onValueChange = this.onValueChange.bind(this);

        this.onDismiss = this.onDismiss.bind(this);
        this.newlyAdded = this.newlyAdded.bind(this);
        this.checkPending = this.checkPending.bind(this);
    }

    onDismiss() {
        this.setState({ visible: false });
    }

    newlyAdded(){
        if(this.state.visible){
            return (
                <div>
                    <Alert color="success" isOpen={this.state.visible} toggle={this.onDismiss} fade={false}>
                        New Course details successfully added to the System!
                    </Alert>
                </div>
            );
        }
    }

    checkPending(){
        if(this.state.pending){

            return (
                <div className="col-md-8 py-5 border" >
                    <Spinner style={{ width: '10rem', height: '10rem',paddingTop:'50px'}} type="grow" color="warning" />
                </div>
            )

        }
        else{
            return(
                <div className="col-md-8 py-5 border">
                    <h4 className="pb-4">Please Fill New Course details</h4>
                    <form id='staffForm' onSubmit={this.onFormSubmit}>
                        <div className="form-row">
                            <div className="input-group form-group col-md-6">
                            <div className="input-group-prepend">
                                <div className="input-group-text"><IoMdStarHalf/></div>
                            </div>
                            <input 
                                name="courseId" 
                                placeholder="Course ID" 
                                className="form-control" 
                                required="required"
                                type="text"
                                onChange={this.onValueChange}
                                value={this.state.courseId} />
                            </div>
                        <div className="input-group form-group col-md-6">
                            <div className="input-group-prepend">
                                <div className="input-group-text"><IoIosJournal/></div>
                            </div>
                            <input 
                                name="courseName" 
                                placeholder="Course Name"
                                className="form-control"
                                required="required"
                                type="text"
                                onChange={this.onValueChange}
                                value={this.state.courseName} />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="input-group form-group col-md-6">
                                <div className="input-group-prepend">
                                    <div className="input-group-text"><IoIosKey/></div>
                                </div>
                                <input 
                                    name="enrollment" 
                                    placeholder="Enrollment Key" 
                                    className="form-control" 
                                    required="required" 
                                    type="password"
                                    onChange={this.onValueChange}
                                    value={this.state.enrollment} />
                            </div>
                            <div className="input-group form-group col-md-6">
                                <div className="input-group-prepend">
                                    <div className="input-group-text"><IoMdBusiness/></div>
                                </div>   
                                <select name="faculty" className="form-control" onChange={this.onValueChange}>
                                    <option selected>Choose Faculty ...</option>
                                    <option> Computing Faculty</option>
                                    <option> Engineering Faculty</option>
                                    <option> Business Faculty</option>
                                    <option> Science Faculty</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="input-group form-group col-md-6">
                                <div className="input-group-prepend">
                                    <div className="input-group-text"><IoIosKeypad/></div>
                                </div>
                                <select name="year" className=" form-control" onChange={this.onValueChange}>
                                    <option selected>Choose Year ...</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </select>
                            </div>
                            <div className="input-group form-group col-md-6">
                                <div className=" input-group-prepend">
                                    <div className="input-group-text"><IoIosGrid/></div>
                                </div>
                                <select name="semester" className=" form-control" onChange={this.onValueChange}>
                                    <option selected>Choose Semester ...</option>
                                    <option>1</option>
                                    <option>2</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="input-group form-group col-md-12">
                                {/* <div className="input-group-prepend">
                                    <div className="input-group-text"><IoIosPeople/></div>
                                </div> */}
                                <div className="form-control bg-dark text-info text-light" style={{height:'150px',marginTop:'20px'}}>
                                    
                                    <h3><IoIosPeople size="50px" style={{marginRight:'10px'}}/>Incharge Staffs</h3>
                                </div>
                            </div>
                        </div>
                
                        <div className="form-row">
                            <div className="form-group">
                                <div className="form-group">
                                    <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
                                    <label className="form-check-label" >
                                        <small>By clicking Submit, you agree to our Terms & Conditions, Visitor Agreement and Privacy Policy.</small>
                                    </label>
                                    </div>
                                </div>
                        
                            </div>
                        </div>
                        
                        <div className="form-row" style={{display:'flex',justifyContent:'center'}}>
                            <button type='submit' className="btn btn-danger">Submit</button>
                        </div>

                    </form>
                </div>
                
                
            )
        }
    }

    onValueChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    onFormSubmit(e){
        //this.setState({pending:true})
        e.preventDefault();

        const courseId = this.state.courseId;
        const courseName = this.state.courseName;
        const enrollment = this.state.enrollment;
        const faculty = this.state.faculty;
        const year = parseInt(this.state.year);
        const semester = parseInt(this.state.semester);
        console.log(courseId,courseName,enrollment,faculty,year,semester)

        const course={
            courseId,
            courseName,
            enrollment,
            faculty,
            year,
            semester
        }

        axios.post('http://localhost:4000/course/add',course)
            .then(
                res=>{
                    console.log(res.data)
                    // document.getElementById('staffForm').reset()
                    this.setState({
                        visible:true,
                        pending:false,
                        courseId:'',
                        courseName:'',
                        enrollment:'',
                        faculty:'',
                        year:'',
                        semester:''});

                },
                err=>console.log(err)
            )

    }

    render(){
        return(
            <div className="container" style={{paddingTop:'20px'}}>
                
                {this.newlyAdded()}
                {/* <!--Body--> */}

                <main role="main" style={{marginTop:'10px'}}>

                    <section className="jumbotron text-center" >
                        <div className="container" style={{backgroundColor:'#f9fbe7',marginTop:'-30px',marginBottom:'-30px'}}>

                            <div className='row' >
                                <div className='col-md-4 bg-info text-white text-center'>
                                    <div className="card-body" >
                                        <img src={logo} />
                                        <h2 className="py-3">New Course</h2>
                                        <p>
                                            Tation argumentum et usu, dicit viderer evertitur te has. Eu dictas concludaturque usu, facete detracto patrioque an per, lucilius pertinacia eu vel.

                                        </p>
                                    </div>
                                </div>

                                {/* form section */}
                                {this.checkPending()}
                            </div>
                        </div>
                    
                    </section>
                </main>

            </div>
        );
    }
}

export default Course_Register;