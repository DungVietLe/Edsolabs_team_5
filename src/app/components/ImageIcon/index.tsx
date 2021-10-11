interface propsImg {
  src?: any;
}

const ImageIcon = (props: propsImg) => {
  const { src } = props;
  return (
    <img
      style={{
        display: 'inline-block',
        width: '20px',
        height: '15px',
        paddingRight: '5px',
      }}
      src={src}
      alt="img coin"
    />
  );
};

export default ImageIcon;
