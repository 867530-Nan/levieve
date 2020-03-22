import React from "react";
import styled from "styled-components";
import Mom from "./Mom.jpg";
import Mom2 from "./images/CheriLeVieveEdited-24.jpg";
const PageWrap = styled.div`
  height: 600px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  border-top: 1px solid ${props => props.borderColor};
  border-bottom: 1px solid ${props => props.borderBottom};
  @media (max-width: 880px) {
    height: initial;
    flex-direction: column;
  }
`;

const First = styled.div`
  width: 30%;
  height: 75%;
  border-bottom: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-end;

  @media (max-width: 880px) {
    align-items: center;
    border: none;
    width: 85%;
  }
`;

const Second = styled.div`
  width: 25%;
  height: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 25px;
  @media (max-width: 880px) {
    width: 80%;
  }
`;

const Third = styled.div`
  width: 30%;
  height: 75%;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid black;

  @media (max-width: 880px) {
    border: none;
    width: 85%;
  }
`;

const MomImage = styled.img`
  width: 100%;
  min-width: 250px;
  max-width: 330px;
  border-radius: ${props => props.borderRadius};

  @media (max-width: 880px) {
    min-width: 100px;
  }
`;

const FirstTextDiv = styled.div`
  display: flex;
  justify-content: flex-end;

  @media (max-width: 880px) {
    justify-content: center;
  }
`;

const TextTwoDiv = styled.div`
  width: 100%;
`;

const TextThreeDiv = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const FourthDiv = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const TextOne = styled.p`
  font-size: 38px;
  margin: 0;
  text-align: right;
  color: #4c4c4c;
  font-weight 300;
  font-family: Neoteric Bold;
  @media (max-width: 880px){
    margin: 30px 0;
  }
`;

const TextFour = styled.p`
  font-size: 24px;
  margin: 0;
  text-align: left;
  color: #4c4c4c;
  font-weight 300;
  font-family: Neoteric Bold;
  width: 85%;
  @media (max-width: 880px){
      margin: 40px 0 40px 10px;
  }
`;

const TextThree = styled.p`
  font-size: 18px;
  color: #4c4c4c;

  font-family: Helvetica;
  font-family: Neoteric;
  @media (max-width: 880px){
      margin: 30px 0 0 10px;
  }
`;

const TextTwo = styled.p`
  font-size: 22px;
  text-align: right;
  color: #4c4c4c;
  font-weight: 300;
  font-family: Helvetica;
  font-family: Neoteric;
  @media (max-width: 880px) {
    margin: 0 0 30px 0;
    text-align: center;
  }
`;

const HelloSpan = styled.span`
  font-size: 30px;
`;

class App extends React.Component {
  state = { flip: false };

  render() {
    return (
      <PageWrap borderColor="black" borderBottom="black">
        <First>
          <FirstTextDiv>
            <TextOne>Logistics Lover.</TextOne>
          </FirstTextDiv>
          <TextTwoDiv>
            <TextTwo>
              <HelloSpan>Hello! Cheri here.</HelloSpan>
              <br />
              Campfire Connoisseur.
              <br />
              Celebration Planner.
              <br />
              Yahtzee Champion.
              <br />
              I'm a quick thinker with an ear for details.
            </TextTwo>
          </TextTwoDiv>
        </First>
        <Second>
          <MomImage src={Mom2} borderRadius={"40px"} opacity={"0.9"} />
        </Second>
        <Third>
          <TextThreeDiv>
            <TextThree>
              For years, I have coordinated weddings and special events (both
              corporate and private). I always wake up the next morning thinking
              – wow, how great was that! Clients are complimentary of my
              attention to detail and energy in bringing planning to life. We
              start out on a very professional level and by the time the actual
              event rolls around, we’ve become friends.
            </TextThree>
          </TextThreeDiv>
          <FourthDiv>
            <TextFour>
              Taking people’s details and dreams and making them a reality is my
              business, and I’m passionate about it.
            </TextFour>
          </FourthDiv>
        </Third>
      </PageWrap>
    );
  }
}

export default App;
