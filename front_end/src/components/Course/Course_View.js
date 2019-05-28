import React,{Component} from 'react';
import axios from 'axios';
import { Alert,UncontrolledAlert,Button } from 'reactstrap';
import {Link} from 'react-router-dom'

import CourseTable from './Course_Table';

class Course_View extends Component{

    constructor(props){
        super(props);

        this.state={
            courses:[]
        }

        this.fillTable=this.fillTable.bind(this);
        this.checkData= this.checkData.bind(this);
    }

    componentDidMount(){
        axios.get('http://localhost:4000/course/')
            .then(
                courses=>this.setState({courses:courses.data})
            )

            //console.log(this.state.staffs.length)
    }

    componentWillUpdate(){
        axios.get('http://localhost:4000/course/')
            .then(
                courses=>this.setState({courses:courses.data})
            )
    }

    fillTable(){

        return this.state.courses.map(course=>{
            return <CourseTable key={course._id} course={course}/>
        })
    }

    checkData(){
        if(this.state.courses.length>0){

            return(
                <div className='container' style={{marginTop:'20px'}}>
                
                    <div className='card'>
                    <table className="table table-hover table-responsive-md table-striped" style={{marginTop:'5px',marginBottom:'5px'}}>
                        <thead style={{backgroundColor:'#bdbdbd'}}>
                            <tr>
                                <th scope="col">Course ID</th>
                                <th scope="col">Course Name</th>
                                <th scope="col">Enrollment Key</th>
                                <th scope="col">Faculty</th>
                                <th scope="col">Year</th>
                                <th scope="col">Semester</th>
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
                        <Link to='/staff/add'><Button color="info">Add a New Course</Button></Link>
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