import styled from 'styled-components/macro';

export const WrapperSearch = styled.div`
  padding: 1.25rem;
  width: 100%;
  background-color: #232732;
  padding-top: calc(100px + 1.25rem);
  @media (max-width: 1200px) {
    padding-top: calc(70px + 1.25rem);
  }
  @media (max-width: 768px) {
    margin-top: 57px;
    padding: 1rem;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1536px;
  margin: 0 auto;
`;
