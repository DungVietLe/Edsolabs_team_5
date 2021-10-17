import styled from 'styled-components/macro';
const View = styled.div`
  max-width: 321px;
  margin: 0 10px;
  &:first-child {
    .Image {
      margin-bottom: 42px;
    }
  }
  &:last-child {
    .Image {
      margin-bottom: 42px;
    }
  }
  @media (max-width: 768px) {
    max-width: 45%;
  }
  @media (max-width: 426px) {
    display: flex;
    max-width: 100%;
    column-gap: 20px;
    padding: 0 16px;
    margin: 0;
    &:nth-child(even) {
      flex-direction: row-reverse;
      .text {
        h4 {
          text-align: right;
        }
        p {
          text-align: right;
          margin: 0;
        }
      }
    }
    .text {
      h4 {
        text-align: left;
      }
      p {
        text-align: left;
        margin: 0;
      }
    }
  }
`;
const Img = styled.div`
  //max-width: 80px;
  text-align: center;
  align-items: stretch;
  margin-bottom: 34px;
`;
const ViewText = styled.div`
  max-width: 321px;
  @media (max-width: 426px) {
    //padding-top: 8px;
  }
`;

const Title = styled.h4`
  max-width: 321px;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  align-items: center;
  text-align: center;
  text-transform: capitalize;
  color: #ffffff;
  @media (max-width: 426px) {
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
  }
`;
const Content = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #ffffff;
  padding-top: 20px;
  max-width: 272px;
  margin: 0 auto;
  @media (max-width: 426px) {
    font-size: 14px;
    line-height: 17px;
    margin: 0;
    padding-top: 8px;
  }
`;
export default function BorrowItems(props: any) {
  const { image, title, content } = props;
  return (
    <View>
      <Img className="Image">
        <img alt="img" src={image} className="img" />
      </Img>
      <ViewText className="text">
        <Title>{title}</Title>
        <Content>{content}</Content>
      </ViewText>
    </View>
  );
}
