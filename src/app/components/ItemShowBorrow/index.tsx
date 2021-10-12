import StarIcon from '@mui/icons-material/Star';
import Item_IMG from 'assets/Image/ImageItem.png';
import React from 'react';
import { Link } from 'react-router-dom';
import {
  ButtonCuston,
  CollateralAccepted,
  Content,
  FlexColunm,
  FooterItem,
  Grid,
  Heading,
  Image,
  InterestRate,
  Item,
  MyLinkButton,
} from './styles';

const IconCheck = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
    >
      <circle cx="10" cy="10.5" r="10" fill="#2596FF" />
      <path
        d="M14 7.5L8.5 13L6 10.5"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const ItemShowBorrow = () => {
  return (
    <Item>
      <Grid>
        <Image>
          <img src={Item_IMG} alt="" />
        </Image>
        <Heading>
          <div>
            F88 - Online Pawnshow
            <span>
              <IconCheck />
            </span>
          </div>
          <span className="star">
            <StarIcon />
            <span>1000</span>
          </span>
        </Heading>
        <Content>
          <p>
            <span className="content-title">Available: </span>
            <span className="content-name">32,589.386</span>
          </p>
          <p>
            <span className="content-title">Limit: </span>
            <span className="content-name">1,000 USDT - 10,000 USDT</span>
          </p>
          <p>
            <span className="content-title">Duration: </span>
            <span className="content-name">6 - 12 months</span>
          </p>
          <p>
            <span className="content-title">LTV: </span>
            <span className="content-name">Up to 80%</span>
          </p>
        </Content>

        <FooterItem>
          <InterestRate>
            <span className="title">Interest rate</span>
            <span className="interest">15% APK</span>
          </InterestRate>
          <CollateralAccepted>
            <span className="title">Collateral accepted</span>
            <span className="coin">BTC, ETH, BNB & 8+ more</span>
          </CollateralAccepted>
          <FlexColunm>
            <ButtonCuston color="xanh">auto</ButtonCuston>
            <MyLinkButton className="btn" bg="dba83d">
              <Link to="#">View Detail</Link>
            </MyLinkButton>
          </FlexColunm>
        </FooterItem>
      </Grid>
    </Item>
  );
};

export default ItemShowBorrow;
