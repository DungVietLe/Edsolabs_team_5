import styled from 'styled-components/macro';

export const WrapperSearch = styled.div`
  padding: 83px 20px 56px 20px;
  width: 100%;
  background-color: #232732;
  padding-bottom: 66px;
  @media (max-width: 768px) {
    padding-top: calc(42px + 1.25rem);
  }
  @media (max-width: 480px) {
    padding: 20px 16px 20px 16px;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1432px;
  margin: 0 278px 0 auto;
  @media (max-width: 1500px) {
    margin: 0 auto;
  }
`;
