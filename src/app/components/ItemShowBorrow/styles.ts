import styled from 'styled-components/macro';
import { LinkButtom } from '../rootStyled';

export const Item = styled.div`
  width: 100%;
  padding: 20px;
  background: #282c37;
  border-radius: 20px;
`;

export const Grid = styled.div`
  min-height: 233px;
  display: grid;
  grid-column-gap: 20px;
  grid-row-gap: 30px;
  grid-template-columns: 233px 1fr 266px;
  grid-template-rows: 53px auto;
  @media (max-width: 1300px) {
    grid-template-columns: 233px 1fr auto;
  }
  @media (max-width: 1100px) {
    grid-template-columns: 233px 1fr;
    grid-template-rows: 53px auto auto;
  }
  @media (max-width: 991px) {
    grid-template-columns: 170px 1fr;
    grid-template-rows: auto auto auto;
    grid-template-rows: 53px auto auto auto;
  }
  @media (max-width: 768px) {
    grid-column-gap: 12px;
    grid-template-columns: 170px 1fr;
    grid-template-rows: 53px auto auto auto;
  }
  @media (max-width: 480px) {
    grid-column-gap: 12px;
    grid-template-columns: 140px 1fr;
    grid-template-rows: 53px auto auto auto;
  }
  @media (max-width: 320px) {
    grid-column-gap: 12px;
    grid-template-columns: 110px 1fr;
    grid-template-rows: 53px auto auto auto;
  }
`;

export const Image = styled.div`
  display: block;

  object-fit: cover;
  grid-row: 1/3;
  grid-column: 1/2;
  @media (max-width: 1100px) {
    grid-row: 1/3;
    grid-column: 1/2;
  }
  img {
    max-width: 100%;
    height: 100%;
    @media (max-width: 991px) {
      height: auto;
    }
    @media (max-width: 768px) {
      height: auto;
    }
  }
`;
export const Heading = styled.h3`
  display: block;
  grid-row: 1/2;
  grid-column: 2/3;
  @media (max-width: 991px) {
    height: auto;
  }
  div {
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    color: #ffffff;
    margin-bottom: 8px;
    @media (max-width: 600px) {
      font-size: 18px;
      line-height: 22px;
    }
    svg {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      margin-left: 8px;
    }
  }
  & .star {
    display: flex;
    gap: 8px;
    svg {
      width: 17px;
      height: 17px;
      color: #f8b017;
    }
    span {
      color: #fff;
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
    }
  }
`;

export const Content = styled.div`
  padding-top: 5px;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  grid-row: 2/2;
  grid-column: 2/3;
  @media (max-width: 991px) {
    grid-row: 3/4;
    grid-column: 1/3;
  }
  @media (max-width: 768px) {
    grid-row: 2/2;
    grid-column: 2/3;
  }

  p {
    display: flex;
    font-size: 16px;
    line-height: 20px;
    font-weight: 500;
    @media (max-width: 768px) {
      font-size: 14px;
      line-height: 17px;
    }
  }
  .content-title {
    margin-right: 10px;
    display: block;
    width: 114px;
    color: #a2a3a7;
    @media (max-width: 991px) {
      width: auto;
      justify-content: flex-start;
    }
    @media (max-width: 768px) {
      width: 114px;
    }
    @media (max-width: 320px) {
      width: auto;
      justify-content: flex-start;
    }
  }
  .content-name {
    display: block;
    color: #ffffff;
  }
  @media (max-width: 600px) {
    grid-row: 3/4;
    grid-column: 1/3;
    gap: 12px;
  }
`;

export const FooterItem = styled.div`
  display: block;
  position: relative;
  text-align: right;
  grid-column: 3/3;
  grid-row: 1/3;
  padding-left: 10px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 1px;
    background: #45484f;
  }
  span {
    display: block;
  }
  .title {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #a2a3a7;
  }
  @media (max-width: 1100px) {
    grid-row: 3/4;
    grid-column: 1/3;
    padding-left: 0;
    padding-top: 10px;
    &::before {
      width: 100%;
      height: 1px;
      background: #45484f;
    }
  }
  @media (max-width: 1100px) {
    grid-row: 4/5;
    grid-column: 1/3;
    padding-left: 0;
    padding-top: 10px;
    &::before {
      width: 100%;
      height: 1px;
      background: #45484f;
    }
  }
`;

export const InterestRate = styled.div`
  margin-bottom: 16px;
  .interest {
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 37px;
    color: #3fd762;
  }
  @media (max-width: 1100px) {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const CollateralAccepted = styled.div`
  margin-bottom: 16px;
  .coin {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    text-align: right;
    color: #ffffff;
  }
  @media (max-width: 1100px) {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

interface propBtnCuston {
  color?: string;
}

export const FlexColunm = styled.div`
  display: flex;
  gap: 11px;
  flex-direction: column;
  align-items: flex-end;
  @media (max-width: 480px) {
    align-items: flex-start;
  }
`;

export const ButtonCuston = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 1px solid transparent;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-width: 100px;
  border-radius: 13.5px;
  min-height: 26px;
  ${(p: propBtnCuston) =>
    p.color === 'xanh'
      ? 'color: #2596ff;border-color:#2596ff'
      : p.color === 'red'
      ? 'color: #fe951a;border-color:#fe951a'
      : p.color === 'orange'
      ? 'color: #ff4848;border-color:#ff4848'
      : ''};
`;

export const MyLinkButton = styled(LinkButtom)`
  &.btn {
    padding: 14px 24px;
    @media (max-width: 768px) {
      display: inline-flex;
      height: auto;
    }
  }
`;
