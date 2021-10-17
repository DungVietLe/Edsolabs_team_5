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
  height: 77vh;
  padding-top: 15px;
  background: #282c37;
  border-radius: 20px;
  margin: 98px auto;
  @media (max-height: 1920px) {
    height: 50vh;
  }
  @media (max-height: 1599px) {
    height: 55vh;
    margin: 70px auto 0 auto;
  }
  @media (max-height: 1400px) {
    height: 60vh;
    margin: 70px auto 0 auto;
  }
  @media (max-height: 1100px) {
    height: 65vh;
  }
  @media (max-height: 991px) {
    height: 78vh;
    margin: 30px auto 0 auto;
  }
  @media (max-height: 800px) {
    height: 85vh;
  }
  @media (max-height: 700px) {
    height: 81vh;
    margin: 20px auto 0 auto;
  }
  @media (max-height: 414px) {
    height: 80vh;
  }
  @media (max-height: 376px) {
    padding-top: 0px;
    height: 80vh;
  }
  @media (max-height: 320px) {
    height: 80vh;
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
  @media (max-width: 600px) {
    font-size: 25px;
    padding-bottom: 15px;
    padding-top: 10px;
  }
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
  @media (max-width: 600px) {
    padding-top: 24px;
    font-weight: bold;
    font-size: 24px;
    line-height: 150%;
    text-align: center;
    margin: 0 10px;
  }
  @media (max-width: 425px) {
    padding-top: 24px;
    font-weight: bold;
    font-size: 24px;
    line-height: 150%;
    text-align: center;
  }
  @media (max-width: 320px) {
    padding-top: 24px;
    font-weight: bold;
    font-size: 24px;
    line-height: 150%;
    text-align: center;
    margin-left: 0;
  }
`;
export const Wrapper = styled.div`
  overflow-y: auto;
  min-height: 100px;
  margin-right: 22px;
  @media (max-height: 1920px) {
    height: 35vh;
  }
  @media (max-height: 1599px) {
    height: 37vh;
  }
  @media (max-height: 1100px) {
    height: 40vh;
  }
  @media (max-height: 991px) {
    height: 43vh;
    margin: 60px auto 0 auto;
  }
  @media (max-height: 900px) {
    height: 41vh;
  }
  @media (max-height: 850px) {
    @media (max-width: 414px) {
      height: 60vh;
      margin: 0;
    }
    height: 37vh;
  }
  @media (max-height: 800px) {
    height: 45vh;
    @media (max-width: 540px) {
      height: 59vh;
      margin: 10px auto 0 auto;
    }
    @media (max-width: 414px) {
      height: 68vh;
      margin: 10px auto 0 auto;
    }
  }

  @media (max-height: 700px) {
    height: 38vh;
    margin: 50px auto 0 auto;
    @media (max-width: 667px) {
      height: 60vh;
      margin: 10px auto 0 auto;
    }
    @media (max-width: 375px) {
      height: 60vh;
    }
  }
  @media (max-height: 650px) {
    @media (max-width: 800px) {
      height: 40vh;
    }
    @media (max-width: 360px) {
      height: 60vh;
    }
    @media (max-width: 320px) {
      height: 60vh;
    }
    height: 35vh;
    margin: 20px auto 0 auto;
  }
  @media (max-height: 415px) {
    height: 20vh;
    margin: 10px auto 0 auto;
  }
  @media (max-height: 376px) {
    height: 15vh;
    margin: 5px auto 0 auto;
  }
  @media (max-height: 320px) {
    height: 20vh;
    margin: 5px auto 0 auto;
  }
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
  @media (max-width: 1600px) {
  }
  @media (max-width: 600px) {
  }
  @media (max-width: 425px) {
    margin: 12px 17px 8px 17px;
    font-size: 14px;
  }
  @media (max-width: 375px) {
    font-size: 14px;
  }
`;
export const ButtonClick = styled.div`
  max-width: 255px;
  margin: 40px auto;
  display: flex;
  @media (max-height: 768px) {
    margin: 30px auto;
  }
  @media (max-height: 650px) {
    margin: 20px auto;
  }
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
