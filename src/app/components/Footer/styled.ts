import {
  COLOR_BG_FOOTER,
  COLOR_GRAY_COPPYRIGHT,
  COLOR_GRAY_FOOTER,
  COLOR_PRIMARY_FOOTER,
  COLOR_TITLE_WHITE_FOOTER,
} from 'app/constains/global';
import styled from 'styled-components';

export const MyFooter = styled.div`
  width: 100%;
  height: 808px;
  padding: 80px 0;

  background: #171a23;
  border-top: 1px solid rgba(125, 111, 125, 0.8);
  @media (max-width: 600px) {
    height: auto;
    padding: 30px 0 29px;
  }
  @media (min-width: 600px) and (max-width: 768px) {
    height: auto;
  }
  @media (min-width: 760px) and (max-width: 1020px) {
    height: auto;
  }
  @media (min-width: 1020px) and (max-width: 1366px) {
    height: auto;
    width: auto;
  }
`;

export const MyNavigation = styled.div``;
export const MyCoppyright = styled.div`
  width: 100%;
  height: 61px;
  color: ${COLOR_GRAY_COPPYRIGHT};
  font-size: 14px;
  background: ${COLOR_BG_FOOTER};
  padding: 16px 0 24px 0;
  @media (max-width: 600px) {
    height: 90px;
    width: 100%;
  }
  @media (min-width: 600px) and (max-width: 700px) {
    height: 94px;
    width: 100%;
  }
  @media (min-width: 700px) and (max-width: 1024px) {
    height: 73px;
  }
`;
export const MyContainer = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 12px 16px;
  @media (min-width: 600px) and (max-width: 700px) {
    max-width: 480px;
  }
  @media (min-width: 700px) and (max-width: 1020px) {
    max-width: 720px;
  }
`;
export const Subcontext = styled.span`
  color: ${COLOR_GRAY_FOOTER};
  font-size: 14px;
  margin-top: 0.6em;
`;
export const SubcontextAbouts = styled.span`
  color: ${COLOR_GRAY_FOOTER};
  font-size: 14px;
  margin-top: 0.6em;
  width: 1028px;
  @media (max-width: 600px) {
    width: 100%;
  }
  @media (min-width: 600px) and (max-width: 760px) {
    width: 100%;
  }
  @media (min-width: 760px) and (max-width: 1020px) {
    width: 100%;
  }
  @media (min-width: 1020px) and (max-width: 1366px) {
    width: auto;
  }
`;
export const SubLink = styled.a`
  color: ${COLOR_PRIMARY_FOOTER};
  font-size: 14px;
  text-decoration: none;
  margin-top: 0.6em;
`;
export const Subtitle = styled.span`
  color: ${COLOR_PRIMARY_FOOTER};
  font-size: 14px;
`;

export const MyGrid = styled.div`
  display: grid;
  grid-template-columns: 3fr 6fr 2fr 1fr;
  grid-row-gap: 4em;
  grid-template-areas:
    'company officeHN socical socical .'
    'company officeUS quick quick .'
    'company abouts abouts abouts abouts';
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    grid-row-gap: 2em;
  }
  @media (min-width: 600px) and (max-width: 700px) {
    display: flex;
    flex-direction: column;
    grid-row-gap: 3em;
  }
  @media (min-width: 700px) and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr !important;
    grid-column-gap: 20px;
    grid-row-gap: 3em;
    grid-template-areas:
      'company officeHN officeHN'
      'socical officeUS officeUS'
      'quick quick quick'
      'abouts abouts abouts';
  }
`;
export const MyTitle = styled.div`
  color: ${COLOR_TITLE_WHITE_FOOTER};
  font-weight: 700;
  font-size: 14px;
  margin-bottom: 2em;
`;
export const MyCompany = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: company;
`;
export const MyOfficeHN = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: officeHN;
`;
export const MyOfficeUS = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: officeUS;
`;
export const MyAbouts = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: abouts;
`;
export const MySocical = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: socical;
`;
export const MyQuicklink = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: quick;
`;
export const DfyDecorator = styled.div`
  font-family: 'Druk Wide Bold';
  font-size: 8.6em;
  color: transparent;
  max-width: 100%;
  line-height: 1em;
  margin-bottom: -62px;

  -webkit-text-stroke: 1px #2e3b4f;
  overflow: hidden;
  white-space: nowrap;
  user-select: none;
  pointer-events: none;
  @media (max-width: 600px) {
    font-size: 2em;
    margin-left: -2px;
    margin-bottom: -21px;
  }
  @media (min-width: 600px) and (max-width: 768px) {
    font-size: 4em;

    margin-bottom: -21px;
  }
`;
export const ListSocical = styled.div`
  display: flex;
`;
export const MyContainerCoppyright = styled.div`
  width: 1180px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  @media (max-width: 600px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-contents: center;
  }
  @media (min-width: 600px) and (max-width: 700px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-contents: center;
  }
  @media (min-width: 700px) and (max-width: 1024px) {
    max-width: 720px;
    padding: 8px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-contents: center;
  }
`;
export const CoppyRight = styled.div`
  @media (max-width: 600px) {
    line-height: 35px;
  }
  @media (min-width: 600px) and (max-width: 768px) {
    line-height: 35px;
  }
`;
export const Links = styled.div`
  display: flex;
`;
export const LinkTo = styled.a`
  color: ${COLOR_GRAY_COPPYRIGHT};
  font-size: 14px;
  text-decoration: none;
  margin-right: 12px;
`;
