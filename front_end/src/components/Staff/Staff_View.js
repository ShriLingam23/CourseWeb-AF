import React,{Component} from 'react';
import axios from 'axios';
import { Alert,UncontrolledAlert,Button } from 'reactstrap';
import {Link} from 'react-router-dom'

import { PieChart, Pie, Sector } from 'recharts';

import StaffTable from './Staff_Table';


//Data Visualization

    var data =[]
    axios.get('http://localhost:4000/staff/')
            .then(
                staffs=>{
                    
                    let SeniorLecturer =0;
                        let Lecturer =0;
                        let Instructor =0;
                        let LabAssistant =0;
                        let Admin =0;

                        staffs.data.forEach((staff)=>{
                            console.log(staff.profession)
                            switch(staff.profession){
                                case 'Senior Lecturer':
                                    SeniorLecturer=+1;
                                    break;
                                case 'Lecturer':
                                    Lecturer=+1;
                                    break;
                                case 'Instructor':
                                    Instructor=+1;
                                    break;
                                case 'Lab Assistant':
                                    LabAssistant=+1;
                                    break;
                                case 'Admin':
                                    Admin=+1;
                                    break;
                            }
                        })
                        console.log(SeniorLecturer,Lecturer,LabAssistant,Instructor,Admin)

                        data = [
                            { name: 'Admin', value: Admin },
                            { name: 'Senior Lecturer', value: SeniorLecturer },
                            { name: 'Lecturer', value: Lecturer },
                            { name: 'Instructor', value: Instructor },
                            { name: 'Lab Assisteant', value: LabAssistant }
                        ]
                        
                        console.log(data)

                    console.log(staffs.data)
                }
            )

  
const renderActiveShape = (props) => {

    const RADIAN = Math.PI / 180;
    const {
      cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
      fill, payload, percent, value,
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';
  
    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill="#b12000">{payload.name}</text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill="#f18407"
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill="#fcd238"
        />
        <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
        <circle cx={ex} cy={ey} r={2} fill="#b12000" stroke="none" />
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`PV ${value}`}</text>
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#383645" style={{fontStyle:'bold'}}>
          {`(Rate ${(percent * 100).toFixed(2)}%)`}
        </text>
      </g>
    );
};

class Staff_View extends Component{

    constructor(props){
        super(props);

        this.state={
            staffs:[],
            activeIndex: 0
        }

        this.fillTable=this.fillTable.bind(this);
        this.checkData= this.checkData.bind(this);
    }

    componentDidMount(){

        axios.get('http://localhost:4000/staff/')
            .then(
                staffs=>this.setState({staffs:staffs.data})
            )
            
    }

    componentWillUpdate(){
        axios.get('http://localhost:4000/staff/')
            .then(
                staffs=>this.setState({staffs:staffs.data})
            )
    }

    fillTable(){

        return this.state.staffs.map(staff=>{
            return <StaffTable key={staff._id} staff={staff}/>
        })
    }

    onPieEnter = (data, index) => {
        this.setState({
          activeIndex: index,
        });
    };

    checkData(){
        if(this.state.staffs.length>0){

            return(
                <div className='container' >

                    <PieChart width={800} height={400} style={{marginLeft:'250px'}}>
                            <Pie 
                                activeIndex={this.state.activeIndex}
                                activeShape={renderActiveShape} 
                                data={data} 
                                cx={300} 
                                cy={200} 
                                innerRadius={100}
                                outerRadius={150} 
                                fill="#db5400"
                                onMouseEnter={this.onPieEnter}
                            />
                    </PieChart>
                
                    <div className='card' style={{marginTop:'30px'}}>
                    <table className="table table-hover table-responsive-md table-striped" style={{marginBottom:'5px'}}>
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

export default Staff_View;