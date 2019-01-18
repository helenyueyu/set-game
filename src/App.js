import React, { Component } from 'react'
import './App.css'

import array from './components/Model'
import Card from './components/Card'

class App extends Component {
  state = {
    setStack: array,
    currentStack: []
  }
  render() {
    for (let i = 0; i < 12; i++) {
      this.state.currentStack.push(array[i])
    }
    return (
      <div className="container">
        <div className="row">
          {this.state.currentStack.slice(0,4).map((x,idx) =>
            <Card key={idx} color={x.color} shape={x.shape} shade={x.shade} number={x.number}/>
          )}
        </div>
        <div className="row">
          {this.state.currentStack.slice(4,8).map((x,idx) =>
            <Card key={idx} color={x.color} shape={x.shape} shade={x.shade} number={x.number}/>
          )}
        </div>
        <div className="row">
          {this.state.currentStack.slice(8,12).map((x,idx) =>
            <Card key={idx} color={x.color} shape={x.shape} shade={x.shade} number={x.number}/>
          )}
        </div>
      </div>
    );
  }
}

export default App;
