import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import { Link } from 'react-router-dom';
import { listLoan } from '../Filter/DataCoin';
import { messages } from '../../pages/ResultOfferCrypto/messages';
import { useTranslation } from 'react-i18next';
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
import {
  IconDimond,
  IconCar,
  IconHouse,
  IconWatch,
  IconArtWork,
} from 'assets/svg/svg';
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

export const ItemShowBorrow = (props: any) => {
  const { t } = useTranslation();
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
            <span className="content-title">{t(messages.available())}: </span>
            <span className="content-name">
              32,589.386 {item.acceptableAssetsAsLoan[0]?.symbol}
            </span>
          </p>
          <p>
            <span className="content-title">{t(messages.limit())}: </span>
            <span className="content-name">
              {formatMoney(item.allowedLoanMin)}{' '}
              {item.acceptableAssetsAsLoan[0]?.symbol} -{' '}
              {formatMoney(item.allowedLoanMax)}{' '}
              {item.acceptableAssetsAsLoan[0]?.symbol}
            </span>
          </p>
          <p>
            <span className="content-title">{t(messages.duration())}: </span>

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
            <span className="title">{t(messages.interestRate())}</span>
            <span className="interest">
              {Boolean(item.interest)
                ? item.interest + '% APR'
                : `${item.interestMin} - ${item.interestMax} %APR`}
            </span>
          </InterestRate>
          <CollateralAccepted>
            <span className="title">{t(messages.collateralPer())}</span>
            <span className="coin">
              {countCoin
                .map(item => item.symbol)
                .slice(0, 3)
                .toString()}{' '}
              & {countCoin.length - 3}+ {t(messages.more())}
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
                ? `${t(messages.auto())}`
                : item.type === 1
                ? `${t(messages.semiAuto())}`
                : item.type === 2
                ? `${t(messages.negotion())}`
                : ''}
            </ButtonCuston>
            <MyLinkButton className="btn" bg="dba83d">
              <Link to="#">{t(messages.viewDetail())}</Link>
            </MyLinkButton>
          </FlexColunm>
        </FooterItem>
      </Grid>
    </Item>
  );
};

export const ItemShowLend = (props: any) => {
  const { item } = props;

  const src = listLoan.filter(e => {
    if (e.value === item?.nftEvaluatedSymbol) {
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
              {item.nftAssetTypeId === 0 ? (
                <IconArtWork />
              ) : item.nftAssetTypeId === 1 ? (
                <IconDimond />
              ) : item.nftAssetTypeId === 2 ? (
                <IconWatch />
              ) : item.nftAssetTypeId === 3 ? (
                <IconCar />
              ) : item.nftAssetTypeId === 4 ? (
                <IconHouse />
              ) : (
                ''
              )}
              <span>
                {item.nftAssetTypeId === 0
                  ? `Artwork`
                  : item.nftAssetTypeId === 1
                  ? 'Jewelry'
                  : item.nftAssetTypeId === 2
                  ? 'Watch'
                  : item.nftAssetTypeId === 3
                  ? 'Car'
                  : item.nftAssetTypeId === 4
                  ? 'House'
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
