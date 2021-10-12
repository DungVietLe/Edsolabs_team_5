import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import { Link } from 'react-router-dom';
import { listCoin } from '../Filter/DataCoin';
import {
  ButtonCuston,
  CollateralAccepted,
  Content,
  FlexColunm,
  FooterItem,
  Grid,
  Heading,
  Image,
  ImageLend,
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

const IconDiamond = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
    >
      {' '}
      <path
        d="M8.0741 3.60938L6.8656 1.5H5.17343L4.07471 3.60938H8.0741Z"
        fill="#DBA83D"
      />{' '}
      <path
        d="M4.0127 4.3125L5.99298 9.71411L8.26697 4.3125H4.0127Z"
        fill="#DBA83D"
      />{' '}
      <path
        d="M0 4.3125L5.58453 10.6641L5.58856 10.655L3.25644 4.3125H0Z"
        fill="#DBA83D"
      />{' '}
      <path
        d="M4.38089 1.5H1.59329L0 3.60938H3.28217L4.38089 1.5Z"
        fill="#DBA83D"
      />{' '}
      <path
        d="M8.88477 3.60938H11.9999L10.407 1.5H7.67627L8.88477 3.60938Z"
        fill="#DBA83D"
      />{' '}
      <path
        d="M6.35205 10.6223L6.36853 10.6641L11.9998 4.3125H9.03876L6.35205 10.6223Z"
        fill="#DBA83D"
      />{' '}
    </svg>
  );
};

export const ItemShowBorrow = (props: any) => {
  const { item } = props;
  const countCoin = [...item.acceptableAssetsAsCollateral];

  function formatMoney(n) {
    return (Math.round(n * 100) / 100).toLocaleString();
  }
  return (
    <Item className="borrow">
      <Grid>
        <Image>
          <img src={item.pawnShop.avatar} alt="" />
        </Image>
        <Heading>
          <div>
            {item.pawnShop.name}
            <span>
              <IconCheck />
            </span>
          </div>
          <span className="star">
            <StarIcon />
            <span>{item.pawnShop.reputation}</span>
          </span>
        </Heading>
        <Content>
          <p>
            <span className="content-title">Available: </span>
            <span className="content-name">
              32,589.386 {item.acceptableAssetsAsLoan[0].symbol}
            </span>
          </p>
          <p>
            <span className="content-title">Limit: </span>
            <span className="content-name">
              {formatMoney(item.allowedLoanMin)}{' '}
              {item.acceptableAssetsAsLoan[0].symbol} -{' '}
              {formatMoney(item.allowedLoanMax)}{' '}
              {item.acceptableAssetsAsLoan[0].symbol}
            </span>
          </p>
          <p>
            <span className="content-title">Duration: </span>

            <span className="content-name">
              {item.durationQtyMin} - {item.durationQtyMax}{' '}
              {item.durationQtyType === 0 ? ' week' : ' months'}
            </span>
          </p>
          {item.loanToValue ? (
            <p>
              <span className="content-title">LTV: </span>
              <span className="content-name">Up to {item.loanToValue}%</span>
            </p>
          ) : (
            ''
          )}
        </Content>

        <FooterItem>
          <InterestRate>
            <span className="title">Interest rate</span>
            <span className="interest">
              {Boolean(item.interest)
                ? item.interest + '% APR'
                : `${item.interestMin} - ${item.interestMax} %APR`}
            </span>
          </InterestRate>
          <CollateralAccepted>
            <span className="title">Collateral accepted</span>
            <span className="coin">
              {countCoin
                .map(item => item.symbol)
                .slice(0, 3)
                .toString()}{' '}
              & {countCoin.length - 3}+ more
            </span>
          </CollateralAccepted>
          <FlexColunm>
            <ButtonCuston
              color={
                item.type === 0
                  ? `blue`
                  : item.type === 1
                  ? 'orange'
                  : item.type === 2
                  ? 'red'
                  : ''
              }
            >
              {item.type === 0
                ? `Auto`
                : item.type === 1
                ? 'Semi-Auto'
                : item.type === 2
                ? 'Negotiation'
                : ''}
            </ButtonCuston>
            <MyLinkButton className="btn" bg="dba83d">
              <Link to="#">View Detail</Link>
            </MyLinkButton>
          </FlexColunm>
        </FooterItem>
      </Grid>
    </Item>
  );
};

export const ItemShowLend = (props: any) => {
  const { item } = props;
  const src = listCoin.filter(e => {
    if (e.value === item.expectedLoanSymbol) {
      return e;
    }
  });

  function formatMoney(n) {
    return (Math.round(n * 100) / 100).toLocaleString();
  }
  return (
    <Item className="lender_hard--nft">
      <Grid className="grid-lend">
        <ImageLend>
          <img
            src={`https://defiforyou.mypinata.cloud/ipfs/${item.nftMediaCid}`}
            alt=""
          />
        </ImageLend>
        <Heading className="heading-lend">
          <div>{item.nftName}</div>
          <span className="star">
            <StarIcon />
            <span>{Boolean(item.reputation) ? item.reputation : 0}</span>
          </span>
        </Heading>
        <Content>
          <p>
            <span className="content-title">Borrower: </span>
            <Link to="/" className="content-link">
              {item.borrowerWalletAddress}
            </Link>
          </p>
          {Boolean(item.durationTime) ? (
            <p>
              <span className="content-title">Duration: </span>
              <span className="content-name">
                {item.durationTime} {item.durationType === 0 ? 'Week' : 'Month'}
              </span>
            </p>
          ) : (
            ''
          )}
          {Boolean(item.nftAssetLocation) ? (
            <p>
              <span className="content-title">Asset location: </span>
              <span className="content-name">{item.nftAssetLocation}</span>
            </p>
          ) : (
            ''
          )}
          {Boolean(item.nftEvaluatedPrice) ? (
            <p>
              <span className="content-title">Evaluated price: </span>
              <span className="content-name">
                <img
                  src={src[0].url}
                  alt="icon"
                  style={{ height: '24px', width: '24px', marginRight: '8px' }}
                />
                {formatMoney(item.nftEvaluatedPrice)} {item.nftEvaluatedSymbol}
              </span>
            </p>
          ) : (
            ''
          )}
        </Content>

        <FooterItem>
          <InterestRate>
            <span className="title">Interest rate</span>
            <span className="interest">
              {formatMoney(item.expectedLoanAmount)} {item.expectedLoanSymbol}
            </span>
          </InterestRate>
          <FlexColunm>
            <ButtonCuston color={'orange'}>
              <IconDiamond />
              <span>
                {item.nftAssetTypeId === 1
                  ? `Jewelry`
                  : item.type === 2
                  ? 'Watch'
                  : item.type === 3
                  ? 'Car'
                  : item.type === 4
                  ? 'House'
                  : item.type === 5
                  ? 'Artwork'
                  : ''}
              </span>
            </ButtonCuston>
            <MyLinkButton className="btn" bg="dba83d">
              <Link to="#">Send offer</Link>
            </MyLinkButton>
          </FlexColunm>
        </FooterItem>
      </Grid>
    </Item>
  );
};
