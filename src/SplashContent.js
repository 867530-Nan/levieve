import React from 'react'
import styled from 'styled-components'

const PageWrap = styled.div`
  width: 75%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

const WhiteBox = styled.div`
  height: 75%;
  width: 75%;
  border-radius: 2px;
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`

const PartyTime = styled.h1`
  font-size: 60px;
  margin: 0;
  width: 100%;
  text-align: center;
  marginfont-family: Roboto;
  font-weight: 100;
`

const MyName = styled.h1`
  font-size: 60px;
  margin: 0;
  width: 100%;
  text-align: center;
  font-weight: 100;
  font-family: Roboto;
`

const LetsPlan = styled.h1`
  font-size: 60px;
  margin: 0;
  width: 100%;
  text-align: center;
  font-weight: 100;
  font-family: Roboto;
`

class SplashContent extends React.Component {
  render() {
    return (
      <PageWrap>
        {/*<WhiteBox>
           <PartyTime>Thoughtful</PartyTime>
          <MyName>Attentive</MyName>
          <LetsPlan>Let's Party</LetsPlan>
        </WhiteBox> */}
      </PageWrap>
    )
  }
}

export default SplashContent
