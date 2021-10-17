import styled from 'styled-components/macro';

export const ItemBanner = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  padding-right: 100px;
  @media (max-width: 1500px) {
    padding-right: 40px;
  }
  .caption-zone {
    max-width: 628px;
    @media (max-width: 1200px) {
      width: 100%;
    }
    @media (max-width: 991px) {
      max-width: 100%;
    }
    @media (max-width: 991px) {
      width: 100%;
    }
  }
  img {
    max-width: 668px;
    height: auto;
    display: block;
    margin-right: 40px;
    @media (max-width: 1400px) {
      width: 100%;
      margin-right: 0;
    }
    @media (max-width: 991px) {
      width: 100%;
      max-width: 100%;
    }
    @media (max-width: 768px) {
      width: 100%;
    }
  }
  p {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #fff;
    @media (max-width: 576px) {
      font-size: 14px;
      line-height: 17px;
    }
  }
  @media screen and (max-width: 1200px) {
    width: 50%;
    padding-right: 0;
  }
  @media screen and (max-width: 991px) {
    width: 100%;
    padding-right: 50px;
  }
  @media screen and (max-width: 600px) {
    padding-right: 0;
    .caption-zone {
      width: 100%;
    }
  }
`;
