import React from "react";
import styled from "styled-components";
import JSON from "../package.json";

const PageWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
  background-color: #435840;
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
  color: white;
  font-size: 26px;
  margin: 0;
`;

const FTitle = styled.h1`
  font-family: Neoteric;
  margin: 0;
  text-align: center;
  font-weight: 100;
  color: white;
  font-size: 24px;
`;

const SmallTitle = styled.span`
  font-family: Lato;
  font-weight: 100;
  color: white;
  font-size: 22px;
`;

const Version = styled.h1`
  font-family: Lato;
  font-weight: 100;
  color: white;
  font-size: 16px;
`;

const Arrow = styled.div`
  font-size: 30px;
  color: white;

  &:hover {
    cursor: pointer;
    transform: scale(1.05, 1.05);
  }
`;

const BL = styled.h3`
  font-family: Neoteric;
  font-size: 20px;
  font-weight: 400;
  margin: 0;
  color: white;
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
        <FTitle>Twin Cities, MN</FTitle>
        <Title>
          Believe ~ LeVieve
          <br />
          <SmallTitle>&#169; 2019</SmallTitle>
        </Title>
      </PageWrap>
    );
  }
}

export default Footer;
