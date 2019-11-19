import React from "react";
import styled from "styled-components";

const ExpandWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const Pricing = styled.h2`
  font-family: Helvetica;
  font-size: 22px;
  font-style: italic;
  color: white;
  margin-left: 20px;
`;

const Asterisk = styled.h3`
  font-family: helvetica;
  font-size: 18px;
  font-style: italic;
  color: white;
  margin-left: 20px;
`;

const ULMain = styled.ul`
  margin: 0 10px;
`;

const Footer = styled.h4`
  font-family: Neoteric;
  font-size: 18px;
  color: white;
`;

const MiddleOne = styled.h3`
  font-size: 22px;
  font-family: helvetica;
  font-weight: 100;
  margin: 40px 0;

  color: white;
`;

const UL = styled.ul``;

const LI = styled.li`
  color: white;
`;

const EventsExpansion = () => {
  return (
    <ExpandWrap>
      <ULMain>
        <LI>
          LeVieve Events is a “day-of” event coordinator service. I have years
          of experience in on-site-coordination for events such as:
          <UL>
            <LI>Holiday parties (corporate and private)</LI>
            <LI>Wedding and baby showers</LI>
            <LI>Birthday parties</LI>
            <LI>Graduation open house parties</LI>
            <LI>Block parties</LI>
            <LI>Run/walk events (non-profit fundraisers)</LI>
            <LI>Progressive dinner parties</LI>
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
