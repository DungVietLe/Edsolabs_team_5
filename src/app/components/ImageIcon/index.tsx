import styled from 'styled-components/macro';

interface propsImg {
  src?: any;
}

const Img = styled.img`
  display: inline-block;
  width: 24px;
  height: 24px;
  margin-right: 2px;

  @media (max-width: 600px) {
    margin-right: 2px;
    width: 20px;
    height: 20px;
  }
`;

const ImageIcon = (props: propsImg) => {
  const { src } = props;
  return <Img src={src} alt="img coin" />;
};

export default ImageIcon;
