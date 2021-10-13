import styled from 'styled-components/macro';
import { LinkButtom } from '../rootStyled';
import IMG_TICKER from 'assets/Image/ticker-hard.png';

export const Item = styled.div`
  width: 100%;
  padding: 20px;
  background: #282c37;
  border-radius: 20px;
  &.lender_hard--nft {
    position: relative;
    &::before {
      content: '';
      background-image: url(${IMG_TICKER});
      position: absolute;
      padding: 10px 12px 9px 8px;
      width: 81px;
      height: 31px;
      left: -8px;
      top: 20px;
    }
  }
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
    &.grid-lend {
      grid-column-gap: 0;
      grid-template-columns: 1fr;
      grid-template-rows: auto auto auto auto auto;
    }
  }
  @media (max-width: 768px) {
    grid-column-gap: 12px;
    grid-template-columns: 170px 1fr;
    grid-template-rows: 53px auto auto auto;
    &.grid-lend {
      grid-column-gap: 12px;
      grid-template-columns: 170px auto;
      grid-template-rows: 53px auto auto auto;
    }
  }
  @media (max-width: 480px) {
    grid-column-gap: 12px;
    grid-row-gap: 20px;
    grid-template-columns: 140px 1fr;
    grid-template-rows: 53px auto auto auto;
    &.grid-lend {
      grid-column-gap: 0;
      grid-template-columns: 1fr;
      grid-template-rows: auto auto auto auto auto;
    }
  }
  @media (max-width: 320px) {
    grid-column-gap: 12px;
    grid-template-columns: 110px 1fr;
    grid-template-rows: 53px auto auto auto;
  }
`;

export const Image = styled.div`
  display: block;
  border-radius: 20px;
  object-fit: cover;
  grid-row: 1/2;
  grid-column: 1/2;
  @media (max-width: 1100px) {
    grid-row: 1/3;
    grid-column: 1/2;
  }
  img {
    max-width: 100%;
    border-radius: 20px;
    height: 100%;
    min-height: 233px;
    @media (max-width: 991px) {
      min-height: 170px;
    }
    @media (max-width: 768px) {
      min-height: 100px;
    }
  }
`;

export const ImageLend = styled.div`
  display: block;
  border-radius: 20px;
  object-fit: cover;
  grid-row: 1/3;
  grid-column: 1/2;
  @media (max-width: 1100px) {
    grid-row: 1/3;
    grid-column: 1/2;
  }
  @media (max-width: 991px) {
    grid-row: 1/2;
    grid-column: 1/2;
  }
  @media (max-width: 768px) {
    grid-row: 1/3;
    grid-column: 1/2;
  }
  @media (max-width: 480px) {
    grid-row: 1/2;
    grid-column: 1/2;
  }
  img {
    display: block;
    margin: 0 auto;
    max-width: 100%;
    border-radius: 20px;
    height: 100%;
    min-height: 233px;
    @media (max-width: 991px) {
      max-width: 215px;
      height: 215px;
    }
    @media (max-width: 768px) {
      height: 170px;
      max-width: 100%;
      min-height: 170px;
    }
    @media (max-width: 480px) {
      max-width: 215px;
      height: 215px;
    }
  }
`;

export const Heading = styled.h3`
  display: block;
  grid-row: 1/2;
  grid-column: 2/3;
  @media (max-width: 991px) {
    &.heading-lend {
      grid-row: 2/3;
      grid-column: 1/2;
    }
  }
  @media (max-width: 768px) {
    &.heading-lend {
      grid-row: 1/2;
      grid-column: 2/3;
    }
  }
  @media (max-width: 480px) {
    &.heading-lend {
      grid-row: 2/3;
      grid-column: 1/2;
    }
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
    width: 130px;
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
  a.content-link {
    color: #2596ff;
    display: inline-block;
    max-width: 300px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    @media (max-width: 1400px) {
      max-width: 150px;
    }
  }
  @media (max-width: 600px) {
    grid-row: 3/4;
    grid-column: 1/3;
    gap: 12px;
  }
`;

export const FooterItem = styled.div`
  display: flex;
  flex-direction: column;
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
    align-items: center;
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
  flex-grow: 1;
  gap: 11px;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  @media (max-width: 480px) {
    align-items: flex-start;
  }
`;

export const ButtonCuston = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 1px solid transparent;
  display: inline-flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  min-width: 100px;
  border-radius: 13.5px;
  min-height: 26px;
  ${(p: propBtnCuston) =>
    p.color === 'blue'
      ? 'color: #2596ff;border-color:#2596ff;background-color: rgba(37, 150, 255, 0.2);'
      : p.color === 'orange'
      ? 'color: #fe951a;border-color:#fe951a;background-color: rgba(255, 177, 85, 0.2);'
      : p.color === 'red'
      ? 'color: #ff4848;border-color:#ff4848;background-color: rgba(255, 72, 72, 0.2);'
      : ''};
`;

export const MyLinkButton = styled(LinkButtom)`
  &.btn {
    padding: 14.5px 24px;
    @media (max-width: 768px) {
      display: inline-flex;
      height: auto;
    }
  }
`;
