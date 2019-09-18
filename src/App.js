import React from 'react'
import './App.css'
import Logo from './mattLogoEdits.png'
import NavBar from './NavBar'

class App extends React.Component {
  state = {}

  render() {
    return (
      <div className='App'>
        <NavBar />
        <img src={Logo} className='logo' />
      </div>
    )
  }
}

export default App
