import React from 'react'
import styled from 'styled-components'
import './NavBar.css'
import Logo from './mattLogoEdits.png'

const MobileNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  height: 100vh;
  flex-direction: column;
  width: 25%;
  background: rgba(255, 255, 255, 0.5);
`

const ImageDiv = styled.div`
  width: 75%;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  margin-top: 50px;
`
const AdjustedImage = styled.img`
  width: 100%;
  border-radius: 50%;
`

const LinkDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 50%;
`

const StyledMenuXSpan = styled.span`
  width: 22px;
  height: 2px;
  background-color: black;
`

const WrapperDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 25%;
`

const MobileWrapperDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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

const MobileNavButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  top: 10%;
  right: 10%;
  width: 25px;
  height: 25px;

  &:hover {
    cursor: pointer;
    transform: scale(1.05, 1.05);
  }

  @media (max-width: 768px) {
  }
`

const XDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
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
    mobileOpen: true,
    navLinks: [
      { func: () => console.log('About'), name: 'About' },
      { func: () => console.log('Services'), name: 'Services' },
      { func: () => console.log('Testimonials'), name: 'Testimonials' },
      { func: () => console.log('Contact'), name: 'Contact' }
    ]
  }
  displayMobileNav() {
    return
  }

  tessaLikeMyMouth() {}

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
      <MobileNav className={this.state.mobileOpen ? 'mobileNav showMobile' : 'mobileNav'}>
        {/* <XDiv onClick={() => this.setState({ mobileOpen: false })}>X</XDiv> */}
        <LinkDiv>{this.renderMobileNav()}</LinkDiv>
        <ImageDiv>
          <AdjustedImage src={Logo} />
        </ImageDiv>
      </MobileNav>
    )
  }
}

export default NavBar
