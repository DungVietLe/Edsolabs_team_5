import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
export const PageNot = styled.div`
  min-height: 100vh;
  background: rgb(23, 26, 35);
  padding-bottom: 64px;
  color: rgba(0, 0, 0, 0.87);
  font-family: 'Montserrat';
  line-height: 1.5;
  display: flex;
`;
export const Wrapper = styled.div`
  flex: 1 1 auto;
  backface-visibility: hidden;
  display: flex;
  justify-content: space-around !important;
  min-height: 100vh;
  max-width: 100%;
  position: relative;

  @media (max-width: 1240px) {
    display: flex;
    flex-direction: column;
    justify-content: center !important;
    align-items: center;
  }
`;
export const Left = styled.div`
  width: 330px;
  display: flex !important;
  justify-content: space-between !important;

  @media (max-width: 1240px) {
    display: flex;
    flex-direction: column;
    justify-content: center !important;
    align-items: center;
    width: 100%;
  }
`;
export const LeftSide = styled.div`
  width: 100%;

  margin-top: 60px !important;

  align-items: center !important;

  justify-content: center !important;

  display: flex !important;

  justify-content: center;
`;
export const LeftContent = styled.div``;
export const LeftText = styled.div`
  color: #fff;
  font-weight: 600;
  font-size: 72px;
  line-height: 87.77px;
`;
export const LeftContext = styled.div`
  font-weight: 400;
  font-size: 48px;
  line-height: 58.51px;
  color: #fff;
`;
export const LeftBack = styled.div`
  margin-top: 20px !important;
`;
export const LeftLink = styled(Link)<{ to: any }>`
  font-weight: 600;
  width: 116px;
  font-style: normal;
  padding: 0 19.5555555556px;
  background: linear-gradient(
    221.15deg,
    #bd8727 0%,
    #ffd574 49.02%,
    #feca50 62.02%,
    #bd8727 101.47%
  );
  height: 44px !important;
  color: inherit;
  display: flex;
  flex: 1 0 auto;
  text-decoration: none;
  border-radius: 28px;
  color: #282c37 !important;
  align-items: center !important;
`;
export const LeftSpan = styled.span`
  align-items: center !important;
  height: 44px !important;
  color: inherit;
  display: flex;
  flex: 1 0 auto;
  justify-content: inherit;
  line-height: normal;
  position: relative;
  transition: inherit;
  transition-property: opacity;
`;
export const Right = styled.div`
  margin-top: 60px !important;
  align-items: center !important;
  justify-content: center !important;
  display: flex !important;
`;
