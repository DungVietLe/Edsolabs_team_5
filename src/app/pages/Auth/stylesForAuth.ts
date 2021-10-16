import TabPanel from '@mui/lab/TabPanel';
import { Button, Grid, Tab, TextField } from '@mui/material';
import ReCAPTCHA from 'react-google-recaptcha';
import {
  COLOR_BG_AUTH,
  COLOR_PRIMARY_FOOTER,
  COLOR_TITLE_WHITE_FOOTER,
} from 'app/constains/global';
import styled from 'styled-components';
interface MyProps {
  sz?: string;
  fw?: any;
}
interface MyError {
  error?: boolean;
}
interface MyButton {
  w?: string;
  wmb?: string;
  hmb?: string;
}
interface MyBox {
  h?: string;
}
interface MyGrid {
  od?: any;
}

export const ContainerAuth = styled.div`
  width: 100%;
  height: auto;
  background-color: ${COLOR_BG_AUTH};
  padding: 119px 0px 64px 0px;

  @media (max-width: 1024px) {
    padding: 90px 16px 28px 16px;
  }
  @media (max-width: 991px) {
    padding: 70px 16px 28px 16px;
  }
`;
export const Container = styled.div`
  max-width: 1290px;
  margin: 0 auto;
`;
export const TitleAuth = styled.h2`
  font-size: 54px;
  font-weight: 700;
  margin: 0 0 8px 0;
  color: ${COLOR_TITLE_WHITE_FOOTER};
  & > span {
    color: ${COLOR_PRIMARY_FOOTER};
  }
  @media (max-width: 600px) {
    font-size: 36px;
    line-height: 43.88px;
    max-width: 296px;
  }
`;
export const NtfTitle = styled.div`
  font-family: 'Montserrat', sans-serif;
  width: 715px;
  font-size: ${(p: MyProps) => (p.sz !== '' ? p.sz : '16px')};
  font-weight: ${(p: MyProps) => (p.fw !== '' ? p.fw : 500)};
  line-height: 24.38px;
  margin: 0 0 50px 0;
  color: ${COLOR_TITLE_WHITE_FOOTER};
  & > span {
    color: ${COLOR_PRIMARY_FOOTER};
  }
  @media (max-width: 600px) {
    width: 100%;
    font-size: 14px;
    line-height: 19.07px;
  }
  @media (min-width: 600px) {
    width: 100%;
  } ;
`;
export const SubSpan = styled.span`
  font-size: 54px;
  font-weight: 700;
  line-height: 65.83px;
  color: ${COLOR_TITLE_WHITE_FOOTER};
`;
export const MyTab = styled(Tab)`
  font-size: 30px !important;
  font-weight: 600 !important;
  padding: 12px 0 11px 0 !important;
  &.Mui-selected {
    background-color: none !important;
  }
`;
export const MyTabPanel = styled(TabPanel)`
  &.css-13xfq8m-MuiTabPanel-root {
    padding: 24px 0 0 0;
  }
`;
export const MyLabel = styled.label`
  color: ${COLOR_TITLE_WHITE_FOOTER};
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  display: block;
`;
export const MyTextField = styled(TextField)`
  max-width: 584px;
  box-sizing: border-box;
  &.MuiFormControl-root {
    height: 80px;
  }

  & div.MuiOutlinedInput-root {
    border-radius: 22px;
    margin: 6px 0 6px 0;
    border: ${(p: MyError) =>
      p.error ? ' 1px solid red' : '1px solid #74767b'};
    padding-right: 0;
    &:hover {
      border: ${(p: MyError) => (p.error ? '1px solid red' : '1px solid #fff')};
    }
    &:focus-within {
      border: ${(p: MyError) =>
        p.error ? '1px solid red' : '1px solid rgb(248, 176, 23)'};
      box-shadow: ${(p: MyError) =>
        p.error ? 'none' : '0px 0px 0px 1px rgb(248, 176, 23)'};
      svg.MuiSvgIcon-root {
        color: ${(p: MyError) => (p.error ? '#ff5252' : 'rgb(248, 176, 23)')};
      }
    }
  }

  & input.MuiOutlinedInput-input {
    font-family: 'Montserrat', sans-serif;
    height: 44px;
    box-sizing: border-box;
    position: relative;
    color: #a2a3a7;
    font-size: 14px;
  }
  & fieldset.MuiOutlinedInput-notchedOutline {
    height: 51px;
    border: ${(p: MyError) => (p.error ? 'none' : 'none')};
  }
  & div.MuiInputAdornment-root {
    position: absolute;
    right: 8px;
  }
  & svg.MuiSvgIcon-root {
    color: ${(p: MyError) => (p.error ? '#ff5252' : '#a2a3a7')};
  }
`;
export const Mybox = styled.div`
  height: ${(p: MyBox) => (p.h === '388px' ? p.h : '194px')};
  margin-bottom: 9px;
`;
export const MyComponent = styled.div`
  .MuiFormHelperText-root.Mui-error {
    font-family: 'Montserrat', sans-serif;
    color: #ff5252;
    font-size: 12px;
    margin: -5px 0 0 0;
    animation: showError 0.3s;
    position: absolute;
    top: 57px;
  }

  @keyframes showError {
    0% {
      top: 50px;
    }
    100% {
      top: 57px;
    }
  }
`;
export const MyButtonAuthLogin = styled(Button)`
  &.MuiButton-root {
    font-family: 'Montserrat';

    width: ${(p: MyButton) => (p.w === '174px' ? p.w : '117px')};
    height: 48px;
    border-radius: 1000px;
    color: rgba(40, 44, 55, 1);
    font-size: 16px;
    font-weight: 500;
    outline: none;
    border: none;
    cursor: pointer;
    text-transform: capitalize;
    @media (max-width: 600px) {
      width: ${(p: MyButton) => (p.wmb === '170px' ? p.wmb : '90px')};
      height: ${(p: MyButton) => p.hmb === '42px' && p.hmb};
    }
  }
  background: linear-gradient(
    221.15deg,
    #bd8727 0%,
    #ffd574 49.02%,
    #feca50 62.02%,
    #bd8727 101.47%
  );
`;
export const BoxLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 76px;
  @media (max-width: 600px) {
    margin-top: 40px;
  } ;
