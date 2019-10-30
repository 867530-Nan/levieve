import React, { Component } from 'react'
import styled from 'styled-components'

import { media } from './GenericStyledComponents'
import { Form } from 'semantic-ui-react'
import LVStyleGuide from './LVStyleGuide'

const ContactForm = styled(Form)`
  font-family: ${LVStyleGuide.font.family.monoFur};
`

const FormInput = styled(Form.Input)`
  font-size: ${LVStyleGuide.font.size.mediumSmall};
`

const FormTextArea = styled(Form.TextArea)`
  font-size: ${LVStyleGuide.font.size.mediumSmall};
`

const SubmitButton = styled.button`
  width: 20%;
  background-color: ${LVStyleGuide.color.darkGreen};
  color: ${LVStyleGuide.color.white};
  border: none;
  font-size: ${LVStyleGuide.font.size.medium};

  &:hover {
    background-color: ${LVStyleGuide.color.white};
    color: ${LVStyleGuide.color.darkGreen};
  }
  ${media.tablet`
    width: 75%
  `}
`

const CancelButton = styled.button`
  width: 20%;
  background-color: red;
  color: ${LVStyleGuide.color.white};
  border: none;
  font-size: ${LVStyleGuide.font.size.medium};

  &:hover {
    background-color: ${LVStyleGuide.color.white};
    color: red;
  }
  ${media.tablet`
    width: 75%
  `}
`

const PageWrap = styled.div`
  display: block;
  position: relative;
  padding: 4% 5%;
`

const ButtonSection = styled.div`
  display: flex;
  flex-direction: row;
  height: 100px;
  justify-content: space-evenly;
  ${media.tablet`
    flex-direction: column;
    height: 200px;
  `}
`

const BigText = styled.h1`
  margin: 0 0 30px 0;
  font-size: ${props => props.fontSize};
`

class CommentForm extends Component {
  render() {
    return (
      <PageWrap
        display={'block'}
        position={'relative'}
        padding={'4% 5%'}
        backgroundColor={LVStyleGuide.color.lightGray}
      >
        <BigText
          margin={'0 0 30px 0'}
          fontSize={LVStyleGuide.font.size.medium}
          tabletFontSize={LVStyleGuide.font.size.mediumSmall}
        >
          Big Events, Intimate Weddings, or Backyard BBQs
          <hr />
          Leave a Message or Send an Email :-)
          <hr />
          levieveevents@gmail.com
        </BigText>
        <ContactForm>
          <Form.Group widths='equal'>
            <FormInput
              fluid
              onChange={this.props.handleChange}
              id='firstName'
              label='First name'
              placeholder='First name'
            />
            <FormInput
              fluid
              onChange={this.props.handleChange}
              id='lastName'
              label='Last name'
              placeholder='Last name'
            />
          </Form.Group>
          <FormInput
            onChange={this.props.handleChange}
            id='email'
            label='Email'
            placeholder='me@email.com'
          />
          <FormTextArea
            onChange={this.props.handleChange}
            id='message'
            label='Type Message Below'
            placeholder='I have this plot of grass...'
          />
        </ContactForm>
        <ButtonSection>
          <SubmitButton onClick={this.props.commentSubmitFunction}>Submit</SubmitButton>
          <CancelButton onClick={this.props.commentDisplay}>Cancel</CancelButton>
        </ButtonSection>
      </PageWrap>
    )
  }
}

export default CommentForm
