import React from "react";
import styled from "styled-components";
import blahblah from "../package.json";
import Instagram from "./images/instagram-logo.png";
const PageWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
  background-color: #758972;
`;

const Line = styled.div`
  height: 1px;
  width: 75%;
  background-color: white;
`;

const Title = styled.h1`
  font-family: Neoteric;
  text-align: center;
  font-weight: 100;
  color: black;
  font-size: 26px;
  margin: 0;
`;

const FTitle = styled.h1`
  font-family: Neoteric;
  margin: 0;
  text-align: center;
  font-weight: 100;
  color: black;
  font-size: 24px;
`;

const SmallTitle = styled.span`
  font-family: Lato;
  font-weight: 100;
  font-size: 14px;
`;

const Version = styled.h1`
  font-family: Lato;
  font-weight: 100;
  color: white;
  font-size: 16px;
`;

const Arrow = styled.div`
  font-size: 30px;
  color: color;

  &:hover {
    cursor: pointer;
    transform: scale(1.1, 1.1);
  }
`;

const BL = styled.h3`
  font-family: Neoteric;
  font-size: 20px;
  font-weight: 400;
  margin: 0;
  color: white;
`;

const InstagramAnchor = styled.a`
  color: black;
  text-decoration: none;
  font-size: 24px;
  font-weight: 300;
  font-family: Neoteric
  max-width: 40px;

  &:hover {
    cursor: pointer;
    transform: scale(1.1,1.1);
  }
`;
const InstaPhoto = styled.img`
  width: 100%;
`;
class Footer extends React.Component {
  render() {
    return (
      <PageWrap>
        <Arrow
          onClick={() => window.scroll({ top: 0, left: 0, behavior: "smooth" })}
        >
          &#8593;
        </Arrow>
        <Title>Believe ~ LeVieve</Title>
        <InstagramAnchor
          target="_blank"
          href="https://www.instagram.com/levieve_events/"
        >
          <InstaPhoto src={Instagram} />
        </InstagramAnchor>
      </PageWrap>
    );
  }
}

export default Footer;
