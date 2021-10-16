import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import BG_Banner from 'assets/Image/bannerlend.png';
console.log(BG_Banner);

export const ContainerResult = styled.div`
  max-width: 1324px;
  margin: 0 auto;
`;

export const Banner = styled.div`
  margin: 16px 0;

  background-color: #475674;
  background-image: url(BG_Banner);
  background-repeat: no-repeat;
  background-position: center right;
  border-radius: 10px;
  display: flex;
  align-items: center;
  @media (max-width: 600px) {
    position: relative;
  }
  position: relative;
  .heading {
    flex-grow: 1;
    padding: 16px 36px;
    @media (max-width: 600px) {
      width: 350px;
      flex-grow: 0;
      padding: 16px 16px;
    }
  }
  h4 {
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    color: #f8b017;
    @media (max-width: 600px) {
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 20px;
      margin-bottom: 7px;
    }
  }
  p {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #fff;
    font-style: normal;
    @media (max-width: 600px) {
      max-width: 300px;
      font-weight: 500;
      font-size: 12px;
      line-height: 15px;
    }
    @media (max-width: 480px) {
      max-width: 155px;
    }
  }
  span {
    color: #f8b017;
  }
  img {
    @media (max-width: 600px) {
      position: absolute;
      width: 150px;
      height: 70px;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
    }
    width: auto;
    height: 100%;
  }
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 7px;
  img {
    position: relative;
    top: -2px;
  }
  span {
    font-weight: normal;
    font-size: 14px;
    display: inline-block;
    line-height: 16px;
  }
`;

export const MyLink = styled(Link)`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  text-decoration-line: underline;
  color: #2596ff;
`;
export const MyFlex = styled.div`
  display: flex;
  column-gap: 12px;
  align-items: center;
  justify-content: flex-start;
  img {
    width: 16px;
    height: 16px;
  }
  span {
    font-weight: normal;
    font-size: 14px;
    display: inline-block;
    line-height: 13px;
  }
`;

export const Wrappermb = styled.div`
  display: none;
  @media (max-width: 1024px) {
    display: block;
  }
`;

export const WrapperMobie = styled.div`
  display: flex;
  row-gap: 16px;
  column-gap: 15px;
  flex-direction: column;
  width: calc(100%);

  /* margin-left: -1.25rem;
  margin-right: -1.25rem; */
  @media (max-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    width: calc(100%);
    margin-left: 0;
    margin-right: 0;
  }
  @media (max-width: 675px) {
    flex-direction: column;
    width: calc(100%);
    margin-left: 0;
    margin-right: 0;
  }
  @media (max-width: 480px) {
    width: calc(100% + 32px);
    margin-left: -16px;
    margin-right: -16px;
  }
  align-items: stretch;
  justify-content: flex-start;
`;

export const Item = styled.div`
  background: #282c37;
  border-radius: 10px;
  width: 100%;
  display: flex;
  align-items: stretch;
  row-gap: 16px;
  padding: 20px;
  padding-bottom: 20px !important;
  @media (max-width: 991px) {
    width: 100%;
    padding: 15px;
  }
  @media (max-width: 768px) {
    width: calc(50% - 10px);
    padding: 20px;
  }
  @media (max-width: 675px) {
    width: 100%;
  }
  @media (max-width: 480px) {
    border-radius: 0;
    padding: 15px;
  }
  flex-direction: column;
  justify-content: flex-start;
  img {
    width: 16px;
    height: 16px;
  }
  span {
    display: inline-block;
    line-height: 13px;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: stretch;
  column-gap: 10px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #fff;
  span.left {
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    width: 200px;
    display: inline-block;
    line-height: 13px;
    @media (max-width: 768px) {
      width: 110px;
    }
    @media (max-width: 675px) {
      width: 200px;
    }
    @media (max-width: 480px) {
      width: 130px;
    }
  }
`;
