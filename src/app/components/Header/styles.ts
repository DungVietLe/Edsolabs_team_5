import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Button } from '@material-ui/core';

export interface PropMenu {
  isToggle?: boolean;
}

export const Headers = styled.div`
  position: fixed;
  padding: 20px 30px;
  min-height: 35px;
  max-height: 100px;
  background-color: #282c37;
  width: 100vw;
  left: 0;
  top: 0;
  @media (max-width: 768px) {
    padding: 12px 16px 14px 16px;
  }
  z-index: 100000;
  border-bottom: 1px solid #4f4f4f;
`;

export const Logo = styled(Link)<{ to: any }>`
  display: block;
  img {
    max-width: 100%;
    max-height: 60px;
    min-width: 126px;
    padding-right: 20px;
    @media (max-width: 768px) {
      max-height: 30px;
    }
  }
  width: 17%;
  @media (max-width: 1200px) {
    max-height: 60px;
    max-width: 126px;
  }
`;

export const MenuDesktop = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-inline-start: 0;
  gap: 25px;
  li {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    list-style: none;
    position: relative;
    &::before {
      content: '';
      position: absolute;
      left: 0;
      bottom: -6px;
      width: 30px;
      height: 2px;
      background-color: #dba83d;
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 0.3s ease-in-out;
    }
    &:hover,
    &.active {
      a {
        color: #dba83d;
      }
      &::before {
        transform: scaleX(1);
        transform-origin: left;
      }
    }
  }

  a {
    text-decoration: none;
    color: #d1d1d3;
    cursor: pointer;
    font-size: 16px;
    line-height: 20px;
  }
  @media (max-width: 1200px) {
    display: none;
  }
  @media (max-width: 1300px) {
    gap: 7px;
  }
`;

export const Toggle = styled.button`
  margin-left: 10px;
  outline: none;
  border: none;
  background-color: transparent;
  display: inline-block;
  color: #fff;
  display: none;
  @media (max-width: 1200px) {
    display: block;
  }
`;

export const MenuMobile = styled.ul`
  display: none;
  width: 100%;
  padding-inline-start: 0;
  @media (max-width: 1200px) {
    display: flex;
    justify-content: start;
    align-items: flex-start;
    flex-direction: column;
    li {
      width: 100%;
      border-bottom: 1px solid #171a23;
      font-style: normal;
      display: block;
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      list-style: none;
      position: relative;
      & > svg {
        transform: rotate(0deg);
        transition: transform 0.2s ease-in-out;
      }
      &.active {
        background-color: #282c37;
        & > svg {
          transform: rotate(270deg);
        }
      }
    }

    a {
      display: block;
      text-decoration: none;
      color: #d1d1d3;
      cursor: pointer;
      padding: 13px 16px 11px 16px;
      font-size: 16px;
      line-height: 20px;
    }
    ul {
      li {
        border-top: 1px solid #171a23;
        border-bottom: none;
        padding-left: 20px;
      }
      ul {
        margin-left: -20px;
        width: calc(100% + 20px);
        li {
          padding-left: 40px;
        }
      }
    }
  }
`;
export const NewButton = styled(Button)`
  &.MuiButton-text {
    padding: 0;
  }
  &.MuiButton-root {
    min-width: 40px;
  }
`;

export const NavMobile = styled.div`
  z-index: 1;
  display: none;
  position: fixed;
  overflow: scroll;
  width: 100vw;
  height: calc(100vh - 60px);
  left: 0;
  top: 80px;
  background-color: #171a23;
  @media (max-width: 1200px) {
    display: ${(p: PropMenu) => (p.isToggle ? 'block' : 'none')};
  }
  @media (max-width: 768px) {
    height: calc(100vh - 40px);
    left: 0;
    top: 56px;
  }
`;

export const HeaderNav = styled.div`
  padding-top: 18px;
  width: 100%;
  display: none;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  span {
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;
    color: #fff;
  }
  @media (max-width: 1200px) {
    display: block;
  }
`;

export const Info = styled.div`
  &.desktop {
    display: inline-flex;
    justify-content: center;
    gap: 10px;
    align-items: center;
    svg {
      width: 40px;
      height: 40px;
      @media (max-width: 768px) {
        width: 30px;
        height: 30px;
      }
    }
    span {
      display: inline-block;
      text-transform: none;
      color: #fff;
    }
  }
  &.mobile {
    display: none;
  }
  @media (max-width: 1200px) {
    &.desktop {
      span {
        display: none;
      }
    }
    &.mobile {
      display: flex;
      align-items: center;
      flex-direction: column;
      margin-bottom: 15px;
    }
  }
`;

export const Arrow = styled(ArrowBackIosIcon)`
  position: absolute;
  right: 10px;
  top: 16px;
  font-size: 12px;
  color: #d1d1d3;
  width: 15px !important;
  height: 15px !important;
`;
