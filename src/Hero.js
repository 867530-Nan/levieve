import React from 'react'
import styled from 'styled-components'
import NavBar from './NavBar'
import CoffeeFlower from './lev1.jpg'
import SplashContent from './SplashContent'

const AdjustedDiv = styled.div`
  height: 100vh;
  width: 100vw;
  background: url(${props => props.background}) no-repeat center center;
  background-size: cover;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`

class Hero extends React.Component {
  state = {}

  render() {
    return (
      <AdjustedDiv background={CoffeeFlower}>
        <NavBar navFunc={this.props.navFunc} />
        {/* <SplashContent /> */}
      </AdjustedDiv>
    )
  }
}

export default Hero
