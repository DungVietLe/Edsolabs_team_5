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
    margin: 0px;
    padding-top: 12px;
    @media (min-width: 375px) and(max-width: 620px) {
      max-width: 181px;
      font-weight: 600;
      font-size: 18px;
      line-height: 22px;
      margin: 0;
    }
    @media (max-width: 375px) {
      max-width: 181px;
      font-weight: 600;
      font-size: 18px;
      line-height: 22px;
      margin-left: 13px;
    }
  }
  .content {
    font-weight: normal;
    font-size: 16px;
    line-height: 19.5px;
    margin: 0px;
    padding-top: 8px;
    @media (min-width: 375px) and (max-width: 1440px) {
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 17px;
      padding-top: 4px;
      padding-bottom: 30px;
    }
    @media (max-width: 375px) {
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 17px;
      padding-top: 4px;
      padding-bottom: 30px;
      margin-left: 13px;
    }
  }

  @media (max-width: 620px) {
    max-width: 300px;
    margin: 0 auto;
    .img {
      max-width: 283px;
      @media (max-width: 375px) {
        max-width: 250px;
        margin: 0 auto;
      }
    }
  }
  @media (max-width: 320px) {
    margin: 10px auto;
  }
  @media (max-width: 620px) {
    max-width: 300px;
    margin: 0 auto;
    .img {
      max-width: 283px;
      @media (max-width: 375px) {
        max-width: 250px;
        margin: 0 auto;
      }
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
    @media (min-width: 375px) and (max-width: 620px) {
      width: 88px;
      height: 22px;
      font-style: normal;
      font-weight: 500;
      font-size: 12px !important;
      line-height: 15px;
      padding: 0;
    }
    @media (max-width: 375px) {
      width: 88px;
      height: 22px;
      font-style: normal;
      font-weight: 500;
      font-size: 12px !important;
      line-height: 15px;
      padding: 0;
      margin-left: 12px;
    }
    :hover {
      border: none;
    }
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
    padding: 0;
    @media (max-width: 375px) {
      width: 60px;
      height: 22px;
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 15px;

      margin-right: 12px;
    }
    @media (min-width: 375px) and (max-width: 620px) {
      width: 60px;
      height: 22px;
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 15px;
    }

    .Star {
      padding-bottom: 3px;
      padding-right: 4px;
      height: 16px;
      width: 16px;
      @media (max-width: 620px) {
        padding-right: 3px;
        height: 14px;
        width: 14px;
      }
    }
    :hover {
      border: none;
    }
  }
`;
export default function SliderItem(props: IProps) {
  const { image, title, content } = props;

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
