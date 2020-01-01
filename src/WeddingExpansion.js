import React from "react";
import styled from "styled-components";

const ExpandWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px 0;
`;

const Pricing = styled.h2`
  font-family: Helvetica;
  font-size: 22px;
  font-style: italic;
  color: #553e4ceb;
  font-weight: 300;
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

const MiddleOne = styled.h3`
  font-size: 22px;
  font-family: helvetica;
  font-weight: ${props => (props.weight ? "500" : "300")};
  margin: 10px 0;
  color: #553e4ceb;
  padding: 0 30px;
`;

const Footer = styled.h4`
  font-family: Neoteric;
  font-size: 22px;
  color: #553e4ceb;
  font-weight: 300;
  text-align: center;
`;

const ULMain = styled.ul`
  margin: 0 10px;
`;

const UL = styled.ul``;

const LI = styled.li`
  color: #553e4ceb;
  padding: 3px 5px;
`;

const WeddingExpansion = () => {
  return (
    <ExpandWrap>
      <MiddleOne weight={false}>
        Now that you've found the love-of-your-life, let's plan for the best day
        of your life. LeVieve Events is a "day-of-coordinator" service.
      </MiddleOne>
      <MiddleOne weight={true}>What I provide for you:</MiddleOne>
      <ULMain>
        <LI>
          Two meetings prior to the wedding day..
          <UL>
            <LI>
              Walk venue(s), talk about what's been planned, vendors you've
              hired and what's keeping you awake at night
            </LI>
            <LI>
              Create your day-of timeline, finalize location layouts, finish the
              lists and paint the picture of your perfect day
            </LI>
          </UL>
        </LI>
        <LI>Setup and take down of the reception (Up to 10 hours)</LI>

        <UL>
          <LI>
            Setup linens, center pieces, table numbers, place cards, guest book,
            favors, toasting flutes, cake server &amp; knife, personal items,
            card box, gift table, etc
          </LI>
          <LI>Receive set-up and distribute flowers, pin boutonnieres</LI>
          <LI>
            Partner with all vendors to ensure that timeline we worked on
            earlier gets executed as planned
          </LI>
        </UL>
        <LI>
          Ceremony
          <UL>
            <LI>Coordinate officiant, musicians, readers, etc</LI>
            <LI>Setup personal items (candles, pictures, programs, etc)</LI>
            <LI>
              Organize ushers and attendants (processional), cue the music, get
              the ceremony started on time
            </LI>
            <LI>
              Cheerfully prompt the bride and escort to take the walk that
              everyone’s waiting for. Fluff the beautiful train...all eyes on
              you...the love of your life awaits
            </LI>
          </UL>
          <LI>
            Reception
            <UL>
              <LI>
                Transition guests b/t locations as needed; ceremony, cocktail,
                dining, etc
              </LI>
              <LI>
                Dismiss tables (buffet), coordinate toasts, speeches, cue
                music/first dance(s)
              </LI>
              <LI>Relocate gifts &amp; cards to a secure location</LI>
              <LI>Cater to you so you do nothing but enjoy the celebration</LI>
            </UL>
          </LI>
        </LI>
        <LI>
          End of reception tear-down and repack personal items, hand off to
          family
        </LI>
      </ULMain>
      <Pricing>Package Price: $1,100*</Pricing>
      <Asterisk>
        * Slightly higher for events outside the Metro area (mileage and/or
        accommodations)
      </Asterisk>
      <Asterisk>
        * Discounts for: active military, veterans and first responders
      </Asterisk>
    </ExpandWrap>
  );
};

export default WeddingExpansion;
