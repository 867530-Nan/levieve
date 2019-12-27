import React from "react";
import styled from "styled-components";
import "./NavBar.css";
import Logo from "./images/origLogo.png";
import Instagram from "./images/instagram-logo.png";

const MobileNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  height: 100vh;
  flex-direction: column;
  width: 25%;
  background: rgba(255, 255, 255, 0.5);

  @media (max-width: 768px) {
    width: 50%;
  }
`;

const ImageDiv = styled.div`
  width: 90%;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  margin-top: 50px;
`;

const LogoWrap = styled.div`
  height: 300px;
  width: 300px;
  border-radius: 50%;
  background-color: white;
`;

const AdjustedImage = styled.img`
  width: 100%;
  max-width: 350px;
`;

const LinkDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50%;
`;

const StyledMenuXSpan = styled.span`
  width: 22px;
  height: 2px;
  background-color: black;
`;

const WrapperDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 25%;
`;

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
`;

const WrapperDesktopDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 8px;
  height: 50px;
  width: ${props => props.width};
  border-right: ${props => props.borderRight};
`;

const DesktopNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;

  @media (max-width: 768px) {
    display: none;
  }
`;

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
`;

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
`;

const Text = styled.h1`
  font-weight: 100;
`;

const SmallText = styled.h1`
  font-weight: 100;
  font-family: Neoteric;
`;

const InstaWrap = styled.a`
  max-width: 30px;
  &:hover {
    transform: scale(1.1, 1.1);
  }
`;
const InstaPhoto = styled.img`
  width: 100%;
`;

class NavBar extends React.Component {
  state = {
    mobileOpen: true,
    navLinks: [
      { anchor: "aboutMe", name: "About" },
      { anchor: "testimonials", name: "Testimonials" },
      { anchor: "services", name: "Services" },
      { anchor: "contact", name: "Contact" },
      { anchor: "insta", image: Instagram }
    ]
  };

  renderNavLinks() {
    return this.state.navLinks.map((s, i) => {
      if (s.anchor === "insta") {
        return (
          <InstaWrap
            target="_blank"
            href="https://www.instagram.com/levieve_events/"
          >
            <InstaPhoto src={s.image} />
          </InstaWrap>
        );
      } else {
        return (
          <MobileWrapperDiv
            onClick={
              s.anchor === "Journal"
                ? () => alert("* LeVeive Events Journal Coming Soon *")
                : () => this.props.navFunc(s.anchor)
            }
            key={i * Math.random()}
          >
            <SmallText>{s.name}</SmallText>
          </MobileWrapperDiv>
        );
      }
    });
  }

  render() {
    return (
      <MobileNav
        className={this.state.mobileOpen ? "mobileNav showMobile" : "mobileNav"}
      >
        <ImageDiv>
          <AdjustedImage src={Logo} />
        </ImageDiv>
        <LinkDiv>{this.renderNavLinks()}</LinkDiv>
      </MobileNav>
    );
  }
}

export default NavBar;
