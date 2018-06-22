import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'antd';

class Butt extends React.Component{

  onClick = () => {
    
    $.ajax({
      url: "test",
      type: "GET",
      success: function(data) {
        console.log(data['test']);
      },
      error: function(error) {
        console.log(error);
      }
    });
  
  };

  render() {
    return(
      <Button type="primary" onClick={this.onClick}>Primary</Button>
      )
  }

}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
 
          <Butt />

        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;