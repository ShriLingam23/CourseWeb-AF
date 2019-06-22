import React,{Component} from 'react';
import axios from 'axios';
import { Alert,UncontrolledAlert,Button } from 'reactstrap';
import {Link} from 'react-router-dom'
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';

import CourseTable from './Course_Table';

const data = [
    {
      name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
    },
    {
      name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
    },
    {
      name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
    },
    {
      name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
    },
    {
      name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
    },
    {
      name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
    },
    {
      name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
    },
  ];

class Course_View extends Component{
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

    constructor(props){
        super(props);

        this.state={
            courses:[],
            students:[],
            data:[]
        }

        this.fillTable=this.fillTable.bind(this);
        this.checkData= this.checkData.bind(this);
    }

    componentDidMount(){
        axios.get('http://localhost:4000/course/')
            .then(
                courses=>{
                    this.setState({courses:courses.data},()=>{

                        console.log(this.state.courses)
                        axios.get('http://localhost:4000/student/')
                        .then(
                            students=>{
                                this.setState({students:students.data},()=>{

                                    let data=[]
                                    this.state.courses.forEach((course)=>{

                                        let Stu_Num=0;
                                        let Staff_Num=course.staffs.length;

                                        this.state.students.forEach((student)=>{
                                            
                                            student.courses.forEach((Stu_course)=>{
                                                if(course._id==Stu_course._id)
                                                    Stu_Num+=1
                                            })
                                        })

                                        data.push({
                                            name: course.courseId, staffs: Staff_Num, students: Stu_Num, amt: 2400,
                                          })
                                    })
                                    console.log(data)
                                    this.setState({data:data})
                                })
                            })
                    })



                }
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

                    <LineChart
                        width={800}
                        height={340}
                        data={this.state.data}
                        margin={{
                            top: 5, right: 30, left: 20, bottom: 5,
                        }}
                        style={{marginLeft:'150px'}}
                        fill="#8884d8"
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" stroke="#000"/>
                        <YAxis stroke="#000"/>
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="staffs" stroke="#db5400" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="students" stroke="#f5a800" />

                    </LineChart>
                
                    <div className='card' style={{marginTop:'25px'}}>
                    <table className="table table-hover table-responsive-md table-striped" style={{marginBottom:'5px'}}>
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
                        <Link to='/course/add'><Button color="info">Add a New Course</Button></Link>
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