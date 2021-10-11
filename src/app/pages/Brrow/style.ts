import styled from 'styled-components/macro';

export const Wrap = styled.div`
  background-color: #171a23;
  padding: 60px 20px;
  width: 100%;
  @media (max-width: 480px) {
    padding: 40px 16px 62px;
  }
`;

export const Container = styled.div`
  width: 100%;
  padding: 12px;
  margin-right: auto;
  margin-left: auto;

  @media (max-width: 1024px) {
    padding: 90px 16px 28px 16px;
  }
  @media (max-width: 991px) {
    margin: 0 auto;
  }
  @media (max-width: 600px) {
  }
  @media (max-width: 480px) {
    padding: 0;
  }
`;
export const Title = styled.h3`
  color: #dba83d;
  font-size: 36px;
  margin-bottom: 100px;
  text-align: center;
  font-family: 'Montserrat';
  font-weight: 600;

  @media (max-width: 480px) {
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 40px;
  }
  @media (max-width: 320px) {
    font-size: 20px;
  }
`;
export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 auto;
  margin: -12px;
  @media (max-width: 480px) {
    margin: 0px;
  }
`;
export const Col = styled.div`
  @media (min-width: 960px) {
    flex: 0 0 25%;
    max-width: 25%;
  }

  .col-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }
  width: 100%;
  margin-bottom: 18px;
  @media (max-width: 480px) {
    margin-bottom: 20px;
  }
  @media (max-width: 480px) {
    padding-top: 0;
    padding-bottom: 0;

    &:nth-child(even) {
      h3,
      p {
        text-align: right;
      }
      svg {
        order: 3;
      }
    }
    &:nth-child(odd) {
      h3,
      p {
        text-align: left;
      }
      svg {
        order: 1;
      }
    }
  }
`;
export const Center = styled.div`
  text-align: center;
  color: #fff;
  @media (max-width: 480px) {
    display: flex;
    align-items: center;
    gap: 20px;
    max-width: 320px;
    margin: 0 auto;
  }
`;
export const Short = styled.div`
  @media (max-width: 480px) {
    order: 2;
  }
`;
export const Heading = styled.h3`
  font-size: 20px;
  margin-bottom: 20px;
  font-weight: 600;
  font-family: 'Montserrat';

  @media (max-width: 480px) {
    margin-bottom: 0;
    margin-top: 0;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    margin: 0 20px 8px 0;
  }
  @media (max-width: 320px) {
    font-size: 16px;
  }
`;
export const Paragraph = styled.p`
  padding: 0px 86px;

  font-size: 16px;

  margin-bottom: 0 !important;

  margin-bottom: 16px;
  @media (max-width: 480px) {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    padding: 0 !important;
  }
`;
