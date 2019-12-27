import React from "react";
import styled from "styled-components";

const ExpandWrap = styled.div`
  display: flex;
  flex-direction: column;
  background: radial-gradient(
      circle,
      transparent 20%,
      white 20%,
      white 80%,
      transparent 80%,
      transparent
    ),
    radial-gradient(
        circle,
        transparent 20%,
        white 20%,
        white 80%,
        transparent 80%,
        transparent
      )
      50px 50px,
    linear-gradient(#553e4c0f 4px, transparent 8px) 0 -4px,
    linear-gradient(90deg, #553e4c0f 4px, transparent 8px) -4px 0;
  background-color: white;
  background-size: 100px 100px, 100px 100px, 50px 50px, 50px 50px;
`;

const Pricing = styled.h2`
  font-family: Helvetica;
  font-size: 22px;
  font-style: italic;
  font-weight 300;
  color: #553e4ceb;
  margin-left: 20px;
`;

const Asterisk = styled.h3`
  font-family: helvetica;
  font-size: 16px;
  font-style: italic;
  margin: 0;
  padding-left: 20px;
  margin-left: 20px;
  color: #553e4ceb;
`;

const ULMain = styled.ul`
  margin: 0 10px;
`;

const Footer = styled.h4`
  font-family: Neoteric;
  font-size: 22px;
  color: #553e4ceb;
  font-weight: 300;
  text-align: center;
`;

const MiddleOne = styled.h3`
  font-size: 22px;
  font-family: helvetica;
  font-weight: 500;
  margin: 10px 0;

  color: #553e4ceb;
`;

const UL = styled.ul``;

const LI = styled.li`
  color: #553e4ceb;
  padding: 3px 5px;
`;

const EventsExpansion = () => {
  return (
    <ExpandWrap>
      <ULMain>
        <LI>
          Years of experience with on-site coordination for events such as:
          <UL>
            <LI>Holiday parties (corporate and private)</LI>
            <LI>Wedding and baby showers</LI>
            <LI>Birthday parties</LI>
            <LI>Graduation open house parties</LI>
            <LI>Block parties</LI>
            <LI>Run/walk events (non-profit fundraisers)</LI>
          </UL>
        </LI>
        <MiddleOne>What I provide for you:</MiddleOne>
        <UL>
          <LI>
            Up to two meetings prior to the event (this is where it will all
            come together). Work on the layout, timeline, décor, vendors, food,
            music, gifts, etc.
          </LI>
          <LI>
            On site for up to 5 hours on the day of the event to oversee
            logistics and execution
          </LI>
          <LI>
            Coordination of vendors on the day of and getting them set-up, in
            place and ready to go (on time!). Set-up décor, arrange layouts, set
            out food, etc.
          </LI>
          <LI>
            Ensure everything is in order so that you and your guests have an
            amazing, memorable time.
          </LI>
          <LI>
            Handle delivery of final payments to vendors (at the event) if
            needed.
          </LI>
          <LI>General take-down and clean up.</LI>
        </UL>
      </ULMain>
      <Pricing>Hourly Rate: $55*</Pricing>
      <Asterisk>
        * Slightly higher for events outside the Metro area (mileage and/or
        accommodations).
      </Asterisk>
      <Asterisk>
        * Discounts for: active military, veterans and first responders.
      </Asterisk>
      <Footer>~ Let’s get together and talk about your special event! ~</Footer>
    </ExpandWrap>
  );
};

export default EventsExpansion;
