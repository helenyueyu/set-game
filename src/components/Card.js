import React, { Component } from 'react'
import './Card.css'

let chooseShape = (x) => {
  let shape = ''
  if (x === 'oval') {
    shape = 'fa-circle'
  } else if (x === 'diamond') {
    shape = 'fa-square'
  } else {
    shape = 'fa-star'
  }
  return shape
}

let chooseShade = (x) => {
  let shade = ''
  if (x === 'empty') {
    shade = 'far'
  } else if (x === 'dashed') {
    shade = 'fas opaque'
  } else {
    shade = 'fas'
  }
  return shade
}

class Card extends Component {
  state = {
    selected: false
  }
  onClick = () => {
    this.setState({
      selected: !this.state.selected
    })
  }
  render() {
    const card = <i className={chooseShade(this.props.shade) + ' ' + chooseShape(this.props.shape) + ' ' + this.props.color}></i>
    return (
          <div className={(this.state.selected === false) ? 'card' : 'selected-card'} onClick={this.onClick}>
          {(this.props.number === 1) ?
          <h1 className="vertical shiftdown">
            {card}{this.props.index}
          </h1> : (this.props.number === 2) ?
          <h1 className="vertical">
            {card}{card}{this.props.index}
          </h1> :
          <h1 className="vertical shiftup">
            {card}{card}{card}{this.props.index}
          </h1>}
          </div>
    )
  }
}

export default Card
