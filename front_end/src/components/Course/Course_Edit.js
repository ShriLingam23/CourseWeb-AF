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


class Course_Edit extends Component{

    constructor(props) {
        super(props);
        
        this.state = { 
            visible: false,
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
        this.newlyUpdated = this.newlyUpdated.bind(this);
    }

    componentDidMount(){
        axios.get('http://localhost:4000/course/edit/'+this.props.match.params.id)
            .then(
                course =>{
                    this.setState({
                        courseId:course.data.courseId,
                        courseName:course.data.courseName,
                        enrollment:course.data.enrollment,
                        faculty:course.data.faculty,
                        year:course.data.year,
                        semester:course.data.semester
                    })
                }
            )
    }

    onDismiss() {
        this.setState({ visible: false });
    }

    newlyUpdated(){
        if(this.state.visible){
            return (
                <div>
                    <Alert color="primary" isOpen={this.state.visible} toggle={this.onDismiss} fade={false}>
                        Course Details Successfully Updated
                    </Alert>
                </div>
            );
        }
    }

    onValueChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    onFormSubmit(e){
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

        axios.post('http://localhost:4000/course/update/'+this.props.match.params.id,course)
            .then(
                res=>{
                    console.log(res.data)
                    // document.getElementById('staffForm').reset()
                    this.setState({
                        visible:true,
                        courseId:'',
                        courseName:'',
                        enrollment:'',
                        faculty:'',
                        year:'',
                        semester:''});

                },
                err=>console.log(err)
            )
        
        setTimeout(()=>{
            this.props.history.push('/course/view')
        },1500);
        
    }

    showPass(){
        var x = document.getElementById("enrollment");
        x.type="text";
    }

    hidePass(){
        var x = document.getElementById("enrollment");
        x.type="password";
    }

    render(){
        return(
            <div className="container" style={{paddingTop:'20px'}}>
                
                {this.newlyUpdated()}
                {/* <!--Body--> */}

                <main role="main" style={{marginTop:'10px'}}>

                    <section className="jumbotron text-center" >
                        <div className="container" style={{backgroundColor:'#f9fbe7',marginTop:'-30px',marginBottom:'-30px'}}>

                            <div className='row' >
                                <div className='col-md-4 bg-info text-white text-center'>
                                    <div className="card-body" >
                                        <img src={logo} />
                                        <h2 className="py-3">Course Update</h2>
                                        <p>
                                            Tation argumentum et usu, dicit viderer evertitur te has. Eu dictas concludaturque usu, facete detracto patrioque an per, lucilius pertinacia eu vel.

                                        </p>
                                    </div>
                                </div>

                                {/* form section */}
                                <div className="col-md-8 py-5 border">
                                    <h4 className="pb-4">Please Fill details of Course to be Updated</h4>
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
                                                    id="enrollment"  
                                                    name="enrollment" 
                                                    placeholder="Enrollment Key" 
                                                    className="form-control" 
                                                    required="required" 
                                                    type="password"
                                                    onChange={this.onValueChange}
                                                    value={this.state.enrollment} 
                                                    onMouseOver={this.showPass.bind(this)}
                                                    onMouseOut={this.hidePass.bind(this)}/>
                                            </div>
                                            <div className="input-group form-group col-md-6">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text"><IoMdBusiness/></div>
                                                </div>   
                                                <select name="faculty" className="form-control" onChange={this.onValueChange} value={this.state.faculty}>
                                                    <option>Choose Faculty ...</option>
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
                                                <select name="year" className=" form-control" onChange={this.onValueChange} value={this.state.year}>
                                                    <option>Choose Year ...</option>
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
                                                <select name="semester" className=" form-control" onChange={this.onValueChange} value={this.state.semester}>
                                                    <option>Choose Semester ...</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                </select>
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
                            </div>
                        </div>
                    
                    </section>
                </main>

            </div>
        );
    }
}

export default Course_Edit;