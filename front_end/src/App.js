import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import './App.css';
import './assets/css/Admin.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Header from './components/Header'
import AdminLanding from './components/AdminLanding'
import StaffRegister from './components/Staff_Register'
import Staff_View from './components/Staff_View';
import Staff_Edit from './components/Staff_Edit';

function App() {
  return (
    <BrowserRouter>
      <div className="parallax">
        <Header/>
        
          
          <Switch>
            <Route exact path='/' component={AdminLanding}/>
            <Route exact path='/staff/add' component={StaffRegister}/>
            <Route exact path='/staff/view' component={Staff_View}/>
            <Route exact path='/staff/edit/:id' component={Staff_Edit}/>
          </Switch>  
            
          
        
      </div>
    </BrowserRouter>
  );
}

export default App;
