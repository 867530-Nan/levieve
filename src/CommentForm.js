import React, { Component } from 'react'
import './cForm.css'
import styled from 'styled-components'
import image from './images/beautiful-beauty-bouquet-2472858.jpg'
import { media } from './GenericStyledComponents'
import { Form } from 'semantic-ui-react'
import LVStyleGuide from './LVStyleGuide'

const PageWrap = styled.div`
  display: flex;
  background: url(${props => props.url}) no-repeat bottom center;
  background-size: 100%;
  align-items: flex-end;
  height: 700px;
  max-width: 1450px;
  justify-content: flex-start;

  @media (min-width: 1450px) {
    margin: auto;
    background-color: black;
  }
  @media (max-width: 1237px) {
    background-size: 115%;
  }
  @media (max-width: 1070px) {
    background-size: 125%;
  }
  @media (max-width: 850px) {
    background-size: cover;
  }
`

const WhiteBox = styled.div`
  width: 75%;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 0 5px 0 0;
`

const ContactForm = styled(Form)`
  font-family: ${LVStyleGuide.font.family.monoFur};
`

const FormDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const FormInput = styled.input`
  height: 60px;
  width: 100%;
`

const FormEmail = styled.input`
  width: 100%;
  height: 60px;
`

const InputWrap = styled.div`
  width: 45%;
  margin: 15px;
  min-height: 50px;
  min-width: 250px;
  height: 60px;
`

const EmailWrap = styled.div`
  width: 45%;
  min-width: 250px;
  min-height: 50px;
  margin: 15px;
`

const TextAreaWrap = styled.div`
  width: 100%;
  margin: 15px;
  min-height: 50px;
  min-width: 250px;
  height: 60px;
`

const FormTextArea = styled.textarea`
  height: 60px;
  width: 100%;
`

const SubmitButton = styled.div`
  width: 150px;
  height: 50px;
  margin: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 5px;
  border: 2px solid #435840;
  font-weight: 600;

  &:hover {
    background-color: #435840;
    color: white;
    cursor: pointer;
  }
  ${media.tablet`
    width: 75%
  `}
`

// const ButtonSection = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: flex-start;
//   height: 50px;
//   width: 200px;
//   ${media.tablet`
//     flex-direction: column;
//     height: 200px;
//   `}
// `

const BigText = styled.h1`
  margin: 15px 0 15px 20px;
  font-size: 40px;
  font-family: Neoteric;
  font-weight: 100;
`

const LeSpan = styled.p`
  font-size: 24px;
  text-align: left;
  font-family: Neoteric;
  font-weight: 100;
  margin: 0 0 0 15px;
`

const Anchor = styled.a`
  text-decoration: none;
  color: black;

  &:hover {
    cursor: pointer:
  }
`

const EmailResWrap = styled.div`
  height: 100px;
  width: 50%;
  margin: 0 auto;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 25%;
  background-color: ${props => props.backgroundColor};
  border-radius: 0 0 5px 5px;
`
const EmailText = styled.p`
  text-align: center;
  font-weight: 700;
  color: ${props => props.color};
`

class CommentForm extends Component {
  state = {
    success: '',
    emailRes: false,
    email: '',
    firstName: '',
    lastName: '',
    message: ''
  }

  componentDidUpdate(nP, nS) {
    if (this.state.emailRes) {
      setTimeout(() => {
        if (this.state.success) {
          console.log('up top')
          this.setState(
            {
              email: '',
              firstName: '',
              lastName: '',
              message: '',
              emailRes: false,
              success: ''
            },
            this.forceIt
          )
        } else {
          console.log('down below')
          this.setState({ emailRes: false, success: '' })
        }
      }, 3000)
    }
  }
  forceIt = () => {
    this.forceUpdate()
  }
  handleFormSubmit = event => {
    console.log('here')
    event.preventDefault()
    window.emailjs
      .send('levieveevents', 'levieve_events', {
        from_name: this.state.firstName + ' ' + this.state.lastName,
        message_html: this.state.message,
        reply_to: this.state.email
      })
      .then(
        response => {
          this.setState({ emailRes: true, success: true })
        },
        err => {
          console.log('FAILED. error=', err)
          this.setState({ emailRes: true, success: false })
        }
      )
  }
  handleFormChange = e => {
    const { id, value } = e.target
    this.setState({ [id]: value })
  }
  showMessage = () => {
    return (
      <EmailResWrap backgroundColor={this.state.success ? '#435840' : 'red'}>
        <EmailText color={this.state.success ? 'white' : 'black'}>
          {this.state.success
            ? `Thank you ${this.state.firstName} for the message, I'll respond to you within 24 Hours`
            : 'An error occurred with the web-server, please submit form again.'}
        </EmailText>
      </EmailResWrap>
    )
  }
  render() {
    return (
      <PageWrap url={image}>
        {this.state.emailRes && this.showMessage()}
        <WhiteBox>
          <BigText>
            Let's talk, <br />
            Send me a message below.
            <br />
          </BigText>
          <Anchor href='mailto:levieveevents@gmail.com'>
            <LeSpan> * levieveevents.com </LeSpan>
          </Anchor>
          <ContactForm>
            <FormDiv>
              <InputWrap>
                <FormInput
                  fluid
                  onChange={this.handleFormChange}
                  className='commentFormPlaceholder'
                  id='firstName'
                  value={this.state.firstName}
                  placeholder='First Name'
                />
              </InputWrap>
              <InputWrap>
                <FormInput
                  fluid
                  onChange={this.handleFormChange}
                  className='commentFormPlaceholder'
                  id='lastName'
                  value={this.state.lastName}
                  placeholder='Last Name'
                />
              </InputWrap>
              <EmailWrap>
                <FormEmail
                  onChange={this.handleFormChange}
                  className='commentFormPlaceholder'
                  id='email'
                  value={this.state.email}
                  placeholder='gosling@email.com'
                />
              </EmailWrap>
              <TextAreaWrap>
                <FormTextArea
                  onChange={this.handleFormChange}
                  className='commentFormPlaceholder'
                  id='message'
                  value={this.state.message}
                  placeholder='Write me a message..'
                />
              </TextAreaWrap>
            </FormDiv>
          </ContactForm>
          <SubmitButton onClick={this.handleFormSubmit}>Submit</SubmitButton>
        </WhiteBox>
      </PageWrap>
    )
  }
}

export default CommentForm
