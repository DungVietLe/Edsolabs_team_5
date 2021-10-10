import styled from 'styled-components/macro';
export const Banner = styled.div`
  color: #ffffff;
`;
export const ViewOption = styled.div``;
export const TextResults = styled.div`
  max-width: 420px;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #d1d1d3;

  @media (max-width: 768px) {
    max-width: 336px;
    font-weight: 500;
    font-size: 15.8px;
    line-height: 20px;
  }
`;
export const ViewAllLending = styled.div`
  display: flex;
  margin-top: 30px;
  align-items: center;
  justify-content: space-between;
  color: #ffffff;
  a {
    color: #ffffff;
  }
  @media (max-width: 425px) {
    display: none;
  }
`;
export const Lending = styled.div`
  max-width: 214px;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
`;
export const AllLending = styled.div`
  max-width: 63px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
`;
