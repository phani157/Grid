import logo from './logo.svg';
import './App.css';
import React from 'react';

function Grid(props) {
  // console.log(data);
    return (
      <div className="App">
          {props.tableName}
        <table>
            <tr><td>column1</td><td>column2</td></tr>
            <tr><td>column1</td><td>column2</td></tr>
            <tr><td>column1</td><td>column2</td></tr>
            <tr><td>column1</td><td>column2</td></tr>
        </table>
      </div>
    );
}

export default Grid;

