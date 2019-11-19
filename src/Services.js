import React from "react";
import styled from "styled-components";
import WeddingExpansion from "./WeddingExpansion";
import EventsExpansion from "./EventsExpansion";

const EventWrap = styled.div`
  flex-direction: column;
  width: 100%;
  &:hover {
    background-color: #553e4cc7;
    cursor: pointer;
  }
`;

const EHD = styled.div`
  width: 100%;
  &:hover {
  }
`;

const EventHeader = styled.h1`
  color: white;
  font-family: helvetica;
  font-weight: 300;
  text-align: center;

  &:hover {
    cursor: pointer;
  }
`;

const PageWrap = styled.div`
  height: initial;
  background-color: #553e4ceb;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TopWrap = styled.div``;

const Header = styled.h1`
  font-family: Neoteric;
  color: white;
`;

const TopText = styled.h2`
  color: white;
  font-family: Neoteric-Bold;
  text-align: center;
`;
const SecText = styled.h2`
  color: white;
  font-family: Neoteric;
  font-size: 30px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 24px;
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
        <EHD
          onClick={
            this.state.open === 0 || this.state.open === 2
              ? () => this.setState({ open: 1 })
              : () => this.setState({ open: 0 })
          }
        >
          <EventHeader>
            {this.state.open === 1 ? "-" : "+"}&nbsp;Event Services&nbsp;
            {this.state.open === 1 ? "-" : "+"}
          </EventHeader>
        </EHD>
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
        <EHD
          onClick={
            this.state.open === 0 || this.state.open === 1
              ? () => this.setState({ open: 2 })
              : () => this.setState({ open: 0 })
          }
        >
          <EventHeader>
            {this.state.open === 2 ? "-" : "+"}&nbsp;Wedding Services&nbsp;
            {this.state.open === 2 ? "-" : "+"}
          </EventHeader>
        </EHD>
        {this.state.open === 2 ? <WeddingExpansion /> : null}
      </EventWrap>
    );
  };
  render() {
    return (
      <PageWrap>
        <Header>My Offerings</Header>
        <hr style={{ width: "50%" }} />
        <SecText>
          Your Dreams + Details = Memorable + Worry-free experience
        </SecText>
        {this.displayWeddings()}
        {this.displayEvents()}
      </PageWrap>
    );
  }
}

export default Services;
