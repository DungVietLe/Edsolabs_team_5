import { TextField } from '@mui/material';
import styled from 'styled-components/macro';
import Select from '@mui/material/Select';
import Radio from '@mui/material/Radio';

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

export interface PropTextField {
  error?: any;
}

export const MyTextField = styled(TextField)`
  &.wrap--input {
    width: 100%;
    border-radius: 22px;
    ${(p: PropTextField) =>
      p.error ? `border: 1px solid red;` : 'border: 1px solid #74767B;'}
    box-sizing: border-box;
    input {
      padding: 12px 20px;
      border-radius: 22px;
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      color: #fff;
      @media (max-width: 768px) {
        padding: 11.5px 16px;
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
export const MyRadio = styled(Radio)`
  color: #000 !important;
  &.Mui-checked {
    color: #000 !important;
  }
`;

export const ItemRadio = styled.div`
  width: 150px;
`;

export const MySelect = styled(Select)`
  ${(p: PropTextField) => {
    return p.error ? `border: 1px solid red;` : 'border: 1px solid #74767B;';
  }}
  &.add_text {
    ${(p: PropTextField) => {
      return p.error ? `margin-top:-11px` : '';
    }}
  }
`;

export const FormCtrol = styled.div`
  width: 100%;
  min-height: 96px;
  &.left {
    width: auto;
    flex-grow: 1;
  }
  &.right {
    width: 110px;
    display: flex;
    align-items: center;
    @media (max-width: 600px) {
      width: 94px;
    }
    & > div {
      transform: translateY(-2.5px);
    }
    div {
      width: 100%;
    }
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
      p.error ? `border: 1px solid red;` : 'border: 1px solid #74767B;'}
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
  span.error {
    color: #ff5252;
    font-size: 12px;
    min-height: 14px;
    min-width: 1px;
  }
  span {
    color: #fff;
  }
`;
