import React from "react";
import styled, { keyframes } from "styled-components";
import "./testimonials.css";
const PurpDiv = styled.div`
  height: 700px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const TopDiv = styled.div`
  display: flex;
  height: 30%;
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
  background: linear-gradient(180deg, #758972 10%, #758972 10%);

  height: 70%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: ${props => props.width}px;
  animation: ${props => slideAnimation(props)} 1s linear;
  transform: translate3d(-${props => props.translateNumber}px, 0, 0);
`;

const CardWrap = styled.div`
  display: flex;
  justify-content: center;
  width: ${props => props.width}px;
  margin: 0 50px;
  height: 450px;

  @media (max-width: 450px) {
    margin: 0 auto;
    width: initial;
  }
`;

const SingleCard = styled.div`
  background-color: white;
  box-shadow: 0 0px 15px -7px black;
  width: 100%;
  border-radius: 3px;
  max-width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CardFirstText = styled.h1`
  text-align: center;
  font-weight: 500;
  font-family: Neoteric;
`;

const CardSecondText = styled.h4`
  text-align: center;
  font-family: Helvetica;
  font-weight: 500;
  width: 95%;
  min-height: 200px;
  display: flex;
  align-items: center;
`;

const CardDateLocation = styled.h4`
  font-weight: 500;
  font-family: Helvetica;
  font-style: italic;
`;

class Testimonials extends React.Component {
  state = {
    fromNumber: 0,
    toNumber: 0,
    translateNumber: 0,
    testCards: [
      {
        name: "Maddie + Ethan",
        text:
          "Even though I hadn’t gotten the chance to meet with Cheri before my wedding, she knew exactly what I was looking for. Without her and her vision my wedding wouldn’t have turned out half as beautiful! All I had to do was send a few pictures of what I envisioned, and Cheri brought it to life. I knew I could trust Cheri to get everything done and without any questions. My wedding day was absolutely perfect, thanks to Cheri.",
        secondaryText: "Silverwood Park - Minneapolis"
      },
      {
        name: "Ellie + Chris",
        text:
          "Cheri I cannot thank you enough for everything you did for our wedding. It put me at ease the day-of knowing that everything was in good hands and that you were there to take care of anything that came up! The fact that I never knew I miscounted tables for centerpieces and you were able to troubleshoot without hesitation just reassures that you are the best at what you do and that we are so thankful we had you there! Thank you, thank you, thank you.",
        secondaryText: "The Graduate Hotel"
      },
      {
        name: "Jeanne",
        text:
          "Cheri was a joy to be around and made everyone feel at ease. Her planning skills and attention to every single detail is exactly what you hope for in a wedding coordinator. As the mother-of-the bride I was able to relax and enjoy every moment of the memorable day.",
        secondaryText: "Silverwood Park - Minneapolis"
      },
      {
        name: "Meghan + Cathy",
        text:
          "We are so excited to learn that Cheri had gotten into the wedding / event planning space. She worked with us years ago at the start of what was to become Women Run the Cities Race in the Twin Cities and was a key player in the organization and it is operations which helped propel the race into record setting attendance. She is highly organized, strategic and cool under pressure – perfect qualities to lead LeVieve Events! Congrats Cheri",
        secondaryText: "Women Run the Cities - Minneapolis"
      },
      {
        name: "Renee",
        text:
          "I had the pleasure of planning our large corporate holiday party with Cheri for a handful of years. Her organization, imagination and resourcefulness were key to designing and pulling off the large events. Cheri has an “anything is possible” attitude and can bring your party visions to life. I greatly appreciated Cheri’s professionalism, energy and dependability during those planning months and especially on the day of the event.",
        secondaryText: "The Metropolitan Events Center"
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
    if (window.innerWidth < 850) {
      this.setState({ scroller: gotIt, cardWidth: window.innerWidth });
    } else {
      this.setState({ scroller: gotIt, cardWidth: window.innerWidth * 0.5 });
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
          <FirstCombo onClick={this.leftClick}>
            <Arrow>&#8592;</Arrow>
          </FirstCombo>
          <TopComboWrapper>
            <TopDivText>Testimonials</TopDivText>
            <TopDivBottomText>FROM PAST EVENTS</TopDivBottomText>
          </TopComboWrapper>
          <FirstCombo onClick={this.rightClick}>
            <Arrow>&#8594;</Arrow>
          </FirstCombo>
        </TopDiv>
        <BottomDiv
          id="bottomScroller"
          width={
            this.state.testCards.length > 2
              ? this.state.testCards.length * this.state.cardWidth
              : "100%"
          }
          scrollNumber={this.state.scrollNumber * this.state.cardWidth}
          fromNumber={this.state.fromNumber}
          toNumber={this.state.toNumber}
          translateNumber={this.state.translateNumber}
        >
          {this.state.testCards.map((s, i) => {
            return (
              <CardWrap
                marginLeft={i === 0 ? "100px" : null}
                width={this.state.cardWidth}
              >
                <SingleCard cardMargin={this.state.cardMargin * 0.5}>
                  <CardFirstText>{s.name}</CardFirstText>
                  <CardLine />
                  <CardSecondText>{s.text}</CardSecondText>
                  <CardLine />
                  <CardDateLocation>{s.secondaryText}</CardDateLocation>
                </SingleCard>
              </CardWrap>
            );
          })}
        </BottomDiv>
      </PurpDiv>
    );
  }
}

export default Testimonials;
