import React,{Component} from 'react';
import axios from 'axios';
import { Alert,UncontrolledAlert,Button } from 'reactstrap';
import {Link} from 'react-router-dom'

import CourseTable from './Course_Table';

class Course_View extends Component{

    constructor(props){
        super(props);

        this.state={
            staffs:[]
        }

        this.fillTable=this.fillTable.bind(this);
        this.checkData= this.checkData.bind(this);
    }

    componentDidMount(){
        axios.get('http://localhost:4000/staff/')
            .then(
                staffs=>this.setState({staffs:staffs.data})
            )

            //console.log(this.state.staffs.length)
    }

    componentWillUpdate(){
        axios.get('http://localhost:4000/staff/')
            .then(
                staffs=>this.setState({staffs:staffs.data})
            )
    }

    fillTable(){

        return this.state.staffs.map(staff=>{
            return <CourseTable key={staff._id} staff={staff}/>
        })
    }

    checkData(){
        if(this.state.staffs.length>0){

            return(
                <div className='container' style={{marginTop:'20px'}}>
                
                    <div className='card'>
                    <table className="table table-hover table-responsive-md table-striped" style={{marginTop:'5px',marginBottom:'5px'}}>
                        <thead style={{backgroundColor:'#bdbdbd'}}>
                            <tr>
                                <th scope="col">Staff Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Profession</th>
                                <th scope="col">Contact Number</th>
                                <th scope="col">Location</th>
                                <th scope="col" colSpan='2'></th>
                            </tr>
                        </thead>
                    <tbody>
                        {this.fillTable()}
                    </tbody>
                    </table>
                    </div>
    
                </div>
            )

        }
        else{
            return(
                <div className='container' style={{marginTop:'150px'}}>
                    <UncontrolledAlert color="warning">
                        <h4 className="alert-heading">No Data Available</h4>
                        <p>
                        Aww yeah, you successfully read this important alert message. This example text is going
                        to run a bit longer so that you can see how spacing within an alert works with this kind
                        of content.
                        </p>
                        <hr />
                        <p className="mb-0">
                        Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
                        </p>
                    </UncontrolledAlert>
                    <br></br>
                    <div style={{display:'flex',justifyContent:'center'}}>
                        <Link to='/staff/add'><Button color="info">Add a New Staff</Button></Link>
                    </div>
                </div>
            )
        }
    }

    render(){
        return this.checkData()
    }


}

export default Course_View;