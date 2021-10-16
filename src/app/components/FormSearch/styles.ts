import styled from 'styled-components/macro';

export const ItemSearch = styled.div`
  width: 600px;

  @media screen and (max-width: 1200px) {
    width: 50%;
  }
  @media screen and (max-width: 991px) {
    width: 100%;
  }
`;

export const Tabs = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const Tabheader = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 13px;
  max-width: 600px;
  @media (max-width: 1200px) {
    max-width: 100%;
  }
`;

export const LabelTab = styled.span`
  cursor: pointer;
  border: none;
  outline: none;
  background-color: transparent;
  padding: 7px 16px;
  padding-top: 16px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  align-self: flex-end;
  color: #fff;
  transition: all 0.5s ease-in-out;
  &.active {
    padding: 7px 16px;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    color: #dba83d;
  }
`;

export const TabContent = styled.div`
  width: 100%;
  height: 100%;
  flex-grow: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background-color: #171a23;
  border-radius: 30px;
  box-shadow: 0 0px 30px 20px rgba(23, 26, 35, 0.3);
  min-height: 681px;
  max-width: 600px;
  @media (max-width: 1200px) {
    max-width: 1200px;
    min-height: auto;
  }
`;
