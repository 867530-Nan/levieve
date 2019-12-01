import React from "react";
import styled from "styled-components";

const ExpandWrap = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
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
  text-indent: 20px;
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
  font-weight: 100;
  margin: 40px 0;

  color: #553e4ceb;
`;

const UL = styled.ul``;

const LI = styled.li`
  color: #553e4ceb;
`;

const EventsExpansion = () => {
  return (
    <ExpandWrap>
      <ULMain>
        <LI>
          LeVieve Events is a “month-of” event coordinator service. I have years
          of experience in on-site-coordination for events such as:
          <UL>
            <LI>Holiday parties (corporate and private)</LI>
            <LI>Wedding and baby showers</LI>
            <LI>Birthday parties</LI>
            <LI>Graduation open house parties</LI>
            <LI>Block parties</LI>
            <LI>Run/walk events (non-profit fundraisers)</LI>
          </UL>
        </LI>
        <MiddleOne>
          On the day of your event, your attention should be on your guests and
          enjoying the day. Not answering questions, handling logistics or
          solving unexpected surprises. Let me manage all of this for you.
          Relax, have fun and leave the details to me!
        </MiddleOne>
        <LI>
          What I provide for you:
          <UL>
            <LI>
              Up to two meetings prior to the event (this is where it will all
              come together). Work on the layout, timeline, décor, vendors,
              food, music, gifts, etc.
            </LI>
            <LI>
              On site for up to 5 hours on the day of the event to oversee
              logistics and execution
            </LI>
            <LI>
              Coordination of vendors on the day of and getting them set-up, in
              place and ready to go (on time!). Set-up décor, arrange layouts,
              set out food, etc.
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
        </LI>
      </ULMain>
      <Pricing>Hourly Rate: $40*</Pricing>
      <Asterisk>
        * Slightly higher for events outside the Metro area (mileage and/or
        accommodations).
      </Asterisk>
      <Asterisk>
        * Discounts for: active military, veterans and first responders.
      </Asterisk>
      <Footer>
        ~ Let’s find some time to get together and talk about your special event
        ~
      </Footer>
    </ExpandWrap>
  );
};

export default EventsExpansion;
