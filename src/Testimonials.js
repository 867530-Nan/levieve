import React from 'react'
import styled, { keyframes } from 'styled-components'
import './testimonials.css'
const PurpDiv = styled.div`
  height: 900px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`

const TopDiv = styled.div`
  display: flex;
  height: 25%;
  background-color: #553e4c;
  justify-content: center;
  align-items: center;
`

const FirstCombo = styled.div`
  &:hover {
    transform: scale(1.1, 1.1);
    cursor: pointer;
  }
`

const Arrow = styled.h1`
  color: white;
  font-size: 45px;
  font-weight: 100;
`

const TopComboWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`

const TopDivText = styled.h1`
  font-size: 42px;
  font-family: Playfair Display;
  color: white;
  font-weight: 300;
  text-align: center;
  margin: 0;

  @media (max-width: 550px) {
    font-size: 28px;
  }
`

const TopDivBottomText = styled.p`
  font-family: Playfair Display;
  color: white;
  margin: 0;
  font-weight: 300;
  text-align: center;
`

const CardLine = styled.div`
  background-color: #553e4c;
  width: 30%;
  height: 1px;
  margin: 0 auto;
`

const slideAnimation = props => keyframes`
  from {
    transform: translate3d(-${props.fromNumber}, 0, 0);
  }

  to {
    transform: translate3d(-${props.toNumber}px, 0, 0);
  }
`

const BottomDiv = styled.div`
  background: linear-gradient(180deg, #553e4c 10%, #f6f7f5 10%);

  height: 75%;
  display: flex;
  justify-content: flex-start;
  width: ${props => props.width}px;
  animation: ${props => slideAnimation(props)} 1s linear;
  transform: translate3d(-${props => props.translateNumber}px, 0, 0);
`

const CardWrap = styled.div`
  display: flex;
  justify-content: center;
  width: ${props => props.width}px;
  margin: 0 50px;
  height: inherit;
  min-height: 500px;
`

const SingleCard = styled.div`
  background-color: white;
  width: 80%;
  border-radius: 3px;
  min-width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

const CardFirstText = styled.h1`
  text-align: center;
  font-weight: 300;
  font-family: Forum;
  margin: 40px 0;
`

const CardSecondText = styled.h4`
  text-align: center;
  font-family: Montserrat;
  font-weight: 300;
  width: 95%;
`

class Testimonials extends React.Component {
  state = {
    fromNumber: 0,
    toNumber: 0,
    translateNumber: 0,
    testCards: [
      {
        name: 'CARLY + NICK',
        text:
          'Hands down Camila is the best! She was very organized and helpful from our first phone call to our send-off. Our wedding day came and went without a single issue – she was on top of everything! She managed all of the moving parts seamlessly – everything was perfect and exactly like we discussed.'
      },
      {
        name: 'MARJORIE + PATRICK',
        text:
          'Hands down Camila is the best! She was very organized and helpful from our first phone call to our send-off. Our wedding day came and went without a single issue – she was on top of everything! She managed all of the moving parts seamlessly – everything was perfect and exactly like we discussed.'
      },
      {
        name: 'ANNIE + TOM',
        text:
          'Hands down Camila is the best! She was very organized and helpful from our first phone call to our send-off. Our wedding day came and went without a single issue – she was on top of everything! She managed all of the moving parts seamlessly – everything was perfect and exactly like we discussed.'
      },
      {
        name: 'KELLY + ROBERT',
        text:
          'Hands down Camila is the best! She was very organized and helpful from our first phone call to our send-off. Our wedding day came and went without a single issue – she was on top of everything! She managed all of the moving parts seamlessly – everything was perfect and exactly like we discussed.'
      },
      {
        name: 'NOELLE + DEVIN',
        text:
          'Hands down Camila is the best! She was very organized and helpful from our first phone call to our send-off. Our wedding day came and went without a single issue – she was on top of everything! She managed all of the moving parts seamlessly – everything was perfect and exactly like we discussed.'
      },
      {
        name: 'KORI + DARYNE',
        text:
          'Hands down Camila is the best! She was very organized and helpful from our first phone call to our send-off. Our wedding day came and went without a single issue – she was on top of everything! She managed all of the moving parts seamlessly – everything was perfect and exactly like we discussed.'
      }
    ],
    scroller: '',
    scrollNumber: 0,
    cardWidth: window.innerWidth * 0.5,
    cardMargin: window.innerWidth * 0.1
  }

  componentDidMount() {
    console.log(window.innerWidth)
    const gotIt = document.getElementById('bottomScroller')
    this.setState({ scroller: gotIt })
  }

  rightClick = () => {
    const gotIt = document.getElementById('bottomScroller')
    if (
      this.state.scrollNumber !== 0 &&
      this.state.testCards.length > 2 &&
      this.state.scrollNumber < this.state.testCards.length - 1
    ) {
      console.log('cool stuf')
      // gotIt.classList.add('slideRight')
      // setTimeout(() => {
      this.setState(s => {
        return {
          scrollNumber: s.scrollNumber - 1,
          fromNumber: s.toNumber,
          toNumber: s.toNumber - s.cardWidth
        }
      })
      setTimeout(() => {
        this.setState(s => {
          return {
            translateNumber: s.translateNumber - s.cardWidth
          }
        })
      }, 1000)
      // }, 1000)
    }
  }

  leftClick = () => {
    const gotIt = document.getElementById('bottomScroller')
    if (this.state.scrollNumber !== this.state.testCards.length - 2) {
      // gotIt.classList.add('slideLeft')

      this.setState(s => {
        return {
          scrollNumber: s.scrollNumber + 1,
          fromNumber: s.toNumber,
          toNumber: s.toNumber + s.cardWidth
        }
      })
      setTimeout(() => {
        this.setState(s => {
          return { translateNumber: s.translateNumber + s.cardWidth }
        })
      }, 1000)
      // setTimeout(() => {
      // }, 1000)
    }
  }

  render() {
    return (
      <PurpDiv>
        <TopDiv>
          <FirstCombo onClick={this.leftClick}>
            <Arrow>&#8592;</Arrow>
          </FirstCombo>
          <TopComboWrapper>
            <TopDivText>TESTIMONIALS</TopDivText>
            <TopDivBottomText>FEEDBACK FROM PAST COUPLES</TopDivBottomText>
          </TopComboWrapper>
          <FirstCombo onClick={this.rightClick}>
            <Arrow>&#8594;</Arrow>
          </FirstCombo>
        </TopDiv>
        <BottomDiv
          id='bottomScroller'
          width={
            this.state.testCards.length > 2
              ? this.state.testCards.length * this.state.cardWidth
              : '100%'
          }
          scrollNumber={this.state.scrollNumber * this.state.cardWidth}
          fromNumber={this.state.fromNumber}
          toNumber={this.state.toNumber}
          translateNumber={this.state.translateNumber}
        >
          {this.state.testCards.map((s, i) => {
            return (
              <CardWrap
                marginLeft={i === 0 ? '100px' : null}
                width={this.state.cardWidth}
              >
                <SingleCard cardMargin={this.state.cardMargin * 0.5}>
                  <CardFirstText>{s.name}</CardFirstText>
                  <CardLine />
                  <CardSecondText>{s.text}</CardSecondText>
                </SingleCard>
              </CardWrap>
            )
          })}
        </BottomDiv>
      </PurpDiv>
    )
  }
}

export default Testimonials
