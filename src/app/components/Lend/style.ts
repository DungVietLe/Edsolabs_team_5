import { TextField } from '@mui/material';
import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  padding: 25px 30px;
  width: 100%;
  min-height: 521px;
  flex-grow: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  & > div {
    width: 100%;
  }
  @media (max-width: 768px) {
    padding: 25px 16px 12px 16px;
    min-height: 496px;
  }
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
    &--mutiselect {
      width: 100%;
    }
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
    ${(p: PropTextField) =>
      p.error ? `border: 1px solid #ff5252;` : 'border: 1px solid #74767B;'}
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
`;
