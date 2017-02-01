import React, { Component, PropTypes } from 'react'

const Pane = ({name, color, changeColor, isUpdating, height}) => {
  const style = {
    height: height,
    opacity: isUpdating ? 0.4 : 1.0,
    backgroundColor: color
  }

  return (
    <div>
      <h1 style={style} onClick={changeColor}>
        {isUpdating ? 'updating...' : color + ' ' + name}
      </h1>
    </div>
  )
}

Pane.propTypes = {
  isUpdating: PropTypes.bool,
  name: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  changeColor: PropTypes.func.isRequired
}

export default Pane
