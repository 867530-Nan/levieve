import React from 'react'
import './App.css'

import NavBar from './NavBar'
import Hero from './Hero'
import AboutMe from './AboutMe'
import Testimonials from './Testimonials'

class App extends React.Component {
  state = {}

  render() {
    return (
      <div>
        <Hero />
        <AboutMe />
        <Testimonials />
      </div>
    )
  }
}

export default App
