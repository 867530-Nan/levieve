import React from "react";
import styled, { keyframes } from "styled-components";
import placeholder from "./images/5.jpg";
import "./testimonials.css";
import ChrisEllie from "./images/ChrisEllie.jpg";
import Maddie from "./images/MaddieEthan.jpg";
import Cele from "./images/clear-wine-glasses-with-gold-liquid-on-white-cloth-covered-2504941.jpg";
import WRTC from "./images/WRTC.jpg";
import silverwood from "./images/silverwood.jpg";
const PurpDiv = styled.div`
  height: initial;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const TopDiv = styled.div`
  display: flex;
  height: 150px;
  background-color: #553e4ceb;
  justify-content: center;
  align-items: center;
`;

const FirstCombo = styled.div`
  &:hover {
    transform: scale(1.1, 1.1);
    cursor: pointer;
  }
`;

const CardTopTextWrap = styled.div`
  min-height: 118px;
  display: flex;
  align-items: center;
`;

const Arrow = styled.h1`
  color: white;
  font-size: 45px;
  font-weight: 100;
`;

const TopComboWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

const TopDivText = styled.h1`
  font-size: 42px;
  font-family: Neoteric;
  color: white;
  font-weight: 300;
  text-align: center;
  margin: 0;

  @media (max-width: 550px) {
    font-size: 28px;
  }
`;

const TopDivBottomText = styled.p`
  font-family: Neoteric;
  color: white;
  margin: 0;
  font-weight: 300;
  text-align: center;
`;

const CardLine = styled.div`
  background-color: #553e4ceb;
  width: 30%;
  height: 1px;
  margin: 0 auto;
`;

const slideAnimation = props => keyframes`
  from {
    transform: translate3d(-${props.fromNumber}, 0, 0);
  }

  to {
    transform: translate3d(-${props.toNumber}px, 0, 0);
  }
`;

const BottomDiv = styled.div`
  background: linear-gradient(180deg, #f6f7f5 10%, #f6f7f5 10%);

  height: initial;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const CardWrap = styled.div`
  display: flex;
  justify-content: center;
  min-width: 400px;
  margin: 50px;
  height: 450px;
  @media (max-width: 450px) {
    margin: 0 auto;
  }
`;

const SingleCard = styled.div`
  background-color: white;
  box-shadow: 0 0px 15px -7px black;
  width: 100%;
  border-radius: 3px;
  max-width: 400px;
  min-height: 700px;
  margin: 50px;
  padding: 0 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 1038px) {
    max-width: 500px;
  }
`;

const CardFirstText = styled.h1`
  text-align: center;
  font-weight: 500;
  white-space: pre-line;
  word-wrap: break-word;
  font-family: Neoteric;
`;

const CardSecondText = styled.h4`
  text-align: center;
  font-family: Helvetica;
  font-weight: 300;
  width: 95%;
  white-space: pre-line;
  word-wrap: break-word;
  min-height: 200px;
  display: flex;
  align-items: center;
`;

const CardDateLocation = styled.img`
  max-width: 80%;
`;

class Testimonials extends React.Component {
  state = {
    fromNumber: 0,
    toNumber: 0,
    translateNumber: 0,
    testCards: [
      {
        name: "The Graduate Hotel",
        text:
          "The fact that I never knew I miscounted tables for centerpieces and you were able to troubleshoot without hesitation just reassures that you are the best at what you do and that we are so thankful we had you there! Thank you, thank you, thank you.\n\n- Ellie & Chris -",
        image: ChrisEllie
      },
      {
        name: "Silverwood Park\nThree Rivers Parks",
        text:
          "Cheri knew exactly what I was looking for. Without her and her vision my wedding wouldn’t have turned out half as beautiful! All I had to do was send a few pictures of what I envisioned, and Cheri brought it to life.\n\n- Maddie & Ethan -",
        image: silverwood
      },
      {
        name: "The Metropolitan Event Center",
        text:
          "I had the pleasure of planning our large corporate holiday party with Cheri for a handful of years. Her organization, imagination and resourcefulness were key to designing and pulling off the large events. Cheri has an “anything is possible” attitude and can bring your party visions to life.\n\n- Renee -",
        image: Cele
      },
      {
        name: "Mother-of-the-Bride Gratitude",
        text:
          "Cheri was a joy to be around and made everyone feel at ease. Her planning skills and attention to every single detail is exactly what you hope for in a wedding coordinator. As the mother-of-the bride I was able to relax and enjoy every moment of the memorable day.\n\n- Jeanne -",
        image: Maddie
      },
      {
        name: "Women Run the Cities",
        text:
          "Cheri worked with us years ago at the start of what was to become Women Run the Cities Race. She was a key player helping propel the race from 900 to 4000 participants! We are thrilled to see her in the event coordinator business.\n\n- Meghan & Cathy -",
        image: WRTC
      }
    ],
    scroller: "",
    scrollNumber: 0,
    cardWidth: window.innerWidth * 0.5,
    cardMargin: window.innerWidth * 0.1
  };

  componentDidMount() {
    console.log(window.innerWidth);
    const gotIt = document.getElementById("bottomScroller");
    this.myTimer = setTimeout(() => {
      this.rightClick();
    }, 8500);
    if (window.innerWidth < 768) {
      this.setState(s => {
        return {
          testCards: s.testCards.splice(0, 2)
        };
      });
    }
  }

  rightClick = () => {
    clearTimeout(this.myTimer);
    const gotIt = document.getElementById("bottomScroller");
    if (this.state.scrollNumber !== this.state.testCards.length - 2) {
      // gotIt.classList.add('slideLeft')

      this.setState(s => {
        return {
          scrollNumber: s.scrollNumber + 1,
          fromNumber: s.toNumber,
          toNumber: s.toNumber + s.cardWidth
        };
      });
      setTimeout(() => {
        this.setState(s => {
          return { translateNumber: s.translateNumber + s.cardWidth };
        });
      }, 1000);
      // setTimeout(() => {
      // }, 1000)
    }
  };

  leftClick = () => {
    clearTimeout(this.myTimer);
    const gotIt = document.getElementById("bottomScroller");
    if (
      this.state.scrollNumber !== 0 &&
      this.state.testCards.length > 2 &&
      this.state.scrollNumber < this.state.testCards.length - 1
    ) {
      console.log("cool stuf");
      // gotIt.classList.add('slideRight')
      // setTimeout(() => {
      this.setState(s => {
        return {
          scrollNumber: s.scrollNumber - 1,
          fromNumber: s.toNumber,
          toNumber: s.toNumber - s.cardWidth
        };
      });
      setTimeout(() => {
        this.setState(s => {
          return {
            translateNumber: s.translateNumber - s.cardWidth
          };
        });
      }, 1000);
      // }, 1000)
    }
  };

  render() {
    return (
      <PurpDiv>
        <TopDiv>
          <TopDivText>Testimonials</TopDivText>
        </TopDiv>
        <BottomDiv>
          {this.state.testCards.map((s, i) => {
            return (
              <SingleCard>
                <CardTopTextWrap>
                  <CardFirstText>{s.name}</CardFirstText>
                </CardTopTextWrap>
                <CardDateLocation src={s.image} />
                <CardSecondText>{s.text}</CardSecondText>
              </SingleCard>
            );
          })}
        </BottomDiv>
      </PurpDiv>
    );
  }
}

export default Testimonials;
