import logo from './logo.svg';
import './App.css';
import React from 'react';
import EmployeeDetails from './EmployeeDetails';
import Grid from './Grid';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <EmployeeDetails data="Passing data from parent"></EmployeeDetails>
         
          <p>
            Edit <code>src/App.js</code> This is for learning.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> 
          <Grid tableName="Salary Details" ></Grid>      
        </header>
      </div>
    );
  }
}

export default App;

