import React,{Component} from 'react';
import { Button } from 'reactstrap';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Notice_Row extends Component{

    constructor(props){
        super(props);

        this.state={
            image:props.image
        }

        this.onDelete=this.onDelete.bind(this);
    }

    onDelete(){
        axios.get('http://localhost:4000/file/uploadfile/'+this.state.image._id)
            .then(
                res => console.log(res.data)
            )
    }

    render(){
        return(
            <tr>
                <th scope="row">{this.state.course.courseId}</th>
                
                <td scope="col"><Button color="danger" onClick={this.onDelete}>Delete</Button></td>
            </tr>
        )
    }


}

export default Notice_Row;