import React from "react";
import styled from "styled-components";
import care from "./images/care.png";
import toast from "./images/toast.png";
import rings from "./images/engagement.png";
import gradcap from "./images/graduation-cap.png";
import racer from "./images/finish.png";
import funds from "./images/business.png";

const PageWrap = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 40px 0;
`;

const SingleIcon = styled.div`
  width: 33%;
  height: 100px;
  max-width: 441px;
  min-width: 250px;
  margin: 5px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 8px -3px #758972;
  background-color: white;
`;

const ImageWrap = styled.div`
  width: 25%;
  display: flex;
  justify-content: center;
  max-width 50px; 
  max-height: 50px;
`;

const IconImage = styled.img`
  width: 100%;
  max-width: 80px;
`;

const IconText = styled.h1`
  font-family: Neoteric;
  white-space: pre;
  text-align: center;
  font-size: 24px;
  width: 75%;
`;

class EventTypeIconBanner extends React.Component {
  render() {
    const icons = [
      { image: rings, text: "Weddings" },
      { image: toast, text: "Parties" },
      { image: gradcap, text: "Open Houses" },
      { image: care, text: "Charity Events" },
      { image: funds, text: "Fundraisers" },
      { image: racer, text: "Run/Walk Events" }
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
