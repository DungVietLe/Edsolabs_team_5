import styled from 'styled-components/macro';

export const ItemBanner = styled.div`
  width: 49%;
  padding-right: 100px;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  .caption-zone {
    width: 90%;
  }
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
  p {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #fff;
  }
  @media screen and (max-width: 1200px) {
    width: 50%;
    .caption-zone {
      width: 90%;
    }
    padding-right: 0;
  }
  @media screen and (max-width: 991px) {
    width: 100%;
    .caption-zone {
      width: 90%;
    }
    padding-right: 100px;
  }
  @media screen and (max-width: 600px) {
    padding-right: 0;
    .caption-zone {
      width: 100%;
    }
  }
`;
