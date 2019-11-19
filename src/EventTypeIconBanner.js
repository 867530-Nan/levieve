import React from "react";
import styled from "styled-components";
import dress from "./images/dress.png";
import ornament from "./images/ornament3.png";
import gradcap from "./images/gradcap.png";
import racer from "./images/finish.png";

const PageWrap = styled.div`
  min-height: 300px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #5d654a;
  padding: 50px 0;
`;

const SingleIcon = styled.div`
  width: 30%;
  min-width: 300px;
  max-width: 450px;
  min-height: 150px;
  margin: 10px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 8px -4px #553d4b;
  background-color: white;
  border-radius: 2px;
`;

const ImageWrap = styled.div`
  width: 25%;
  display: flex;
  justify-content: center;
`;

const IconImage = styled.img`
  width: 100%;
  max-width: 80px;
`;

const IconText = styled.h1`
  font-family: Neoteric;
  white-space: pre;
  text-align: center;

  width: 75%;
`;

class EventTypeIconBanner extends React.Component {
  render() {
    const icons = [
      { image: dress, text: "Weddings" },
      { image: ornament, text: "Holiday Parties" },
      { image: gradcap, text: "Open Houses" },
      { image: racer, text: "Fundraisers" }
    ];
    return (
      <PageWrap>
        {icons.map(s => {
          return (
            <SingleIcon>
              <ImageWrap>
                <IconImage src={s.image} />
              </ImageWrap>
              <IconText>{s.text}</IconText>
            </SingleIcon>
          );
        })}
      </PageWrap>
    );
  }
}

export default EventTypeIconBanner;
