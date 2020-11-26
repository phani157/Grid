import logo from './logo.svg';
import './App.css';
import React from 'react';
import EmployeeDetails from './EmployeeDetails';
import Grid from './Grid';

class App extends React.Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.counter= 0 ;
    this.employeeName= 'Phani';
    this.handleClick = this.handleClick.bind(this);
  }

  // componentWillMount(){
  //  // alert("componentWillMount");
  //  }

  componentDidMount(){
      //alert("componentDidMount");
  }
  //componentDidUpdate(prevProps, prevState, snapshot)
  componentDidUpdate(prevProps, prevState){
    //alert("componentDidupdate");
    }
  
    // shouldComponentUpdate(nextProps, nextState){
    //   if(this.counter>4){
    //     return false;
    //   }  
    //   return true;   
    // }

  handleClick(){
  this.setState({counter: this.counter++});
  this.setState(
    {employeeName : 'Ramesh'} );
  }

  render() {
    //alert("render");
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <EmployeeDetails data="Passing data from parent"></EmployeeDetails>
            {this.employeeName}
          <p>
            Edit <code>src/App.js</code> This is for learning.
          </p>
          {this.counter}
          <button onClick={this.handleClick}>click on me</button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> 
          <Grid tableName="Salary Details  " counter ={this.counter} ></Grid>      
        </header>
      </div>
    );
  }
}

export default App;

