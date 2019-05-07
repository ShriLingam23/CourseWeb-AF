import React,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import { Collapse, Button } from 'reactstrap';

import logo from '../components/logo.svg'
import { MdEmail } from "react-icons/md";
import { MdPhone } from "react-icons/md";
import { MdPerson } from "react-icons/md";
import { MdLock } from "react-icons/md";
import { MdPlace } from "react-icons/md";
import { MdCardTravel } from "react-icons/md";


class Staff_Register extends Component{

    constructor(props) {
        super(props);
        // this.toggle = this.toggle.bind(this);
        this.state = { 
            // collapse: false,
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
    }

    // toggle() {
    //     this.setState(state => ({ collapse: !state.collapse }));
    // }

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

        axios.post('http://localhost:4000/staff/add',staff)
            .then(
                res=>console.log(res.data),
                err=>console.log(err)
            )

        document.getElementById('staffForm').reset()
    }

    render(){
        return(
            <div className="container" style={{paddingTop:'20px'}}>
                {/* <header>
                    
                    <div className="navbar navbar-dark bg-dark shadow-sm">
                        <div className="container d-flex justify-content-between">
                            <Link className="navbar-brand" to='/'>
                                <img src={logo} width="30" height="30" className="d-inline-block align-top" alt=""/>
                                Loops' Student Portal
                            </Link>

                            <Button className="navbar-toggler-icon" color="primary" onClick={this.toggle} ></Button>
                            <Collapse isOpen={this.state.collapse}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-sm-8 col-md-7 py-4">
                                            <h4 className="text-white">About</h4>
                                            <p className="text-muted">Add some information about the album below, the author, or any other background context. Make it a few sentences long so folks can pick up some informative tidbits. Then, link them off to some social networking sites or contact information.</p>
                                        </div>
                                        <div className="col-sm-4 offset-md-1 py-4">
                                            <h4 className="text-white">Contact</h4>
                                            <ul className="list-unstyled">
                                                <li><a href="#" className="text-white">Follow on Twitter</a></li>
                                                <li><a href="#" className="text-white">Like on Facebook</a></li>
                                                <li><a href="#" className="text-white">Email me</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </Collapse>
                        </div>
                    </div>
                </header> */}

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
                                    <form id='staffForm'>
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
                                                    value={this.state.password} />
                                            </div>
                                            <div className="input-group form-group col-md-6">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text"><MdCardTravel/></div>
                                                </div>   
                                                <select name="profession" className="form-control" onChange={this.onValueChange}>
                                                    <option selected>Choose Profession ...</option>
                                                    <option> Senior Lecturer</option>
                                                    <option> Lecturer</option>
                                                    <option> Instaructor</option>
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
                                                    onChange={this.onValueChange}
                                                    value={this.state.contactNum}/>
                                            </div>
                                            <div className="input-group form-group col-md-6">
                                                <div className=" input-group-prepend">
                                                    <div className="input-group-text"><MdPlace/></div>
                                                </div>
                                            <select name="location" className=" form-control" onChange={this.onValueChange}>
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
                                            <button type='submit' className="btn btn-danger" onClick={this.onFormSubmit}>Submit</button>
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

export default Staff_Register;