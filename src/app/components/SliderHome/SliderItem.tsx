import styled from 'styled-components/macro';
import { Button } from '@mui/material';
import star from '../../../images/imagestar/star.png';
interface IProps {
  image?: string;
  title?: string;
  content?: string;
}
const Infor = styled.div`
  padding: 0 10px;
  color: #ffffff;
  font-style: normal;

  .title {
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    display: flex;
  }
  .content {
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
  }
  img {
  }
  @media (max-width: 650px) {
    max-width: 300px !important;
    margin: 0 auto;
    img {
      max-width: 283px;
    }
    .Tag {
      font-weight: 500;
      font-size: 12px;
      line-height: 15px;
    }
    .Rate {
      font-weight: 500;
      font-size: 12px;
      line-height: 15px;
    }
  }
  @media (min-width: 1028px) and (max-width: 1080px) {
    max-width: 428px;
    margin: 0 auto;
  }
`;
export const Tag = styled(Button)`
  &.Tag {
    height: 26px;
    background: #ff4848;
    border-radius: 15.5px;
    border: none;
    color: #ffffff;
    text-transform: capitalize;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    position: absolute;
    top: 12px;
    left: 12px;
  }
  :hover {
    border: none;
  }
`;
export const Rate = styled(Button)`
  &.Rate {
    height: 26px;
    background: #f8b017;
    border-radius: 16px;
    border: none;
    color: #ffffff;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    display: flex;
    align-items: center;
    text-align: center;
    text-transform: capitalize;
    position: absolute;
    top: 12px;
    right: 12px;
    .Star {
      padding-right: 6px;
      padding-bottom: 3px;
    }
  }
  :hover {
    border: none;
  }
`;
export default function SliderItem(props: IProps) {
  const { image, title, content } = props;
  console.log(props);
  return (
    <Infor>
      <div style={{ position: 'relative' }}>
        <img alt="img" src={image} className="img" />
        <Tag variant="outlined" className="Tag">
          Super shop
        </Tag>
        <Rate variant="outlined" className="Rate">
          <img src={star} alt="star" className="Star" />
          1000
        </Rate>
      </div>
      <div>
        <p className="title">{title}</p>
        <p className="content">{content}</p>
      </div>
    </Infor>
  );
}
