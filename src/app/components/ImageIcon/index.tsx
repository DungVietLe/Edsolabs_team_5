interface propsImg {
  src?: any;
}

const ImageIcon = (props: propsImg) => {
  return (
    <img
      style={{ display: 'inline-block', width: '15px', height: '15px' }}
      // src={src}
      alt="img coin"
    />
  );
};

export default ImageIcon;
