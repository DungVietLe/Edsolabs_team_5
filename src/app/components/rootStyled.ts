import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

export interface PropFlex {
  gap?: any;
  justifyContent?: any;
  alignItem?: any;
  flexgrow?: number;
  flexXl?: string;
}

export interface PropLinkButton {
  bg?: string;
  outlinebutton?: string;
  to?: any;
  isToggle?: boolean;
}

export const Flex = styled.div`
  display: flex;
  justify-content: ${(p: PropFlex) =>
    p.justifyContent ? p.justifyContent : 'flex-start'};
  align-items: ${(p: PropFlex) => (p.alignItem ? p.alignItem : 'stretch')};
  gap: ${(p: PropFlex) => (p.gap !== 0 ? p.gap : 0)};
  ${(p: PropFlex) => (p.flexgrow ? `flex-grow:${p.flexgrow} ;` : ``)}

  @media (max-width:1200px) {
    ${(p: PropFlex) => (p.flexXl ? `justify-content:${p.flexXl} ;` : ``)}
  }
`;

export const GropButtom = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
`;

export const LinkButtom = styled(Link)`
  background-color: #fff;
  border-radius: 172px;
  display: inline-block;
  gap: 20px;
  color: #282c37;
  display: flex;
  align-items: center;
  text-align: center;
  text-decoration: none;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  height: 34px;
  padding: 0 16px;
  ${(p: PropLinkButton) =>
    p.bg
      ? `background-color: #${p.bg};
    border: 1px solid #${p.bg};`
      : ``}
  ${(p: PropLinkButton) =>
    p.outlinebutton
      ? `background-color: transparent;
      border: 1px solid #${p.outlinebutton};
      color:#${p.outlinebutton};`
      : ``}

  @media (max-width: 1023px) {
    gap: 10px;
  }
  @media (max-width: 768px) {
    height: 30px;
    width: auto;
    padding: 0 12.5px;
    display: none;
    &.show-btn {
      display: flex;
    }
  }
`;
