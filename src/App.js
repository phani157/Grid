import logo from './logo.svg';
import './App.css';
import React from 'react';
import Grid from './Grid';
import ShowCounter from './ShowCounter'
class App extends React.Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.counter= 1 ;    
    this.name="test";
    this.handleClickMain = this.handleClickMain.bind(this);
  }

  handleClickMain(nm){   
  this.setState({counter: 1 });
  this.setState({name : nm});
  }

shouldComponentUpdate(nextProps, nextState){
  if( this.counter>4) {
  return false;
  }
  else {
    return true;
  }
}


  render() {
    return (
      <>
        <div className="App">
           <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />             
        
          <p>
            {/* Edit <code>src/App.js</code> This is for learning. */}
            {this.name}
          </p>        
          <ShowCounter handleClick={this.handleClickMain} counter={this.counter}></ShowCounter>         
        </header>
       </div>
        <div>
          <p>second div</p>
        </div>
      </>
    );
  }
}

export default App;

