import React, { Component, PropTypes } from 'react'

const Body = ({color, changeColor}) => {
  const bodyStyle = {
    height: '300px',
    backgroundColor: color
  }
  return (
    <div>
      <h1 style={bodyStyle} onClick={changeColor}>{color} body</h1>
    </div>
  )
}

Body.propTypes = {
  color: PropTypes.string.isRequired,
  changeColor: PropTypes.func.isRequired
}

export default Body
