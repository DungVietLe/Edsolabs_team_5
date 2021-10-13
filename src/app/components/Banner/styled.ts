import { Button } from '@mui/material';
import styled from 'styled-components/macro';
import banner from '../../../images/imagebanner/banner.png';
export const Pawn = styled.div`
  width: 100%;
  height: auto;
  background: #171a23;
  padding: 60px 16px 80px 16px;
  @media (min-width: 200px) {
    width: 100%;
  }
`;
export const ViewBanner = styled.div`
  max-width: 1324px;
  background-image: url(${banner});
  background-size: cover;
  background-position: right center;
  border-radius: 20px;
  font-style: normal;
  padding: 48px 98px;
  margin: 0 auto;
  @media (max-width: 1400px) {
    padding: 12px;
    max-width: 1185px;
  }
  @media (max-width: 600px) {
    padding: 12px;
  }
`;
export const Title = styled.div`
  max-width: 392px;
  margin-bottom: 16px;
  font-weight: 600;
  font-size: 36px;
  line-height: 44px;
  color: #ffffff;
  @media (max-width: 600px) {
    font-size: 16px;
    margin-bottom: 7px;
    line-height: 19.5px;
  }
`;
export const Content = styled.div`
  font-weight: 500;
  display: flex;
  align-items: center;
  color: #ffffff;
  padding-bottom: 20px;
  @media (max-width: 599px) {
    max-width: 143px;
    font-size: 12px;
    line-height: 16px;
    text-transform: capitalize;
    &.contentPc {
      display: none;
    }
  }

  @media (min-width: 600px) and (max-width: 767px) {
    max-width: 300px;
    font-size: 20px;
    line-height: 24px;

    &.contentMobi {
      display: none !important;
    }
  }
  @media (min-width: 768px) {
    max-width: 496px;
    font-size: 20px;
    line-height: 24px;

    &.contentMobi {
      display: none !important;
    }
  }
`;
export const MyButton = styled(Button)`
  &.banner {
    font-family: 'Montserrat', sans-serif;
    background: linear-gradient(
      221.15deg,
      #bd8727 0%,
      #ffd574 49.02%,
      #feca50 62.02%,
      #bd8727 101.47%
    );
    &:hover {
      border: none;
    }
    border-radius: 172px;
    font-size: 20px;
    text-transform: capitalize;
    color: #282c37;
    width: 142px;
    height: 48px;
    border: none;
    @media (max-width: 600px) {
      font-size: 14px;
      line-height: 17px;
      width: 121px;
      height: 36px;
    }
  }
`;
