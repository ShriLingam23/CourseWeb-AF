import React,{Component} from 'react';
import { Button } from 'reactstrap';
import axios from 'axios';
import icons from '../../../node_modules/glyphicons'

import '../../assets/css/CheckBox.css'

class Course_Staff_Row extends Component{

    constructor(props){
        super(props);

        this.state={
            staff:props.staff
        }

        this.onDelete=this.onDelete.bind(this);
        this.checkStaff= this.checkStaff.bind(this);
    }

    onDelete(){
        axios.get('http://localhost:4000/staff/delete/'+this.state.staff._id)
            .then(
                res => console.log(res.data)
            )
    }

    checkStaff(){
        var check = document.getElementById(this.state.staff._id);
        console.log(check.checked)

        this.props.passValue(this.state.staff._id,check.checked)
    }

    render(){
        return(
            <tr>
                <th scope="row">{this.state.staff.fullName}</th>
                {/* <td scope="col">{this.state.staff.email}</td> */}
                <td scope="col">{this.state.staff.profession}</td>
                {/* <td scope="col">{this.state.staff.contactNum}</td> */}
                <td scope="col">{this.state.staff.location}</td>

                <label style={{marginTop:'5px'}} className="btn btn-success">Assign 
                    <input type="checkbox" id={this.state.staff._id} className="badgebox" onClick={this.checkStaff}/>
                    <span className="badge">{icons.ok}</span>
                </label>

                
            </tr>
        )
    }


}

export default Course_Staff_Row;