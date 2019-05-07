import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';
import { Collapse, Button } from 'reactstrap';

import logo from '../components/logo.svg'
import '../assets/css/Landing.css'


import Slide from './Slides'

class AdminLanding extends Component{

    // constructor(props) {
    //     super(props);
    //     this.toggle = this.toggle.bind(this);
    //     this.state = { collapse: false };
    // }

    // toggle() {
    //     this.setState(state => ({ collapse: !state.collapse }));
    // }
    

    render(){
        return (
            <div className="container" style={{paddingTop:'20px'}}>
                {/* <header>
                    
                    <div className="navbar navbar-dark bg-dark shadow-sm">
                        <div className="container d-flex justify-content-between">
                            <a className="navbar-brand" href="#">
                                <img src={logo} width="30" height="30" className="d-inline-block align-top" alt=""/>
                                Loops' Student Portal
                            </a>

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

                 <main role="main">

                    <section className="jumbotron text-center">
                        <div className="container">
                        {/* <h1 className="jumbotron-heading">Album example</h1> */}
                        <Slide />
                        <p className="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
                        {/* <p>
                            <a href="#" className="btn btn-primary my-2">Main call to action</a> { }
                            <a href="#" className="btn btn-secondary my-2">Secondary action</a>
                        </p> */}
                        </div>
                    </section>

                    <div className="album py-5 bg-light">
                        <div className="container">

                            <div className="row">
                                <div className="col-md-4">
                                    <div className="card mb-4 shadow-sm">
                                        <h5 className="jumbotron-heading text-info" style={{marginTop:'10px',textAlign:'center'}}>Instructors</h5>
                                        <img src={logo} className="card-img-top rounded-circle" alt="..." />
                                        <div className="card-body">
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-secondary"><Link to='/staff/view'>View</Link></button>
                                            <button type="button" className="btn btn-sm btn-outline-secondary"><Link to='/staff/add'>Add</Link></button>
                                            </div>
                                            <small className="text-muted">9 mins</small>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card mb-4 shadow-sm">
                                        <h5 className="jumbotron-heading text-info" style={{marginTop:'10px',textAlign:'center'}}>Album example</h5>
                                        <img src={logo} className="card-img-top rounded-circle" alt="..." />
                                        <div className="card-body">
                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group">
                                                <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                                <button type="button" className="btn btn-sm btn-outline-secondary">Add</button>
                                                </div>
                                                <small className="text-muted">9 mins</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card mb-4 shadow-sm">
                                        <h5 className="jumbotron-heading text-info" style={{marginTop:'10px',textAlign:'center'}}>Album example</h5>
                                        <img src={logo} className="card-img-top rounded-circle" alt="..." />
                                        <div className="card-body">
                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group">
                                                <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                                <button type="button" className="btn btn-sm btn-outline-secondary">Add</button>
                                                </div>
                                                <small className="text-muted">9 mins</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                
                            </div>
                        </div>
                    </div>

                    </main>


            
            </div>

            

            
        )
    }
}

export default AdminLanding;