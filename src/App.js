import React from "react";
import "./App.css";
import styled from "styled-components";
import NavBar from "./NavBar";
import Hero from "./Hero";
import Services from "./Services";
import Contact from "./Contact";
import AboutMe from "./AboutMe";
import Testimonials from "./Testimonials";
import EventTypeIconBanner from "./EventTypeIconBanner";
import CommentForm from "./CommentForm";
import Footer from "./Footer";
import SendAMessage from "./SendAMessage";

const PageWrap = styled.div``;

class App extends React.Component {
  state = {};

  navFunc = s => {
    document
      .getElementById(s)
      .scrollIntoView({ behavior: "smooth", block: "start" });
  };

  render() {
    return (
      <PageWrap>
        <Hero navFunc={this.navFunc} />
        <span id="aboutMe">
          <AboutMe />
        </span>
        <span id="services">
          <Services />
        </span>
        {/* <SendAMessage navFunc={this.navFunc} /> */}
        <span id="testimonials">
          <Testimonials />
        </span>
        <span id="contact">
          <CommentForm />
        </span>
        {/* <EventTypeIconBanner /> */}
        <Footer />
      </PageWrap>
    );
  }
}

export default App;
