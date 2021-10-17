import styled from 'styled-components/macro';

interface propsImg {
  src?: any;
}

const Img = styled.img`
  display: inline-block;
  width: 17px;
  height: 15px;
  padding-right: 5px;
  @media (max-width: 600px) {
    padding-right: 2px;
  }
`;

const ImageIcon = (props: propsImg) => {
  const { src } = props;
  return <Img src={src} alt="img coin" />;
};

export default ImageIcon;