`;
export const MyImg = styled.img`
  width: 100%;
`;
export const MyGridLog1 = styled(Grid)`
  @media (max-width: 600px) {
    order: ${(p: MyGrid) => (p.od !== '' ? p.od : '')};
  }
  @media (min-width: 600px) and (max-width: 1024px) {
    order: ${(p: MyGrid) => (p.od !== '' ? p.od : '')};
  }
  @media (min-width: 1024px) {
    order: ${(p: MyGrid) => (p.od !== '' ? 1 : '')};
  }
`;
export const MyGridLog2 = styled(Grid)`
  @media (max-width: 600px) {
    order: ${(p: MyGrid) => (p.od !== '' ? p.od : '')};
  }
  @media (min-width: 600px) and (max-width: 1024px) {
    order: ${(p: MyGrid) => (p.od !== '' ? p.od : '')};
  }
  @media (min-width: 1024px) {
    order: ${(p: MyGrid) => (p.od !== '' ? 2 : '')};
  }
`;

export const MyCapcha = styled(ReCAPTCHA)`
  @media (max-width: 600px) {
    display: none;
  } ;
`;

export const ContainerNtf = styled.div`
  position: fixed;
  offset: 1;
  background-color: #333;
  opacity: 0.4;
`;
export const BoxNtf = styled.div`
  max-width: 300px;
  height: 250px;
  background-color: #282c38;
  border-radius: 20px;
`;
export const MybuttonNtf = styled.div`
  width: 80px;
  height: 40px;
  border-radius: 20px;
  background-color: #efbb46;
  color: #333;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0 0 120px;
`;
export const TitleNtf = styled.div`
  text-align: center;
  font-size: 20px;
  color: #fff;
  font-weight: 600;
`;
