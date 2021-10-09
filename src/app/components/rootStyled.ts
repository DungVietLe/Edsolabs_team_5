import { Button } from '@material-ui/core';
import styled from 'styled-components/macro';

export interface PropFlex {
  gap?: number;
  justifyContent?: any;
  alignItem?: any;
  flexgrow?: number;
  flexXl?: string;
  flexColumn?: number;
}

export interface PropLinkButton {
  bg?: string;
  outlinebutton?: string;
  to?: any;
  isToggle?: boolean;
  small?: any;
}

export const Flex = styled.div`
  display: flex;
  justify-content: ${(p: PropFlex) =>
    p.justifyContent ? p.justifyContent : 'flex-start'};
  align-items: ${(p: PropFlex) => (p.alignItem ? p.alignItem : 'stretch')};
  gap: ${(p: PropFlex) => (p.gap !== 0 ? `${p.gap}` : `0`)}px;
  ${(p: PropFlex) => (p.flexgrow ? `flex-grow:${p.flexgrow} ;` : ``)}

  @media (max-width:1200px) {
    ${(p: PropFlex) => (p.flexXl ? `justify-content:${p.flexXl} ;` : ``)}
  }
  ${(p: PropFlex) =>
    p.flexColumn
      ? `@media (max-width:${p.flexColumn}px) {
        flex-direction: column;
  }`
      : ''}
  @media (max-width: 1200px) and (min-width: 991px) {
    &.layout {
      gap: 30px;
    }
  }
`;

export const GropButtom = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
`;
export const ButtomBase = styled(Button)`
  &.btn {
    background-color: #fff;
    border-radius: 172px;
    display: inline-flex;
    gap: 20px;
    color: #282c37;
    width: auto;
    align-items: center;
    text-align: center;
    text-decoration: none;
    font-style: normal;
    justify-content: center;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    outline: none;
    cursor: pointer;
    border: none;
    padding: 9px 20px;
    span {
      font-family: 'Montserrat', sans-serif;
      ${(p: PropLinkButton) =>
        p.outlinebutton
          ? `color:#${p.outlinebutton};
      `
          : ``};
      ${(p: PropLinkButton) =>
        p.bg
          ? `color:#282C37;
      `
          : ``};
    }

    ${(p: PropLinkButton) =>
      p.outlinebutton
        ? `background-color: transparent;
      border: 1px solid #${p.outlinebutton};
      color:#${p.outlinebutton};`
        : ``}
    ${(p: PropLinkButton) =>
      p.bg
        ? `background: linear-gradient(221.15deg, #BD8727 0%, #FFD574 49.02%, #FECA50 62.02%, #BD8727 101.47%);;
      border: 1px solid #${p.bg};`
        : ``}
        

    @media (max-width: 1023px) {
      gap: 10px;
    }
    @media (max-width: 768px) {
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
    }
  }
`;
export const LinkButtom = styled(ButtomBase)`
  a {
    font-family: 'Montserrat', sans-serif;
    text-decoration: none;
    ${(p: PropLinkButton) =>
      p.outlinebutton
        ? `color:#${p.outlinebutton};
      `
        : ``};
    ${(p: PropLinkButton) =>
      p.bg
        ? `color:#282C37;
      `
        : ``};
  }
  &.btn {
    @media (max-width: 768px) {
      height: 30px;
      width: auto;
      padding: 0 12.5px;
      display: none;
      &.show-btn {
        display: flex;
      }
    }
  }

  line-height: 17px;
  padding: 9px 20px;
`;

export const ButtomSmall = styled(ButtomBase)`
  &.btn {
    line-height: 19px;
    padding: 7px 9.31px 8px 9.31px;
    min-width: 64px;
    font-size: 16px;
    @media (max-width: 450px) {
      padding: 6px 20px;
    }
  }
`;

export const ButtomMaxIcon = styled(ButtomBase)`
  &.btn {
    position: relative;
    display: block;
    width: 100%;
    padding: 15px 20px;
    height: auto;
    min-width: 64px;
    font-size: 16px;
    span {
      line-height: 24px;
    }
    /* min-height: 24px; */

    color: #282c37;
    svg {
      position: absolute;
      top: 50%;
      left: calc(50% - 52px);
      transform: translate(-50%, -50%);
    }
  }
`;

export const TitleTypewriter = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 60px;
  line-height: 73px;
  @media (max-width: 576px) {
    margin-bottom: 10px;
    font-size: 35px;
    line-height: 50px;
  }
  text-transform: capitalize;
  margin-bottom: 15px;
  color: #dba83d;
  .Typewriter {
    display: inline-block;
    margin-right: 5px;
    @media (max-width: 576px) {
      font-size: 35px;
    }
  }
  & > span {
    display: inline-block;
    color: #fff;
    margin-right: 5px;
  }
  @media (max-width: 1400px) {
    max-width: 1280px;
  }

  background-color: #232732;
`;
