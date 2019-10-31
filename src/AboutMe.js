import React from 'react'
import styled from 'styled-components'
import Mom from './Mom.jpg'
import Mom2 from './Mom2.jpg'
const PageWrap = styled.div`
  height: 600px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  @media (max-width: 768px) {
    height: initial;
    flex-direction: column;
  }
`

const First = styled.div`
  width: 30%;
  height: 75%;
  border-bottom: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  @media (max-width: 768px) {
    align-items: center;
    border: none;
    width: 85%;
  }
`

const Second = styled.div`
  width: 25%;
  height: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 25px;
  @media (max-width: 768px) {
    width: 80%;
  }
`

const Third = styled.div`
  width: 30%;
  height: 75%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid black;

  @media (max-width: 768px) {
    border: none;
    width: 85%;
  }
`

const MomImage = styled.img`
  width: 100%;
  min-width: 250px;
  max-width: 330px;
  opacity: ${props => props.opacity};
  border-radius: ${props => props.borderRadius};

  @media (max-width: 768px) {
    min-width: 100px;
  }
`

const FirstTextDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 40%;

  @media (max-width: 768px) {
    justify-content: center;
  }
`

const TextTwoDiv = styled.div`
  width: 100%;
  height: 60%;
`

const TextThreeDiv = styled.div`
  display: flex;
  justify-content: flex-start;
`

const FourthDiv = styled.div`
  display: flex;
  justify-content: flex-start;
`

const TextOne = styled.p`
  font-size: 38px;
  text-align: right;
  color: #4c4c4c;
  font-weight 300;
  font-family: Forum;
  @media (max-width: 768px){
    margin: 30px 0;
  }
`

const TextFour = styled.p`
  font-size: 24px;
  text-align: left;
  color: #4c4c4c;
  font-weight 700;
  font-style: italic;
  width: 85%;
  font-family: Lato;
  @media (max-width: 768px){
      margin: 30px 0;
  }
`

const TextThree = styled.p`
  font-size: 20px;
  color: #4c4c4c;
  font-weight 300;
  width: 95%;
  font-family: Montserrat;
  @media (max-width: 768px){
      margin: 30px 0 0 0;
  }
`

const TextTwo = styled.p`
  font-size: 20px;
  text-align: right;
  color: #4c4c4c;
  font-weight: 300;
  font-family: Montserrat;
  @media (max-width: 768px) {
    margin: 0 0 30px 0;
    text-align: center;
  }
`

class App extends React.Component {
  state = { flip: false }

  render() {
    return (
      <PageWrap>
        <First>
          <FirstTextDiv>
            <TextOne>Logistics Lover.</TextOne>
          </FirstTextDiv>
          <TextTwoDiv>
            <TextTwo>
              Hello! Cheri here.
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
          <MomImage src={Mom2} borderRadius={'40px'} opacity={'0.9'} />
        </Second>
        <Third>
          <TextThreeDiv>
            <TextThree>
              Currently, I serve as Operations Director for a Fortune 500 company, and
              spend my nights and weekends dreaming up beautiful celebrations.
            </TextThree>
          </TextThreeDiv>
          <FourthDiv>
            <TextFour>
              At the end of the day, my goal is to help you marry your best friend in the
              most stress-free way imaginable.
            </TextFour>
          </FourthDiv>
        </Third>
      </PageWrap>
    )
  }
}

export default App
