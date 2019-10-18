import React from 'react'
import styled from 'styled-components'
import Mom from './Mom.jpg'
import Mom2 from './Mom2.jpg'
const PageWrap = styled.div`
  height: 850px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 768px) {
    height: initial;
    flex-direction: column;
  }
`

const First = styled.div`
  width: 25%;
  height: 75%;
  border-bottom: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    border: none;
    width: 85%;
  }
`

const Second = styled.div`
  width: initial;
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
  width: 25%;
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
  max-width: 400px;
  min-width: 150px;
  opacity: ${props => props.opacity};
  border-radius: ${props => props.borderRadius};
`

const FirstTextDiv = styled.div`
  display: flex;
  justify-content: center;
`

const TextTwoDiv = styled.div`
  width: 90%;
`

const TextThreeDiv = styled.div`
  display: flex;
  justify-content: center;
`

const FourthDiv = styled.div`
  display: flex;
  justify-content: center;
`

const TextOne = styled.p`
font-size: 38px;
text-align: center;
color: #4c4c4c;
font-weight 300;
width: 80%;
font-family: Forum;
            @media (max-width: 768px){
                margin: 30px 0;
              }
`

const TextThree = styled.p`
font-size: 26px;
text-align: center;
color: #4c4c4c;
font-weight 700;
font-style: italic;
width: 95%;
font-family: Lato;
@media (max-width: 768px){
    margin: 30px 0;
  }
`

const TextFour = styled.p`
font-size: 20px;
color: #4c4c4c;
font-weight 300;
width: 95%;
font-family: Raleway;
          @media (max-width: 768px){
              margin: 30px 0;
            }
`

const TextTwo = styled.p`
  font-size: 20px;
  color: #4c4c4c;
  font-weight: 300;
  font-family: Montserrat;
  @media (max-width: 768px) {
    margin: 30px 0;
  }
`

class App extends React.Component {
  state = { flip: false }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState(s => {
        return {
          flip: !s.flip
        }
      })
    }, 10000)
    if (window.innerWidth < 769) {
      clearInterval(this.timer)
      this.setState({ flip: true })
    }
  }

  render() {
    return (
      <PageWrap>
        <First>
          <FirstTextDiv>
            <TextOne>Lady who loves logistics.</TextOne>
          </FirstTextDiv>
          <TextTwoDiv>
            <TextTwo>
              Hello! Cheri here. Celebration Planner. Yahtzee Champion. Campfire
              Connoisseur. I'm a quick thinker with an ear for details. I'm a veteran in
              operations and planning, and would love to organize your party.
            </TextTwo>
          </TextTwoDiv>
        </First>
        <Second>
          <MomImage
            src={this.state.flip ? Mom2 : Mom}
            borderRadius={this.state.flip ? '50%' : '5px'}
            opacity={this.state.flip ? '0.9' : '0.8'}
          />
        </Second>
        <Third>
          <TextThreeDiv>
            <TextFour>
              Currently, I serve as Operations Director for a Fortune 500 company, and
              spend my nights and weekends dreaming up beautiful celebrations.
            </TextFour>
          </TextThreeDiv>
          <FourthDiv>
            <TextThree>
              At the end of the day, my goal is to help you marry your best friend in the
              most stress-free way imaginable.
            </TextThree>
          </FourthDiv>
        </Third>
      </PageWrap>
    )
  }
}

export default App
