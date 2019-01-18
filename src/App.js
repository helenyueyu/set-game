import React, { Component } from 'react'
import './App.css'

import array from './components/Model'
import Card from './components/Card'

class App extends Component {
  state = {
    setStack: array,
    currentStack: [],
    selected: Array(12).fill(false)
  }
  onClick = () => {
    console.log('hello')
  }
  render() {
    for (let i = 0; i < 12; i++) {
      this.state.currentStack.push(array[i])
    }
    console.log(this.state.selected[0])
    return (
      <div className="container">
        <div className="row">
          {this.state.currentStack.slice(0,4).map((x,idx) =>
            <Card key={idx} color={x.color} shape={x.shape} shade={x.shade} number={x.number} index={idx+1} />
          )}
        </div>
        <div className="row">
          {this.state.currentStack.slice(4,8).map((x,idx) =>
            <Card key={idx} color={x.color} shape={x.shape} shade={x.shade} number={x.number} index={idx+5}/>
          )}
        </div>
        <div className="row">
          {this.state.currentStack.slice(8,12).map((x,idx) =>
            <Card key={idx} color={x.color} shape={x.shape} shade={x.shade} number={x.number} index={idx+9}/>
          )}
        </div>
      </div>
    );
  }
}

export default App;
