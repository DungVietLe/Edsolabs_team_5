import styled from 'styled-components/macro';

export const WrapperSearch = styled.div`
  padding: 1.25rem;
  width: 100%;
  background-color: #232732;
  padding-top: calc(100px + 1.25rem);
  @media (max-width: 768px) {
    margin-top: 20px;
    padding-top: calc(70px + 1.25rem);
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1536px;
  margin: 0 auto;
`;
