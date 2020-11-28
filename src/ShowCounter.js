import logo from './logo.svg';
import './App.css';
import React from 'react';

function ShowCounter(props) {
  // console.log(data);
  const childClick=()=>{
     props.handleClick("Phani");
  }  
    return (
        <div>
            <p>{props.counter}</p> 
            <button onClick={childClick}>click on me</button> 
        </div>
    );
}

export default ShowCounter;
