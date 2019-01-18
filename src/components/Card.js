import React from 'react'
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

const Card = (props) => {
  const card = <i className={chooseShade(props.shade) + ' ' + chooseShape(props.shape) + ' ' + props.color}></i>
  return (
    <div className="card">
      {(props.number === 1) ? <h1 className="vertical shiftdown">{card}</h1> : (props.number === 2) ? <h1 className="vertical">{card}{card}</h1> : <h1 className="vertical shiftup">{card}{card}{card}</h1>}
    </div>
  )
}

export default Card
