import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { searchApi } from 'api/searchApiHome';
import { iconCollateral, listLoan } from 'app/components/Filter/DataCoin';
import Paginations from 'app/components/Pagination';
import {
  BoxFlex,
  BoxLeft,
  Boxright,
  Paragrap,
  Reset,
  WrapperResult,
} from 'app/pages/ResultStyles';
import BG_Banner from 'assets/Image/bannerlend.png';
import filter from 'assets/Image/filter.png';
import star from 'images/imagesearch/Star 1.png';
import queryString from 'query-string';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Close } from '../../pages/ResultOfferCrypto/styles';
import { Collateral } from '../Filter/Collateral';
import { Duration } from '../Filter/Duration';
import { LoanCurrency } from '../Filter/LoanCurrency';
import Footer from '../Footer/Footer';
import Header from '../Header';
import { ButtomBase, Flex } from '../rootStyled';
import {
  Banner,
  ContainerResult,
  FlexColumn,
  Item,
  MyFlex,
  MyLink,
  Row,
  Wrappermb,
  WrapperMobie,
} from './style';

export function SearchResult() {
  const history = useHistory();
  const [status, setStatus] = useState(false);
  const handleShowFilter = () => {
    setStatus(!status);
  };

  const [listApiData, setListApiData] = useState<any>([]);
  const param = queryString.parse(history.location.search);
  const newUrl = history.location.search;
  useEffect(() => {
    searchApi
      .getDataLendCrypto(param)
      .then((res: any) => {
        setListApiData(res.data);
      })
      .catch(error => {});
  }, [newUrl]);

  const newIconColl = icon => {
    const a = iconCollateral.filter(e => e?.value === icon);
    return a[0].url;
  };
  const newIconLoan = icon => {
    const a = listLoan.filter(e => e?.value === icon);
    return a[0].url;
  };
  const convertStr = str => {
    if (str?.length > 16) {
      const firstArr = str.substr(0, 5);
      const lastArr = str.substr(str.lenght - 5, 5);
      return `${firstArr}...${lastArr}`;
    } else {
      return str;
    }
  };
  const data = listApiData?.content;
  let firstData: any;
  let lastData: any = [];
  if (data?.length > 5) {
    firstData = data.slice(0, 5);
    lastData = data.slice(5, data?.length);
  } else {
    firstData = data;
  }
  const [clear, setClear] = useState(false);
  const handleReserFilter = () => {
    history.push('/pawn/lender?size=10&status=3&durationTypes=');
    setClear(true);
  };
  return (
    <>
      <Header />
      <WrapperResult>
        <ContainerResult>
          <Flex gap={20} justifyContent="center" alignItem="flex-start">
            <BoxLeft>
              <div
                className="filter_result"
                style={{ textAlign: 'right', cursor: 'pointer' }}
              >
                <img src={filter} alt="acoin" onClick={handleShowFilter} />
              </div>
              <Paragrap>
                {listApiData?.total_elements} collateral offers match your
                search
              </Paragrap>
              <TableContainer
                sx={{
                  '@media (max-width:1024px)': {
                    display: 'none  ',
                  },
                  marginBottom: '50px',
                }}
              >
                <Table
                  sx={{
                    borderCollapse: 'separate',
                    borderSpacing: '0 4px',
                    minWidth: 650,
                    backgroundColor: 'transparent',
                    'th,td': {
                      borderBottom: 'none',
                      '@media (max-width:1200px)': {
                        padding: '10px',
                      },
                    },
                  }}
                >
                  <TableHead
                    sx={{
                      background: 'rgba(40,44,55,0.5)',
                      borderRadius: '10px 10px 0px 0px',
                      overflow: 'hidden',
                      th: {
                        fontStyle: 'normal',
                        fontWeight: 600,
                        fontSize: '14px',
                        lineHeight: '17px',
                        color: '#FFFFFF',
                      },
                    }}
                  >
                    <TableRow
                      sx={{
                        verticalAlign: 'baseline',
                        outline: 0,
                        position: 'relative',
                        top: '23px',
                        th: {
                          paddingTop: 0,
                          paddingBottom: 0,
                          height: ' 80px',
                          lineHeight: '60px',
                          '@media (max-width:1200px)': {
                            height: '70px',
                            lineHeight: '50px',
                          },
                        },
                      }}
                    >
                      <TableCell align="center">#</TableCell>
                      <TableCell align="left">Borrower</TableCell>
                      <TableCell align="left">Collateal</TableCell>
                      <TableCell align="left">Loan currency</TableCell>
                      <TableCell align="left">Duration</TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody
                    sx={{
                      tr: {
                        background: '#282C37',
                        borderRadius: '4px 4px 0px 0px',
                        td: {
                          fontStyle: 'normal',
                          fontWeight: 'normal',
                          fontSize: '14px',
                          lineHeight: '17px',
                          color: '#FFFFFF',
                        },
                      },
                    }}
                  >
                    {firstData?.map((e, index) => (
                      <TableRow
                        key={index}
                        sx={{
                          '&:last-child td, &:last-child th': { border: 0 },
                        }}
                      >
                        <TableCell align="center">{index + 1}</TableCell>
                        <TableCell align="left">
                          <FlexColumn>
                            <MyLink to="#">
                              {convertStr(`${e.walletAddress}`)}
                            </MyLink>
                            <MyFlex style={{ alignItems: 'center' }}>
                              <img src={star} alt="" />
                              <span>
                                {e.reputation}
                                <span style={{ padding: '0 10px' }}>|</span>
                                {e.completedContracts} contacts
                              </span>
                            </MyFlex>
                          </FlexColumn>
                        </TableCell>
                        <TableCell align="left">
                          <MyFlex>
                            <img src={newIconColl(e.collateralSymbol)} alt="" />
                            {Boolean(e?.collateralAmount)
                              ? e?.collateralAmount
                              : 0}
                            {e.collateralSymbol}
                          </MyFlex>
                        </TableCell>
                        <TableCell align="left">
                          <MyFlex>
                            <img src={newIconLoan(e.loanSymbol)} alt="" />
                            {e.loanSymbol}
                          </MyFlex>
                        </TableCell>
                        <TableCell align="left">
                          {e.durationQty}
                          {e.durationType === 0
                            ? 'weeks'
                            : e.durationType === 1
                            ? 'months'
                            : ''}
                        </TableCell>
                        <TableCell align="center">
                          <ButtomBase bg="DBA83D" className="btn">
                            Send Offer
                          </ButtomBase>
                        </TableCell>
                      </TableRow>
                    ))}
                    <TableRow
                      sx={{
                        backgroundColor: 'transparent !important',
                        td: { padding: '0 !important' },
                      }}
                    >
                      <TableCell align="center" colSpan={6}>
                        <Banner>
                          <div className="heading">
                            <h4>Become your own bank</h4>
                            <p>
                              Sign up for pawnshop to get great benefits from
                              <span>DeFi For You.</span>
                            </p>
                          </div>
                          <img src={BG_Banner} alt="" />
                        </Banner>
                      </TableCell>
                    </TableRow>
                    {lastData?.length > 0
                      ? lastData?.map((e, index) => (
                          <TableRow
                            key={index + 5}
                            sx={{
                              '&:last-child td, &:last-child th': { border: 0 },
                            }}
                          >
                            <TableCell align="center">{index + 6}</TableCell>
                            <TableCell align="left">
                              <FlexColumn>
                                <MyLink to="#">
                                  {convertStr(`${e.walletAddress}`)}
                                </MyLink>
                                <MyFlex style={{ alignItems: 'center' }}>
                                  <img src={star} alt="" />
                                  <span>
                                    {e.reputation}
                                    <span style={{ padding: '0 10px' }}>|</span>
                                    {e.completedContracts} contacts
                                  </span>
                                </MyFlex>
                              </FlexColumn>
                            </TableCell>
                            <TableCell align="left">
                              <MyFlex>
                                <img
                                  src={newIconColl(e.collateralSymbol)}
                                  alt=""
                                />
                                {Boolean(e?.collateralAmount)
                                  ? e?.collateralAmount
                                  : 0}
                                {e.collateralSymbol}
                              </MyFlex>
                            </TableCell>
                            <TableCell align="left">
                              <MyFlex>
                                <img src={newIconLoan(e.loanSymbol)} alt="" />
                                {e.loanSymbol}
                              </MyFlex>
                            </TableCell>
                            <TableCell align="left">
                              {e.durationQty}
                              {e.durationType === 0
                                ? 'weeks'
                                : e.durationType === 1
                                ? 'months'
                                : ''}
                            </TableCell>
                            <TableCell align="center">
                              <ButtomBase bg="DBA83D" className="btn">
                                Send Offer
                              </ButtomBase>
                            </TableCell>
                          </TableRow>
                        ))
                      : ''}
                  </TableBody>
                </Table>
              </TableContainer>
              <Wrappermb style={{ marginBottom: '50px' }}>
                <WrapperMobie>
                  {firstData?.map((e, index) => (
                    <Item key={index}>
                      <Row>
                        <span className="left">Borrower</span>
                        <FlexColumn>
                          <MyLink to="#">
                            {convertStr(`${e.walletAddress}`)}
                          </MyLink>
                          <span>
                            <img src={star} alt="" /> 1000
                            <span style={{ padding: '0 10px' }}>|</span>100
                            contacts
                          </span>
                        </FlexColumn>
                      </Row>
                      <Row>
                        <Row>
                          <span className="left">Collateral</span>
                          <MyFlex>
                            <img src={newIconColl(e.collateralSymbol)} alt="" />
                            {Boolean(e?.collateralAmount)
                              ? e?.collateralAmount
                              : 0}
                            {e.collateralSymbol}
                          </MyFlex>
                        </Row>
                      </Row>
                      <Row>
                        <Row>
                          <span className="left">Loan currency</span>
                          <MyFlex>
                            <img src={newIconLoan(e.loanSymbol)} alt="" />
                            {e.loanSymbol}
                          </MyFlex>
                        </Row>
                      </Row>
                      <Row>
                        <span className="left">Duration</span>
                        <span>
                          {e.durationQty}
                          {e.durationType === 0
                            ? 'weeks'
                            : e.durationType === 1
                            ? 'months'
                            : ''}
                        </span>
                      </Row>
                      <Row
                        style={{
                          justifyContent: 'center',
                          marginTop: '9px',
                        }}
                      >
                        <ButtomBase bg="DBA83D" className="btn">
                          Send Offer
                        </ButtomBase>
                      </Row>
                    </Item>
                  ))}
                </WrapperMobie>
                <Banner>
                  <div className="heading">
                    <h4>Become your own bank</h4>
                    <p>
                      Sign up for pawnshop to get great benefits from
                      <span>DeFi For You.</span>
                    </p>
                  </div>
                  <img src={BG_Banner} alt="" />
                </Banner>
                {lastData.length ? (
                  <WrapperMobie>
                    {lastData?.map((e, index) => (
                      <Item key={index + 5}>
                        <Row>
                          <span className="left">Borrower</span>
                          <FlexColumn>
                            <MyLink to="#">
                              {convertStr(`${e.walletAddress}`)}
                            </MyLink>
                            <span>
                              <img src={star} alt="" /> {e?.reputation}
                              <span style={{ padding: '0 10px' }}>|</span>
                              {e?.completedContracts}
                              contacts
                            </span>
                          </FlexColumn>
                        </Row>
                        <Row>
                          <Row>
                            <span className="left">Collateral</span>
                            <MyFlex>
                              <img
                                src={newIconColl(e.collateralSymbol)}
                                alt=""
                              />
                              {Boolean(e?.collateralAmount)
                                ? e?.collateralAmount
                                : 0}
                              {e.collateralSymbol}
                            </MyFlex>
                          </Row>
                        </Row>
                        <Row>
                          <Row>
                            <span className="left">Loan currency</span>
                            <MyFlex>
                              <img src={newIconLoan(e.loanSymbol)} alt="" />
                              {e.loanSymbol}
                            </MyFlex>
                          </Row>
                        </Row>
                        <Row>
                          <span className="left">Duration</span>
                          <span>
                            {e.durationQty}
                            {e.durationType === 0
                              ? 'weeks'
                              : e.durationType === 1
                              ? 'months'
                              : ''}
                          </span>
                        </Row>
                        <Row
                          style={{
                            justifyContent: 'center',
                            marginTop: '9px',
                          }}
                        >
                          <ButtomBase bg="DBA83D" className="btn">
                            Send Offer
                          </ButtomBase>
                        </Row>
                      </Item>
                    ))}
                  </WrapperMobie>
                ) : (
                  ''
                )}
              </Wrappermb>
              <Paginations
                length={listApiData.total_pages}
                page={listApiData.page}
              />
            </BoxLeft>
            <Boxright check={status} className={status ? 'active' : 'none'}>
              <BoxFlex>
                <Reset onClick={handleReserFilter}>Reset filter</Reset>
                <Close
                  onClick={handleShowFilter}
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAI4SURBVHgBvVexbsIwED1nYAGpdGJMED9AZ5Z0gZV+AeJLWr6k8AVlhQX+oHRHIsDEVCrBwgC95zoomCR2U9InBQd8+N27nM8XQZZYLBZlHup8+Y7juKfTCd/LQojgeDwu+X7K16xarW5t1hMmAyYEUYeJ2iAyLihEnx3psQNBql0KIdS88m2bMsDkgEgg9RWpR39DwJF6YvKZPuHoPyyXyw6TTm5ACni81jvW1CcuFLPSOgwpB7DyR1Y+vSJmUu+GSuOAsD+EWX8ONWfuc46kgKfyRkIqVmoX9A8IQy4VK7WpmM/ntNvtEucPhwOtVisyATUBo1D79TPNeL1e02QyoVKpRM1mU45RwKHxeCzHRqNBtVotbbktq65CcZ0MqFQqVCwWLwjiSGEDWwNk6QWxb7IsFArUarWuyHVS2OjRSICPUPc51B0baxCMRiPa7/dnggykspw6/OGSJbBwVHkWUoBr+D1CbXWMaR7H3v/i/3cOZ9iX7R/0Z5qUcBbEARTPspAivHEJZwM0DlbESdmrP3PYoJBYYBoSpz7nzWaTmEg6OWwtMAtrtXFLoXqhOGBPxyEkNVQtuZVc1+2GxL46EnMHyiXaIXlIqAN6SDkDasMezIl40uUhoPyANrh3diI6k2fIVfdx3kEXzR5CrpTfmrSrd5pJ7S2avje6TXvbjTZ5IZw4a3iHFoWvAWXHUIV3Gjdp8wrj8fBieXRu2W7ISTRIIrQmjjigv7R5imjLRB/0UwGtX9q+AXoFYjqElBA4AAAAAElFTkSuQmCC"
                />
              </BoxFlex>
              <Collateral checker={clear} />
              <LoanCurrency checker={clear} />
              <Duration checker={clear} />
            </Boxright>
          </Flex>
        </ContainerResult>
      </WrapperResult>
      <Footer />
    </>
  );
}
