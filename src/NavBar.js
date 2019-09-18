import React from 'react'
import styled from 'styled-components'
import './NavBar.css'

const WrapperDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 100%;
`

const MobileWrapperDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;

  &:hover {
    cursor: pointer;
    transform: scale(1.1, 1.1);
  }
`

const WrapperDesktopDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 8px;
  height: 50px;
  width: ${props => props.width};
  border-right: ${props => props.borderRight};
`

const DesktopNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;

  @media (max-width: 768px) {
    display: none;
  }
`

const MobileNav = styled.div``

const MobileNavButton = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 50px;
  height: 50px;

  &:hover {
    cursor: pointer;
    transform: scale(1.1, 1.1);
  }

  @media (max-width: 768px) {
    display: flex;
  }
`

const XDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  height: 50px;
  width: 50px;

  &:hover {
    cursor: pointer;
    transform: scale(1.1, 1.1);
  }
`

const Text = styled.h1`
  font-weight: 100;
`

const SmallText = styled.h1`
  font-weight: 100;
`

class NavBar extends React.Component {
  state = {
    mobileOpen: false,
    navLinks: [
      { func: () => console.log('About'), name: 'About' },
      { func: () => console.log('Services'), name: 'Services' },
      { func: () => console.log('Testimonials'), name: 'Testimonials' },
      { func: () => console.log('Contact'), name: 'Contact' }
    ]
  }
  displayMobileNav() {
    return (
      <MobileNav className={this.state.mobileOpen ? 'mobileNav showMobile' : 'mobileNav'}>
        <XDiv onClick={() => this.setState({ mobileOpen: false })}>X</XDiv>
        {this.renderMobileNav()}
      </MobileNav>
    )
  }

  renderMobileNav() {
    return this.state.navLinks.map((s, i) => {
      return (
        <MobileWrapperDiv onClick={s.func} key={i * Math.random()}>
          <SmallText>{s.name}</SmallText>
        </MobileWrapperDiv>
      )
    })
  }

  displayDesktopNav() {
    return this.state.navLinks.map((s, i) => {
      const width = 100 / this.state.navLinks.length
      return (
        <WrapperDesktopDiv
          onClick={s.func}
          key={i * Math.random()}
          borderRight={i !== this.state.navLinks.length - 1 ? '1px solid black' : null}
          width={`${width}%`}
        >
          <Text>{s.name}</Text>
        </WrapperDesktopDiv>
      )
    })
  }

  render() {
    return (
      <WrapperDiv>
        <DesktopNav>{this.displayDesktopNav()}</DesktopNav>
        <MobileNavButton
          onClick={() => this.setState({ mobileOpen: !this.state.mobileOpen })}
        >
          X
        </MobileNavButton>
        {this.displayMobileNav()}
      </WrapperDiv>
    )
  }
}

export default NavBar
