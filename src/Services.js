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

const EventWrap = styled.div`
  flex-direction: column;
  width: 100%;
  &:hover {
    background-color: #d8d6d6;
    cursor: pointer;
  }
`;

const EHD = styled.div`
  width: 100%;
  background-color: ${props => props.backgroundColor};
  &:hover {
  }
`;

const EventHeader = styled.h1`
  color: #553e4ceb;
  font-family: helvetica;
  font-weight: 300;
  text-align: center;

  &:hover {
    cursor: pointer;
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

class Services extends React.Component {
  state = { open: 0 };
  displayEvents = () => {
    return (
      <EventWrap
        onClick={
          this.state.open === 1 ? () => this.setState({ open: 0 }) : null
        }
      >
        <EventHeader
          onClick={
            this.state.open === 0 || this.state.open === 2
              ? () => this.setState({ open: 1 })
              : () => this.setState({ open: 0 })
          }
          backgroundColor={this.state.open === 1 ? "#d8d6d6" : null}
        >
          {this.state.open === 1 ? "-" : "+"}&nbsp;Event Services&nbsp;
          {this.state.open === 1 ? "-" : "+"}
        </EventHeader>

        {this.state.open === 1 ? <EventsExpansion /> : null}
      </EventWrap>
    );
  };
  displayWeddings = () => {
    return (
      <EventWrap
        onClick={
          this.state.open === 2 ? () => this.setState({ open: 0 }) : null
        }
      >
        <EventHeader
          onClick={
            this.state.open === 0 || this.state.open === 1
              ? () => this.setState({ open: 2 })
              : () => this.setState({ open: 0 })
          }
          backgroundColor={this.state.open === 2 ? "#d8d6d6" : null}
        >
          {this.state.open === 2 ? "-" : "+"}&nbsp;Wedding Services&nbsp;
          {this.state.open === 2 ? "-" : "+"}
        </EventHeader>

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
        {this.displayWeddings()}
        {this.displayEvents()}
      </PageWrap>
    );
  }
}

export default Services;
