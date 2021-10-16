import styled from 'styled-components/macro';
import { Button } from '@mui/material';
export const ViewTerm = styled.div`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  z-index: 100001;
`;
export const Term = styled.div`
  max-width: 1324px;
  height: 70vh;
  background: #282c37;
  border-radius: 20px;
  margin: 98px auto;
  @media (max-width: 1526px) {
    height: 521px;
  }
`;
export const ViewText = styled.div``;
export const Title = styled.div`
  font-weight: bold;
  font-size: 40px;
  line-height: 150%;
  color: #ffffff;
  text-align: center;
  padding-bottom: 28px;
  padding-top: 30px;
  @media (max-width: 425px) {
    display: none;
  }
`;
export const Content = styled.div`
  max-width: 1213px;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  display: flex;
  align-items: center;
  color: #dba83d;
  margin-left: 40px;
  @media (max-width: 425px) {
    padding-top: 24px;
    font-weight: bold;
    font-size: 24px;
    line-height: 150%;
    text-align: center;
  }
`;
export const Wrapper = styled.div`
  overflow-y: auto;
  min-height: 100px;
  margin-right: 22px;
  ::-webkit-scrollbar {
    width: 11px;
    background: #45484f;
    border-radius: 5.5px;
  }
  ::-webkit-scrollbar-thumb {
    background: #a2a3a7;
    border-radius: 5.5px;
  }
  @media (max-width: 425px) {
    ::-webkit-scrollbar {
      width: 0px;
    }
  }
`;
export const Text = styled.div`
  max-width: 1213px;
  height: 40vh;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #dcdcdc;
  margin: 12px 71px 8px 40px;
  text-align: justify;
  .information {
    margin-bottom: 15px;
  }
  @media (max-width: 1526px) {
    height: 23vh;
  }
  @media (max-width: 600px) {
    height: 20vh;
  }
  @media (max-width: 425px) {
    margin: 12px 0px 8px 17px;
    font-size: 14px;
    height: 26vh;
  }
`;
export const ButtonClick = styled.div`
  max-width: 255px;
  margin: 40px auto;
  display: flex;
`;
export const Decline = styled(Button)`
  &.btn {
    text-transform: capitalize;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    margin-right: 64px;
    color: #ff4848;
    width: 110px;
    height: 48px;
    border: 1px solid #ff4848;
    box-sizing: border-box;
    border-radius: 1000px;
  }
`;
export const Accept = styled(Button)`
  &.btn {
    text-transform: capitalize;
    width: 105px;
    height: 48px;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    background: #45484f;
    border-radius: 1000px;
    color: #74767b;
  }
  &.active {
    text-transform: capitalize;
    background: linear-gradient(
      221.15deg,
      #bd8727 0%,
      #ffd574 49.02%,
      #feca50 62.02%,
      #bd8727 101.47%
    );
    border-radius: 1000px;
    color: #282c37;
    width: 105px;
    height: 48px;
    &:hover {
    }
  }
`;
