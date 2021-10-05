import styled from 'styled-components/macro';

export const Grid = styled.section`
  background-color: #171a23;
  padding: 60px 20px;
`;

export const BoxTitle = styled.h3`
  color: #dba83d;
  font-size: 36px;
  margin-bottom: 100px;
  text-align: center;
  font-family: 'Montserrat';
  font-weight: 600;
`;
export const BoxConTainer = styled.section`
  width: 100%;
  padding: 12px;
  margin-right: auto;
  margin-left: auto;
`;
export const BoxRow = styled.section`
  display: flex;
  flex-wrap: wrap;
`;
export const BoxCol = styled.section`
  flex: 0 0 100%;
  max-width: 100%;

  @media (min-width: 960px) {
    flex: 0 0 25%;
    max-width: 25%;
  }
`;
export const BoxCenter = styled.section`
  text-align: center;
  color: #fff;
  margin-bottom: 40px;
`;
export const BoxShort = styled.section``;
export const BoxH3 = styled.section`
  font-size: 20px;
  margin-bottom: 20px;
  margin-top: 40px;
  font-weight: 600;
  font-family: 'Montserrat';
`;
export const BoxContent = styled.section`
  padding: 0px 74px;
`;
