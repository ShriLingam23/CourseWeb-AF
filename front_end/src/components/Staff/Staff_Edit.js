import React,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import { Alert } from 'reactstrap';

import logo from '../logo.svg'
import { MdEmail } from "react-icons/md";
import { MdPhone } from "react-icons/md";
import { MdPerson } from "react-icons/md";
import { MdLock } from "react-icons/md";
import { MdPlace } from "react-icons/md";
import { MdCardTravel } from "react-icons/md";


class Staff_Edit extends Component{

    constructor(props) {
        super(props);
        
        this.state = { 
            visible: false,
            fullName:'',
            email:'',
            password:'',
            profession:'',
            contactNum:'',
            location:'',
            response:''

        };

        this.onFormSubmit= this.onFormSubmit.bind(this);
        this.onValueChange = this.onValueChange.bind(this);

        this.onDismiss = this.onDismiss.bind(this);
        this.newlyUpdated = this.newlyUpdated.bind(this);

        this.resetPassword= this.resetPassword.bind(this);
    }

    componentDidMount(){
        axios.get('http://localhost:4000/staff/edit/'+this.props.match.params.id)
            .then(
                staff =>{
                    this.setState({
                        fullName:staff.data.fullName,
                        email:staff.data.email,
                        password:staff.data.password,
                        profession:staff.data.profession,
                        contactNum:staff.data.contactNum,
                        location:staff.data.location,
                        response:staff.data.response
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
                        Staff Details Successfully Updated
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

        const fullName = this.state.fullName;
        const email = this.state.email;
        const password = this.state.password;
        const profession = this.state.profession;
        const contactNum = this.state.contactNum;
        const location = this.state.location;
        const response = this.state.response;
        console.log(fullName,email,password,profession,contactNum,location,response)

        const staff={
            fullName,
            email,
            password,
            profession,
            contactNum,
            location,
            response
        }

        axios.post('http://localhost:4000/staff/update/'+this.props.match.params.id,staff)
            .then(
                res=>{
                    console.log(res.data)
                    // document.getElementById('staffForm').reset()
                    this.setState({
                        visible:true,
                        fullName:'',
                        email:'',
                        password:'',
                        profession:'',
                        contactNum:'',
                        location:'',
                        response:''});

                },
                err=>console.log(err)
            )
        
        setTimeout(()=>{
            this.props.history.push('/staff/view')
        },1500);
        
    }

    resetPassword(){
        alert('hello')

        let a = "",
            b = "abcdefghijklmnopqrstuvwxyz1234567890",
            c = 8;
        for(let ma = 0; ma < c; ma++) {
          a += b[Math.floor(Math.random() * b.length)];
        }
        this.setState({password: a},()=>{

            const fullName = this.state.fullName;
            const email = this.state.email;
            const password = this.state.password;
            const profession = this.state.profession;
            const contactNum = this.state.contactNum;
            const location = this.state.location;
            const response = this.state.response;
            console.log(fullName,email,password,profession,contactNum,location,response)

            const staff={
                fullName,
                email,
                password,
                profession,
                contactNum,
                location,
                response
            }
        });
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
                                        <h2 className="py-3">Registration</h2>
                                        <p>
                                            Tation argumentum et usu, dicit viderer evertitur te has. Eu dictas concludaturque usu, facete detracto patrioque an per, lucilius pertinacia eu vel.

                                        </p>
                                    </div>
                                </div>

                                {/* form section */}
                                <div className="col-md-8 py-5 border">
                                    <h4 className="pb-4">Please Fill Staff Member details</h4>
                                    <form id='staffForm' onSubmit={this.onFormSubmit}>
                                        <div className="form-row">
                                            <div className="input-group form-group col-md-6">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text"><MdPerson/></div>
                                            </div>
                                            <input 
                                                name="fullName" 
                                                placeholder="Full Name" 
                                                className="form-control" 
                                                type="text"
                                                pattern="[A-Za-z ]{1,}"
                                                onChange={this.onValueChange}
                                                value={this.state.fullName} />
                                            </div>
                                        <div className="input-group form-group col-md-6">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text"><MdEmail/></div>
                                            </div>
                                            <input 
                                                name="email" 
                                                placeholder="Email"
                                                className="form-control"
                                                type="email"
                                                pattern="/^[a-z0-9_]{*}+@[a-z0-9]{*}+.[a-z]{2,4}$/"
                                                title="Email field not matched"
                                                onChange={this.onValueChange}
                                                value={this.state.email} />
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="input-group form-group col-md-6">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text"><MdLock/></div>
                                                </div>
                                                <input 
                                                    name="password" 
                                                    placeholder="Password" 
                                                    className="form-control" 
                                                    required="required" 
                                                    type="password"
                                                    onChange={this.onValueChange}
                                                    value={this.state.password} readOnly/>
                                            </div>
                                            <div className="input-group form-group col-md-6">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text"><MdCardTravel/></div>
                                                </div>   
                                                <select name="profession" className="form-control" onChange={this.onValueChange} value={this.state.profession}>
                                                    <option>Choose Profession ...</option>
                                                    <option> Admin</option>
                                                    <option> Senior Lecturer</option>
                                                    <option> Lecturer</option>
                                                    <option> Instructor</option>
                                                    <option> Lab Assistant</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="input-group form-group col-md-6">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text"><MdPhone/></div>
                                                </div>
                                                <input 
                                                    name="contactNum" 
                                                    placeholder="Contact No." 
                                                    className="form-control" 
                                                    required="required" 
                                                    type="tel" 
                                                    pattern="[0-9]{10}"
                                                    title="Contact Number can only contain 10 digits"
                                                    onChange={this.onValueChange}
                                                    value={this.state.contactNum}/>
                                            </div>
                                            <div className="input-group form-group col-md-6">
                                                <div className=" input-group-prepend">
                                                    <div className="input-group-text"><MdPlace/></div>
                                                </div>
                                            <select name="location" className=" form-control" onChange={this.onValueChange} value={this.state.location}>
                                                <option selected>Choose Location ...</option>
                                                <option> Colombo - Metro</option>
                                                <option> Malabe</option>
                                                <option> Kandy</option>
                                                <option> Jaffna</option>
                                                <option> Matara</option>
                                            </select>
                                            </div>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-md-12">
                                                    <textarea
                                                        name="response" 
                                                        cols="40" rows="5" 
                                                        className="form-control" 
                                                        placeholder="Responsibilities"
                                                        onChange={this.onValueChange}
                                                        value={this.state.response}></textarea>
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
                                            <button type='submit' className="btn btn-danger" >Save changes</button>
                                            <button type='button' className="btn btn-warning" onClick={this.resetPassword} style={{marginLeft:'25px'}}>Reset Password</button>
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

export default Staff_Edit;