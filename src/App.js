import React, { Component } from 'react';
import './App.css';

import array from './components/Model'
import Card from './components/Card'

class App extends Component {
  render() {
    console.log(array)
    return (
      <div className="App">
        {array[0].color}
      </div>
    );
  }
}

export default App;
