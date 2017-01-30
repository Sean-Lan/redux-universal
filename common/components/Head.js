import React, { Component, PropTypes } from 'react'

const Head = ({color, changeColor}) => {
  const headStyle = {
    height: '100px',
    backgroundColor: color
  }
  return (
    <div>
      <h1 style={headStyle} onClick={changeColor}>{color} head</h1>
    </div>
  )
}

Head.propTypes = {
  color: PropTypes.string.isRequired,
  changeColor: PropTypes.func.isRequired
}

export default Head
