import React, { Component, PropTypes } from 'react'
import Head from './Head'
import Body from './Body'
import Footer from './Footer'

const App = ({headColor, bodyColor, footerColor, 
  headChangeColor, bodyChangeColor, footerChangeColor}) => {
  return (
    <div>
      <Head color={headColor} changeColor={headChangeColor}/>
      <Body color={bodyColor} changeColor={bodyChangeColor}/>
      <Footer color={footerColor} changeColor={footerChangeColor}/>
    </div>
  )
}

App.propTypes = {
  headColor: PropTypes.string.isRequired,
  bodyColor: PropTypes.string.isRequired,
  footerColor: PropTypes.string.isRequired,
  headChangeColor: PropTypes.func.isRequired,
  bodyChangeColor: PropTypes.func.isRequired,
  footerChangeColor: PropTypes.func.isRequired
}

export default App

