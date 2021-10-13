import styled from 'styled-components/macro';
export const Sugges = styled.div`
  max-width: 1011px;
  border: 1px solid #45484f;
  box-sizing: border-box;
  border-radius: 20px;
  margin-bottom: 20px;
  padding: 20px 26px 20px 20px;
  display: grid;
  grid-template-columns: 125px auto;
  grid-template-rows: auto auto;
  grid-row-gap: 8px;
  grid-column-gap: 41px;
  margin-top: 20px;
  @media (max-width: 991px) {
    grid-template-columns: 71px auto;
    grid-row-gap: 14px;
    grid-column-gap: 20px;
  }

  @media (max-width: 480px) {
    padding: 11px 12px;
  }
  .image {
    grid-row: 1/3;
    grid-column: 1/2;
    @media (max-width: 991px) {
      grid-row: 1/2;
    }
  }
  .img {
    width: 100%;

    @media (max-width: 911px) {
    }
    @media (max-width: 769px) {
    }
    @media (max-width: 376px) {
    }
  }
  .title {
    grid-column: 2/3;
    grid-row: 1/2;
    max-width: 446px;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    color: #dba83d;
    @media (max-width: 991px) {
      display: flex;
      align-items: center;
    }
    @media (max-width: 768px) {
      font-size: 18px;
      line-height: 22px;
    }
    @media (max-width: 480px) {
    }
  }
  .content {
    grid-column: 2/3;
    grid-row: 2/3;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #ffffff;

    @media (max-width: 991px) {
      grid-column: 1/3;
      grid-row: 2/3;
    }
    @media (max-width: 768px) {
      font-size: 14px;
      line-height: 17px;
    }
  }
  .Text {
    max-width: 556px;
    height: 77px;

    flex-grow: 1;
    @media (max-width: 768px) {
      position: static;
    }
  }
`;
