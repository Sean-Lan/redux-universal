import React, { Component, PropTypes } from 'react'

const Footer = ({color, changeColor}) => {
  const footerStyle = {
    height: '100px',
    backgroundColor: color
  }
  return (
    <div>
      <h1 style={footerStyle} onClick={changeColor}>{color} footer</h1>
    </div>
  )
}

Footer.propTypes = {
  color: PropTypes.string.isRequired,
  changeColor: PropTypes.func.isRequired
}

export default Footer

