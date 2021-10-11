import styled from 'styled-components/macro';

export const WrapperListItem = styled.section`
  width: 100%;
`;

export const HeaderContent = styled.div`
  border-radius: 9px;
  margin-bottom: 20px;
`;

export const GropButtonSort = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  @media (max-width: 768px) {
    column-gap: 24px;
    row-gap: 16px;
  }
`;

export const ButtonSort = styled.button`
  background-color: transparent;
  cursor: pointer;
  background-color: #232732;
  border: none;
  outline: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
  width: 20%;
  height: 50px;
  min-width: 170px;
  border: 1px solid transparent;
  border-right: 1px solid #45484f;
  transition: all 0.3s ease-in-out;
  &:last-child {
    border-right: 1px solid transparent;
  }
  &.active {
    background: rgba(219, 168, 61, 0.1);
    border: 1px solid #dba83d;
    border-radius: 2px;
  }
  svg {
    width: 23px;
    height: 23px;
    line-height: 23px;
    color: #ffffff;
    margin-right: 15px;
  }
  span {
    padding-left: 15px;
    display: block;
    color: #ffffff;
    line-height: 20px;
    font-size: 16px;
    font-weight: 500;
  }
  @media (max-width: 768px) {
    gap: 8px;
    border-radius: 9px;
    border-right: 1px solid transparent;
    height: 36px;
    min-width: auto;
    width: auto;
    &.active {
      background: rgba(219, 168, 61, 0.1);
      border: 1px solid #dba83d;
      border-radius: 9px;
    }
    svg {
      width: 16px;
      height: 16px;
      line-height: 16px;
      margin-right: 10px;
    }
    span {
      padding-left: 10px;
      line-height: 17px;
      font-size: 14px;
    }
  }
`;

export const Content = styled.div`
  margin-bottom: 40px;
  width: 100%;
`;
