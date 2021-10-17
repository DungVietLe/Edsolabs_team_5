import { TextField } from '@mui/material';
import styled from 'styled-components/macro';
import { Flex } from '../rootStyled';

export const Wrapper = styled.div`
  .button {
    @media (max-width: 480px) {
      margin-top: 40px !important;
    }
  }
  padding: 25px 30px;
  width: 100%;
  min-height: 681px;
  flex-grow: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  & > div {
    width: 100%;
  }
  @media (max-width: 768px) {
    padding: 12px 16px;
    min-height: 553px;
  }
`;

export const TabBorrow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Tabheader = styled.div`
  padding: 4px;
  background: #282c37;
  border-radius: 27px;
  display: flex;
  width: 283px;
  @media (max-width: 480px) {
    width: 227px;
  }
  justify-content: space-between;
  align-items: center;
  margin-bottom: 36px;
`;

export const LabelTab = styled.span`
  cursor: pointer;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  padding: 13px 24px;
  color: #fff;
  border-radius: 172px;
  transition: all 0.5s ease-in-out;
  &.active {
    color: #282c37;
    background: linear-gradient(
      221.15deg,
      #bd8727 0%,
      #ffd574 49.02%,
      #feca50 62.02%,
      #bd8727 101.47%
    );
  }
  @media (max-width: 768px) {
    padding: 8.5px 12px;
  }
`;

export const TabContent = styled.div`
  width: 100%;
`;

export interface PropTextField {
  error?: any;
}

export const MyTextField = styled(TextField)`
  &.wrap--input {
    width: 100%;
    border-radius: 22px;
    transition: border 0.3s ease-in-out;
    ${(p: PropTextField) =>
      p.error ? `border: 1px solid #ff5252;` : 'border: 1px solid #74767B;'}
    &:hover {
      ${(p: PropTextField) =>
        p.error ? `border: 1px solid #ff5252;` : 'border: 1px solid #fff;'}
    }
    &:focus-within {
      ${(p: PropTextField) =>
        p.error
          ? `border: 1px solid #ff5252;`
          : 'border: 1px solid rgb(248, 176, 23);'}
      ${(p: PropTextField) =>
        p.error
          ? `box-shadow: none;`
          : 'box-shadow: 0px 0px 0px 1px rgb(248, 176, 23);'}
    }
    box-sizing: border-box;
    height: 44px;
    @media (max-width: 768px) {
      height: 40px;
    }
    input {
      display: inline-block;
      padding: 9.5px 20px;
      border-radius: 22px;
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;

      color: #fff;
      @media (max-width: 768px) {
        padding: 7.5px 15px;
      }
      &::hover {
        outline: none;
        border: none;
      }
    }
    fieldset {
      border: none;
    }
  }
  div {
    width: inherit;
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  @media (max-width: 375px) {
    row-gap: 5px;
  }
`;

export const FlexColumn = styled(Flex)`
  flex-direction: column;
`;

export const Item = styled.div`
  color: #fff;
  span {
    color: #dba83d;
  }
`;

export const Image = styled.div`
  max-width: 227px;
  width: 100%;
  margin: 0 auto;
  margin-top: 40px;
  margin-bottom: 52px;
  @media (max-width: 991px) {
    max-width: 300px;
  }
  img {
    width: 100%;
    height: auto;
  }
`;

export const FormCtrol = styled.div`
  position: relative;
  width: 100%;
  height: 77px;
  @media (max-width: 375px) {
    height: 72px;
  }

  &.left {
    width: auto;
    flex-grow: 1;
  }
  &.right {
    width: 110px;
    display: flex;
    align-items: center;
    @media (max-width: 600px) {
      min-width: 94px;
      max-width: 94px;
      padding-top: 26px !important;
    }
    & > div {
      transform: translateY(-2.5px);
      width: 100%;
    }
    z-index: 1;
  }

  .form__select {
    svg {
      color: #fff;
    }
    .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input {
      padding: 12px 15px;
      @media (max-width: 768px) {
        padding: 11.5px 12px;
      }
    }
    border-radius: 22px;
    color: #fff;

    &:hover {
      fieldset {
        border: none;
      }
    }
    fieldset {
      border: none;
    }
  }
  label {
    display: block;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #fff;
    margin-bottom: 6px;
    @media (max-width: 480px) {
      font-size: 12px;
    }
  }
  .error {
    margin-top: 3px;
    font-size: 12px;
    color: #ff5252;
    line-height: 12px;
    word-break: break-word;
    overflow-wrap: break-word;
    word-wrap: break-word;
    -webkit-hyphens: auto;
    -ms-hyphens: auto;
    hyphens: auto;
  }
  .box-tip {
    margin-top: 5px;
    color: #c9cacd;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    display: inline-flex;
    justify-content: flex-start;
    align-items: center;
    svg {
      display: inline-block;
      margin-left: 5px;
      width: 10px;
      height: 10px;
      font-size: 12px;
    }
  }
  span {
    display: inline-block;
    width: 100%;
    color: #ff5252;
    font-size: 12px;
    min-height: 14px;
    min-width: 1px;
  }
`;
