import React from "react";
import styled from "styled-components";

const PageWrap = styled.div`
  height: 150px;
  width: 100%;
  background-color: #fdf3f3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PageText = styled.h1`
  font-weight: 100;
  font-family: ${props => props.fS};
  text-align: center;
  font-size: 42px;
  width: 100%;
  margin: auto 0;
  cursor: ${props => props.fP};
`;

const SecondaryText = styled.h5`
  width: 100%;
  margin: auto 0;
  text-align: center;
  font-family: ${props => props.fS};
  cursor: ${props => props.fP};
`;

const Divider = styled.div`
  height: 10px;
  width: 75%;
  color: black;
  margin: 0;
`;

class SendAMesasge extends React.Component {
  state = { hover: false };

  render() {
    const options = {
      accessToken: "access...",
      clientId: "client...",
      get: "user", // popular, user
      locationId: null,
      resolution: "standard_resolution", // thumbnail, low_resolution, standard_resolution
      sortBy: "none", // none, least-commented, least-liked, least-recent, most-commented, most-liked, most-recent, random
      tagName: null,
      userId: 123
    };

    return (
      <PageWrap
        onClick={() => this.props.navFunc("contact")}
        onMouseEnter={() => this.setState({ hover: true })}
        onMouseLeave={() => this.setState({ hover: false })}
      >
        <PageText
          fS={this.state.hover ? "Neoteric-Bold" : "Neoteric"}
          fP={this.state.hover ? "pointer" : "initial"}
        >
          &#8609; Say Hello! &#8609;
        </PageText>
        <Divider />
        <SecondaryText
          fS={this.state.hover ? "Neoteric-Bold" : "Neoteric"}
          fP={this.state.hover ? "pointer" : "initial"}
        >
          (click to message)
        </SecondaryText>
      </PageWrap>
    );
  }
}

export default SendAMesasge;
