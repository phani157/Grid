import logo from './logo.svg';
import './App.css';
import React from 'react';
import Grid from './Grid'; 

function EmployeeDetails(props) {
  // console.log(data);
    return (
      <div className="App">
         <p>{props.data}</p>
         <Grid tableName="Employee Details" ></Grid>
      </div>
    );
}

export default EmployeeDetails;

