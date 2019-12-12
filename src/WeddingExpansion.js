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
  color: #553e4ceb;
  font-weight: 300;
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
`;

const WeddingExpansion = () => {
  return (
    <ExpandWrap>
      <ULMain>
        <LI>
          Two meetings prior to the wedding day (this is where it will all come
          together)
          <UL>
            <LI>
              8 weeks before – walk the venue, talk about what’s been planned,
              which vendors have been hired and what’s keeping you awake at
              night. (2 hours)
            </LI>
            <LI>
              3 weeks before – confirm all vendors are locked in, create your
              day-of timeline, finalize location layouts, finish the lists and
              paint the picture of your perfect day. (2 hours)
            </LI>
          </UL>
        </LI>
        <LI>
          Rehearsal: up to 60 minutes if needed (some officiants also provide
          this in their pricing)
        </LI>
        <LI>
          Coordination and set-up of wedding ceremony and reception (Up to 10
          hours).
          <UL>
            <LI>
              Vendor Management
              <UL>
                <LI>
                  coordinate vendors (deliveries, set-up and magically take care
                  of unexpected surprises)
                </LI>
                <LI>
                  set up linens, center pieces, table numbers, place cards,
                  guest book, favors, toasting flutes, cake server &amp; knife,
                  personal items, card box, gift table, etc.
                </LI>
                <LI>receive set-up and distribute flowers, pin boutonnieres</LI>
                <LI>
                  partner with photographer, videographer, musicians, caterer,
                  DJ, etc. to ensure that timeline we worked on earlier gets
                  executed as planned.
                </LI>
              </UL>
            </LI>
          </UL>
        </LI>
        <LI>
          Ceremony
          <UL>
            <LI>
              coordinate officiant, musicians, readers – everyone making this
              ceremony special for you
            </LI>
            <LI>set up personal items (candles, pictures, programs, etc.)</LI>
            <LI>
              organize the ushers and attendants (processional), que the music,
              get the ceremony started on time.
            </LI>
            <LI>
              cheerfully prompt the bride and her escort to take that walk that
              everyone’s been waiting for... fluff that beautiful train…all eyes
              are on you…the love of your life awaits.
            </LI>
          </UL>
          <LI>
            Reception
            <UL>
              <LI>
                transition guest’s b/t locations as needed; ceremony, cocktail,
                dining etc.
              </LI>
              <LI>
                que music, dismiss tables (buffet), coordinate toasts, speeches,
                first dance(s)
              </LI>
              <LI>relocate gifts &amp; cards to a secure location</LI>
              <LI>
                cater to you (beverages and small errands) so you do nothing but
                enjoy the celebration
              </LI>
            </UL>
          </LI>
        </LI>
        <LI>
          Handle delivery of final payments from couple to vendors as needed
        </LI>
        <LI>
          End of event repacking of personal items and hand off to family and
          friends.
        </LI>
      </ULMain>
      <Pricing>Package Price: $1100*</Pricing>
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

export default WeddingExpansion;
