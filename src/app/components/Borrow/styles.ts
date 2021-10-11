import { TextField } from '@mui/material';
import styled from 'styled-components/macro';
import { Flex } from '../rootStyled';

export const Wrapper = styled.div`
  padding: 25px 30px;
  width: 100%;
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
  justify-content: center;
  align-items: center;
  margin-bottom: 13px;
`;

export const LabelTab = styled.span`
  cursor: pointer;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  padding: 12.5px 24px;
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
    padding: 8px 12px;
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
    ${(p: PropTextField) =>
      p.error ? `border: 1px solid red;` : 'border: 1px solid #74767B;'}
    &:hover {
      ${(p: PropTextField) =>
        p.error ? `border: 1px solid red;` : 'border: 1px solid #fff;'}
    }
    box-sizing: border-box;
    max-height: 44px;
    @media (max-width: 475px) {
      max-height: 40px;
    }
    input {
      display: inline-block;
      padding: 10.5px 20px;
      border-radius: 22px;
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;

      color: #fff;
      @media (max-width: 768px) {
        padding: 8.5px 15px;
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
  min-height: 96px;
  &.left {
    width: auto;
    flex-grow: 1;
  }
  &.right {
    width: 130px;
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
  }
  span {
    display: inline-block;
    width: 100%;
    color: #ff5252;
    font-size: 12px;
    min-height: 14px;
    min-width: 1px;
    &.tip {
      color: #c9cacd;
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
  }
`;
