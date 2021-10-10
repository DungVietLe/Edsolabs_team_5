import styled from 'styled-components';

export const WrapperResult = styled.div`
  width: 100%;
  padding: 131px 20px 0 20px;
  background-color: #171a23;
  min-height: 100vh;
`;
export const ContainerResult = styled.div`
  max-width: 1324px;
  margin: 0 auto;
`;
export const BoxLeft = styled.div`
  flex-grow: 1;
`;
export const Boxright = styled.div`
  width: 293px;
  @media (max-width: 768px) {
    display: none;
  }
`;
