import React from 'react'
import './App.css'

import NavBar from './NavBar'
import Hero from './Hero'
import Services from './Services'
import Contact from './Contact'
import AboutMe from './AboutMe'
import Testimonials from './Testimonials'

class App extends React.Component {
  state = {}

  navFunc = s => {
    document.getElementById(s).scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  render() {
    return (
      <div>
        <Hero navFunc={this.navFunc} />
        <span id='aboutMe'>
          <AboutMe />
        </span>
        <span id='testimonials'>
          <Testimonials />
        </span>
        <span id='services'>
          <Services />
        </span>
        <span id='contact'>
          <Contact />
        </span>
      </div>
    )
  }
}

export default App
