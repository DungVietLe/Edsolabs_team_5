import styled from 'styled-components/macro';

export const WrapperSearch = styled.div`
  padding: 1.25rem;
  width: 100%;
  background-color: #232732;
  padding-top: calc(83px + 100px);
  padding-bottom: 66px;
  @media (max-width: 768px) {
    margin-top: 20px;
    padding-top: calc(42px + 1.25rem);
  }
  @media (max-width: 480px) {
    padding: 0 16px 20px 16px;
    padding-top: calc(54px);
  }
  @media (max-width: 375px) {
    margin-top: 16px;
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
