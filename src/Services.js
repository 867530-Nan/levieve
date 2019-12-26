import React from "react";
import styled from "styled-components";
import WeddingExpansion from "./WeddingExpansion";
import EventsExpansion from "./EventsExpansion";

const PageWrap = styled.div`
  height: initial;
  background: radial-gradient(
      circle,
      transparent 20%,
      white 20%,
      white 80%,
      transparent 80%,
      transparent
    ),
    radial-gradient(
        circle,
        transparent 20%,
        white 20%,
        white 80%,
        transparent 80%,
        transparent
      )
      50px 50px,
    linear-gradient(#553e4c0f 4px, transparent 8px) 0 -4px,
    linear-gradient(90deg, #553e4c0f 4px, transparent 8px) -4px 0;
  background-color: white;
  background-size: 100px 100px, 100px 100px, 50px 50px, 50px 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const VerticalDivide = styled.div`
  width: 1px;
  background-color: #553e4c;
  height: 250px;
`;

const ExpanderWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const EventWrap = styled.div`
  flex-direction: column;
  width: ${props => props.width};
  height: ${props => props.height};
  display: flex;
  justify-content: center;
  background-color: ${props => props.backgroundColor};
  &:hover {
    background-color: ${props => props.hB}
    cursor: pointer;
  }
`;

const EventHeader = styled.h1`
  color: #553e4ceb;
  font-family: helvetica;
  font-weight: 300;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 26px;
    padding: 0 10px;
  }
`;

const TopWrap = styled.div``;

const Header = styled.h1`
  font-family: Neoteric;
  color: #553e4ceb;
`;

const TopText = styled.h2`
  color: #553e4ceb;
  font-family: Neoteric-Bold;
  text-align: center;
`;
const SecText = styled.h2`
  color: #553e4ceb;
  font-family: Neoteric Bold;
  font-size: 24px;
  padding: 0;
  padding: 0 30px;
  font-weight: 500;
  text-align: center;
  max-width: 1000px;

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

const BackWrap = styled.div`
  height: 100px;
  width: 100%;
  background-color: #7589728c;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #7672898c;
    cursor: pointer;
  }
`;
const BackText = styled.h1`
  color: black;
  font-family: Neoteric;
  font-weight: 700;
  text-align: center;
`;

class Services extends React.Component {
  state = { open: 0 };
  showBack() {
    return (
      <BackWrap onClick={() => this.setState({ open: 0 })}>
        <BackText>- Back -</BackText>
      </BackWrap>
    );
  }

  displayEvents = () => {
    return (
      <EventWrap
        hB={this.state.open === 1 ? null : "#d8d6d6"}
        height={this.state.open === 1 ? "initial" : "250px"}
        onClick={
          this.state.open === 0 || this.state.open === 2
            ? () => this.setState({ open: 1 })
            : () => this.setState({ open: 0 })
        }
        width={
          this.state.open === 1 ? "100%" : this.state.open === 2 ? "0" : "50%"
        }
        backgroundColor={this.state.open === 1 ? null : "white"}
      >
        <EventHeader>Event Services</EventHeader>

        {this.state.open === 1 ? <EventsExpansion /> : null}
      </EventWrap>
    );
  };
  displayWeddings = () => {
    return (
      <EventWrap
        hB={this.state.open === 2 ? null : "#d8d6d6"}
        height={this.state.open === 2 ? "initial" : "250px"}
        onClick={
          this.state.open === 0 || this.state.open === 1
            ? () => this.setState({ open: 2 })
            : () => this.setState({ open: 0 })
        }
        width={
          this.state.open === 2 ? "100%" : this.state.open === 1 ? "0" : "50%"
        }
        backgroundColor={this.state.open === 2 ? null : "white"}
      >
        <EventHeader>Wedding Services</EventHeader>

        {this.state.open === 2 ? <WeddingExpansion /> : null}
      </EventWrap>
    );
  };

  render() {
    return (
      <PageWrap>
        <Header>Services</Header>
        <hr style={{ width: "50%" }} />
        <SecText>
          I love planning and celebrating life’s happiest moments. Having
          LeVieve Events as your day-of coordinator gives you the day off to
          enjoy each and every moment. Let me manage the logistics, the
          questions and any unexpected surprises. Relax, have fun and leave the
          details to me!
        </SecText>
        {this.state.open != 0 ? this.showBack() : null}

        <ExpanderWrap>
          {this.displayWeddings()}
          {this.state.open === 0 ? <VerticalDivide /> : null}
          {this.displayEvents()}
        </ExpanderWrap>
      </PageWrap>
    );
  }
}

export default Services;
