import React from 'react'
import styled from 'styled-components'

const PageWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
  background-color: #435840;
`

const Line = styled.div`
  height: 1px;
  width: 75%;
  background-color: white;
`

const Title = styled.h1`
  font-family: Neoteric;
  font-weight: 100;
  color: white;
  font-size: 30px;
`

const Arrow = styled.div`
  font-size: 30px;
  color: white;

  &:hover {
    cursor: pointer;
    transform: scale(1.05, 1.05);
  }
`

const SpanTime = styled.span`
  font-family: Lato;
  font-size: 20px;
  font-weight: 400;
`

class Footer extends React.Component {
  render() {
    return (
      <PageWrap>
        <Line />
        <Title>LeVieve Events</Title>
        <Arrow onClick={() => window.scroll({ top: 0, left: 0, behavior: 'smooth' })}>
          &#8593;
        </Arrow>
      </PageWrap>
    )
  }
}

export default Footer
