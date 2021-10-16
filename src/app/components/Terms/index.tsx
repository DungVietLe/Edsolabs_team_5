import React, { useState } from 'react';
import {
  Accept,
  ButtonClick,
  Content,
  Decline,
  Term,
  Text,
  Title,
  ViewTerm,
  ViewText,
  Wrapper,
} from './styled';
const Terms = () => {
  const [check, setCheck] = useState(false);
  const [click, setClick] = useState(true);
  const onScrollPublic = e => {
    if (e.target.scrollTop >= 164) {
      setCheck(true);
    }
  };
  const handChange = e => {
    if (check) {
      setClick(false);
    }
  };
  const handClose = e => {
    setClick(false);
  };
  return (
    <div>
      {click ? (
        <ViewTerm>
          <Term>
            <ViewText>
              <Title>Terms of Service</Title>
              <Wrapper className="wrapper" onScroll={onScrollPublic}>
                <Content>
                  <h4>DeFi For You Crypto Ethics & Regulation UK</h4>
                </Content>
                <Text>
                  <li className="information">
                    The crypto digital ecosystem is a challenger to the existing
                    financial system that has managed the economy since the
                    financial services act which was introduced to protect
                    consumers in the late 1990’s.{' '}
                  </li>
                  <li className="information">
                    We are committed to following UK financial services
                    principles providing a safe and secure environment for users
                    to enjoy DeFi technology within a maintained and secure
                    ecosystem.
                  </li>
                  <li className="information">
                    Our time and experience in this sector have allowed us to
                    trial and sandbox varying technologies. Our R&D findings are
                    available to the FCA to assist with creating a safe crypto
                    financial instrument that has the flexibility and scope to
                    provide services that comply with AML and principles for
                    business.
                  </li>
                  <li className="information">
                    Our cooperative approach provides the FCA with the
                    assistance needed to bridge the knowledge gap between
                    operators and regulators, thus providing safe and regulated
                    pathways for users.
                  </li>
                  <li className="information">
                    Our committed attitude towards regulation is for our users
                    to feel confident with the technology, and confident that
                    their personal information and tokenised assets are safe
                    when transacting within our digital platforms.
                  </li>
                  <li className="information">
                    Working towards Prudential standards as an instrument
                    provider.
                  </li>
                  <li className="information">
                    Assurance knowing that certain elements within the
                    peer-to-peer transaction process is authorised and regulated
                    by The Financial Conduct Authority. • Clients and users are
                    assured that we are a company that treats customers fairly.
                  </li>
                  <li className="information">
                    The operational platform maintains improved security
                    standards that are more secure than the historic frameworks
                    being used by preceding providers.
                  </li>
                  <li className="information">
                    The Financial Conduct Authority is preparing regulatory
                    frameworks for crypto asset businesses and crypto
                    intermediaries so they are a safe place for consumers to
                    transact.
                  </li>
                  <li className="information">
                    We work in harmony with the regulators ensuring a positive
                    route to safely regulating this technology. Providing a
                    competitive, safe, and fair place for its users.
                  </li>
                  <li className="information">
                    People are generally seeking to grow the value of their
                    assets and or perceived investments. The general intention
                    and hopes are that the value of these items increases over
                    time.This does not always happen and the intrinsic value of
                    the tangible or intangible object can go up, down, stay the
                    same or drop to a minus value.
                  </li>
                </Text>
              </Wrapper>
            </ViewText>
            <ButtonClick>
              <Decline onClick={handClose} variant="outlined" className="btn">
                Decline
              </Decline>
              <Accept
                onClick={handChange}
                className={check ? 'active' : 'outline btn'}
              >
                Accept
              </Accept>
            </ButtonClick>
          </Term>
        </ViewTerm>
      ) : (
        ''
      )}
    </div>
  );
};

export default Terms;
