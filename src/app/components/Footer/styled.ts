import {
  COLOR_BG_FOOTER,
  COLOR_GRAY_COPPYRIGHT,
  COLOR_GRAY_FOOTER,
  COLOR_PRIMARY_FOOTER,
  COLOR_TITLE_WHITE_FOOTER,
} from 'app/constains/global';
import styled from 'styled-components/macro';
import footer from './decorator.png';
export const MyFooter = styled.div`
  width: 100%;
  height: 808px;
  padding: 130px 0;
  background-image: url(${footer});
  background-repeat: no-repeat;
  background-size: 1486px;
  background-position: 0 64px;
  background-color: #171a23;
  border-top: 1px solid rgba(125, 111, 125, 0.8);
  @media (max-width: 600px) {
    height: auto;
    padding: 50px 0 29px;
    background-size: 100%;
    background-position: 0 30px;
  }
  @media (min-width: 600px) and (max-width: 768px) {
    background-size: 100%;
    background-position: 0 30px;
    padding: 60px 0 20px 0;
    height: auto;
  }
  @media (min-width: 760px) and (max-width: 1020px) {
    background-size: 100%;
    background-position: 0 30px;
    padding: 60px 0 20px 0;
    height: auto;
  }
  @media (min-width: 1020px) and (max-width: 1366px) {
    background-size: 100%;
    background-position: 0 30px;
    padding: 90px 0 20px 0;
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
  background-color: ${COLOR_BG_FOOTER};

  padding: 16px 0 24px 0;
  @media (max-width: 600px) {
    min-height: 90px;
    height: auto;
    width: 100%;
  }
  @media (min-width: 600px) and (max-width: 700px) {
    min-height: 94px;
    height: auto;
    width: 100%;
  }
  @media (min-width: 700px) and (max-width: 1024px) {
    min-height: 73px;
    height: auto;
  }
`;
export const MyContainer = styled.div`
  max-width: 1324px;
  margin: 0 auto;
  padding: 12px 16px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media (min-width: 768px) and (max-width: 1020px) {
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
  max-width: 1028px;
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
  font-weight: 600;
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
export const ListSocical = styled.div`
  display: flex;
`;
export const MyContainerCoppyright = styled.div`
  max-width: 1324px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 16px;
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
  @media (max-width: 480px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 7px;
  }
`;
export const LinkTo = styled.a`
  color: ${COLOR_GRAY_COPPYRIGHT};
  font-size: 14px;
  text-decoration: none;
  margin-right: 12px;
`;
