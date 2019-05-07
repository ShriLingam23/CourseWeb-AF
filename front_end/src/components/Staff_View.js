import React,{Component} from 'react';

class Staff_View extends Component{

    render(){
        return(
            <div className='container' style={{marginTop:'20px'}}>
            
                <div className='card'>
                <table class="table table-hover table-responsive-md table-striped">
                <thead style={{backgroundColor:'#bdbdbd'}}>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td colspan="2">Larry the Bird</td>
                    <td>@twitter</td>
                    </tr>
                </tbody>
                </table>
                </div>

            </div>
        )
    }


}

export default Staff_View;