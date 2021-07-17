import './App.css';
import React,{Component} from 'react';
import Axios from 'axios';
import NavBar from './Components/NavBar';
import DisplayGlobal from './Components/DisplayGlobal';
import DisplayLocal from './Components/DisplayLocal';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form} from 'react-bootstrap';
class App extends React.Component{

  state={
    data : {}
  }

  /*load =(e) =>{
    e. preventDefault();
    Axios.get( `https://www.hpb.health.gov.lk/api/get-current-statistical`).then(res =>{
      let newData ={
        global_deaths : res.data.data.global_deaths,
        global_new_deaths : res.data.data.global_new_deaths,
        global_new_cases : res.data.data.global_new_cases,
        global_recovered: res.data.data.global_recovered,
        global_total_cases: res.data.data.global_total_cases,
        local_active_casesc :res.data.data.local_active_cases,
        local_deaths :res.data.data.local_deaths,
        local_new_cases :res.data.data.local_new_cases,
        local_new_deaths :res.data.data.local_new_deaths,
        local_recovered :res.data.data.local_recovered,
        local_total_cases :res.data.data.local_total_cases,
        local_total_number_of_individuals_in_hospitals :res.data.data.local_total_number_of_individuals_in_hospitals,
        total_antigen_testing_count :res.data.data.total_antigen_testing_count,
        total_pcr_testing_count : res.data.data.total_pcr_testing_count,
        date:res.data.data.update_date_time
      }
      this.setState({data:newData});
      console.log(res.data.data)
    })
  }*/

    componentDidMount (){
    
    Axios.get( `https://www.hpb.health.gov.lk/api/get-current-statistical`).then(res =>{
      let newData ={
        global_deaths : res.data.data.global_deaths,
        global_new_deaths : res.data.data.global_new_deaths,
        global_new_cases : res.data.data.global_new_cases,
        global_recovered: res.data.data.global_recovered,
        global_total_cases: res.data.data.global_total_cases,
        local_active_cases :res.data.data.local_active_cases,
        local_deaths :res.data.data.local_deaths,
        local_new_cases :res.data.data.local_new_cases,
        local_new_deaths :res.data.data.local_new_deaths,
        local_recovered :res.data.data.local_recovered,
        local_total_cases :res.data.data.local_total_cases,
        local_total_number_of_individuals_in_hospitals :res.data.data.local_total_number_of_individuals_in_hospitals,
        total_antigen_testing_count :res.data.data.total_antigen_testing_count,
        total_pcr_testing_count : res.data.data.total_pcr_testing_count,
        update_date_time:res.data.data.update_date_time
      }
      this.setState({data:newData});
      console.log(res.data.data)
    })
  }
  render(){
    return(
      <div className="App">
        <NavBar />
        <div className='Container'>
            
            <DisplayGlobal data={this.state.data}/>
  
        </div>
        <div className="Container">
            <DisplayLocal data={this.state.data}/>
        </div>
        <div className="Container">
          <Form className="form"> 
              <Form.Group className="mb-3" >
                <Form.Control type="email" placeholder="Enter Country" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              
            </Form>
        </div>
        
      </div>
    );
  }
}

export default App;
