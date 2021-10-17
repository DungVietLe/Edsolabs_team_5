import { COLOR_GRAY_COPPYRIGHT } from 'app/constains/global';
import React from 'react';
import { useTranslation } from 'react-i18next';
import vietnam from '../../../images/country/download.png';
import ameri from '../../../images/country/flag.gb.74ff57f.png';
import { LanguageSwitch } from '../LanguageSwitch';
import email from '../Logo/email.svg';
import fb from '../Logo/fb.svg';
import github from '../Logo/github.svg';
import language from '../Logo/language.svg';
import linked from '../Logo/linked.svg';
import logo from '../Logo/logo.svg';
import telegram from '../Logo/telegram.svg';
import twitter from '../Logo/twitter.svg';
import youtube from '../Logo/youtube.svg';
import { messages } from './messages';
import {
  CoppyRight,
  Links,
  LinkTo,
  ListSocical,
  MyAbouts,
  MyCompany,
  MyContainer,
  MyContainerCoppyright,
  MyCoppyright,
  MyFooter,
  MyGrid,
  MyNavigation,
  MyOfficeHN,
  MyOfficeUS,
  MyQuicklink,
  MySocical,
  MyTitle,
  Subcontext,
  SubcontextAbouts,
  SubcontextInter,
  SubLink,
  SubLinkInter,
  Subtitle,
} from './styled';
import arrow from './Arrow2.png';
import arrow1 from './Arrow1.png';

const Footer = props => {
  const { t } = useTranslation();
  return (
    <div>
      <MyFooter>
        <MyNavigation>
          <MyContainer>
            <MyGrid>
              <MyCompany>
                <img
                  src={logo}
                  alt="logo"
                  style={{ width: '14rem', marginBottom: '1.8em' }}
                />
                <SubcontextInter>
                  <img
                    src={language}
                    alt="language"
                    style={{ marginRight: '12.6px' }}
                  />
                  English (United States) -{'>'}
                </SubcontextInter>
                <SubLinkInter href="mailto: ask@defiforyou.uk">
                  <img
                    src={email}
                    alt="email"
                    style={{ marginRight: '12.6px' }}
                  />
                  ask@defiforyou.uk
                </SubLinkInter>
                <SubLinkInter href="mailto: support@defiforyou.uk">
                  <img
                    src={email}
                    alt="email"
                    style={{ marginRight: '12.6px' }}
                  />
                  support@defiforyou.uk
                </SubLinkInter>
              </MyCompany>
              <MyOfficeHN>
                <MyTitle>{t(messages.hanoi())}</MyTitle>
                <SubLink href="tel:+84 9643 66605">
                  +84 9643 66605
                  <img
                    src={vietnam}
                    alt="vn"
                    style={{ marginLeft: '12.6px', width: '24px' }}
                  />
                </SubLink>
                <SubLink href="tel:+84 9644 41735">
                  +84 9644 41735
                  <img
                    src={ameri}
                    alt="ame"
                    style={{ marginLeft: '15.6px', width: '24px' }}
                  />
                </SubLink>
                <Subcontext>
                  BT NQ 25-15 Vinhomes Riverside, Long Bien, Hanoi, Vietnam
                </Subcontext>
              </MyOfficeHN>
              <MyOfficeUS>
                <MyTitle>{t(messages.london())}</MyTitle>
                <SubLink href="tel:+84 9644 41735">
                  +44 7479 739139
                  <img
                    src={ameri}
                    alt="ame"
                    style={{ margin: '0px 12.6px', width: '24px' }}
                  />
                  Sean Mason - Business CFO
                </SubLink>
                <Subcontext>
                  Office 32 19-21 Crawford Street, London, United Kingdom, W1H
                  1PJ
                </Subcontext>
                <Subcontext>Registration Number: 13126050</Subcontext>
                <SubLink href="https://find-and-update.company-information.service.gov.uk/company/13126050?fbclid=IwAR3Fm3QHdllfP_z1QIZ9e9UX-warFarV1XuwBqsxXyPl0M3k-BLSvkNdXuE">
                  {t(messages.view())} <img src={arrow1} alt="arrow" />
                </SubLink>
              </MyOfficeUS>
              <MyAbouts>
                <MyTitle>{t(messages.titleAbout())}</MyTitle>
                <SubcontextAbouts>
                  <Subtitle>DeFi For You</Subtitle>
                  {t(messages.detailAbout())}
                </SubcontextAbouts>
              </MyAbouts>
              <MySocical>
                <MyTitle>{t(messages.find())}</MyTitle>
                <ListSocical>
                  <a
                    href="https://github.com/defi-vn/"
                    target="_blank"
                    rel="noreferrer"
                    style={{ marginRight: '22.40px' }}
                  >
                    <img src={github} alt="github" />
                  </a>
                  <a
                    href="https://t.me/DeFiForYou_English"
                    target="_blank"
                    rel="noreferrer"
                    style={{ marginRight: '22.40px' }}
                  >
                    <img src={telegram} alt="telegram" />
                  </a>
                  <a
                    href="https://www.facebook.com/DeFiForYouDFY"
                    target="_blank"
                    rel="noreferrer"
                    style={{ marginRight: '22.40px' }}
                  >
                    <img src={fb} alt="fb" />
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCGaSCU17Zo_2CzJNaBeUHaA/featured"
                    target="_blank"
                    rel="noreferrer"
                    style={{ marginRight: '22.40px' }}
                  >
                    <img src={youtube} alt="youtube" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/defiforyou"
                    target="_blank"
                    rel="noreferrer"
                    style={{ marginRight: '22.40px' }}
                  >
                    <img src={linked} alt="linked" />
                  </a>
                  <a
                    href="https://twitter.com/Defiforyou"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={twitter} alt="twitter" />
                  </a>
                </ListSocical>
              </MySocical>
              <MyQuicklink>
                <MyTitle>{t(messages.quick())}</MyTitle>
                <Subcontext>
                  {t(messages.white())} <img src={arrow} alt="arrow" />
                </Subcontext>
                <Subcontext>
                  {t(messages.getApp())} <img src={arrow} alt="arrow" />
                </Subcontext>
              </MyQuicklink>
            </MyGrid>
          </MyContainer>
        </MyNavigation>
      </MyFooter>
      <MyCoppyright>
        <MyContainerCoppyright>
          <CoppyRight>© 2021 DeFi For You. All rights reserved.</CoppyRight>
          <Links>
            <LanguageSwitch />
            <div>
              <LinkTo
                href="https://defi-for-you.gitbook.io/faq/p2p-lending/terms-of-service"
                target="_blank"
                rel="noreferrer"
                style={{
                  borderRight: `1px solid ${COLOR_GRAY_COPPYRIGHT}`,
                  paddingRight: '14px',
                  marginLeft: '14px',
                }}
              >
                {t(messages.term())}
              </LinkTo>

              <LinkTo
                href="https://defi-for-you.gitbook.io/faq/p2p-lending/privacy-policy"
                target="_blank"
                rel="noreferrer"
              >
                {t(messages.privacy())}
              </LinkTo>
            </div>
          </Links>
        </MyContainerCoppyright>
      </MyCoppyright>
    </div>
  );
};

export default Footer;
