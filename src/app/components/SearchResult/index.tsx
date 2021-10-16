import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { listCoin } from 'app/components/Filter/DataCoin';
import Paginations from 'app/components/Pagination';
import {
  BoxLeft,
  Boxright,
  Paragrap,
  Reset,
  WrapperResult,
} from 'app/pages/ResultStyles';
import BG_Banner from 'assets/Image/bannerlend.png';
import star from 'images/imagesearch/Star 1.png';
import * as React from 'react';
import { useState } from 'react';
import { Close } from '../../pages/ResultOfferCrypto/styles';
import { InterestRange } from '../Filter/InterestRange';
import { LoanToken } from '../Filter/LoanToken';
import { LoanType } from '../Filter/LoanType';
import { LoanValue } from '../Filter/LoanValue';
import { SearchPawnshops } from '../Filter/SearchPawnshops';
import Footer from '../Footer/Footer';
import Header from '../Header';
import { CollateralAccepted } from '../ItemShow/styles';
import { ButtomBase, Flex } from '../rootStyled';
import {
  Banner,
  ContainerResult,
  FlexColumn,
  Item,
  MyFlex,
  MyLink,
  Row,
  WrapperMobie,
} from './style';
export function SearchResult() {
  // const [listData, setListData] = useState<any>({
  //   collateralAccepted: [],
  //   loanToken: [],
  //   LoanType: [],
  //   duration: [],
  // });

  // const handleValueFilter = (data: any, tags: any) => {
  //   if (tags === 'Collateral accepted') {
  //     if (listData.collateralAccepted.includes(data as never)) {
  //       const newList = listData.collateralAccepted.filter(
  //         item => item !== data,
  //       );
  //       setListData({ ...listData, collateralAccepted: newList });
  //     } else {
  //       setListData({
  //         ...listData,
  //         collateralAccepted: [...listData.collateralAccepted, data],
  //       });
  //     }
  //   }
  //   if (tags === 'Duration') {
  //     if (listData.duration.includes(data as never)) {
  //       const newList = listData.duration.filter(item => item !== data);
  //       setListData({ ...listData, duration: newList });
  //     } else {
  //       setListData({
  //         ...listData,
  //         duration: [...listData.duration, data],
  //       });
  //     }
  //   }
  //   if (tags === 'Loan Token') {
  //     if (listData.loanToken.includes(data as never)) {
  //       const newList = listData.loanToken.filter(item => item !== data);
  //       setListData({ ...listData, loanToken: newList });
  //     } else {
  //       setListData({
  //         ...listData,
  //         loanToken: [...listData.loanToken, data],
  //       });
  //     }
  //   }
  //   if (tags === 'Loan type') {
  //     if (listData.LoanType.includes(data as never)) {
  //       const newList = listData.LoanType.filter(item => item !== data);
  //       setListData({ ...listData, LoanType: newList });
  //     } else {
  //       setListData({
  //         ...listData,
  //         LoanType: [...listData.LoanType, data],
  //       });
  //     }
  //   }
  // };
  const [status, setStatus] = useState(false);
  const handleShowFilter = () => {
    setStatus(!status);
  };

  const newArr = listCoin.map(e => e)[0];
  const convertStr = str => {
    if (str?.length > 16) {
      const firstArr = str.substr(0, 5);
      const lastArr = str.substr(str.lenght - 5, 5);
      return `${firstArr}...${lastArr}`;
    } else {
      return str;
    }
  };
  const arr = ['1', '2', '3', '4', '5', '6', '7', '8'];
  let firstData: any;
  let lastData: any = [];
  if (arr?.length > 5) {
    firstData = arr.slice(0, 5);
    lastData = arr.slice(5, arr?.length);
  } else {
    firstData = [...arr];
  }

  return (
    <>
      <Header />
      <WrapperResult>
        <ContainerResult>
          <Flex gap={20} justifyContent="center" alignItem="flex-start">
            <BoxLeft>
              <Paragrap>10 collateral offers match your search</Paragrap>
              <TableContainer
                sx={{
                  '@media (max-width:1024px)': {
                    display: 'none  ',
                  },
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
                        '&:last-child': {
                          // marginBottom: '0',
                        },
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
                    {firstData.map((e, index) => (
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
                              {convertStr('12345678901234567890')}
                            </MyLink>
                            <MyFlex style={{ alignItems: 'center' }}>
                              <img src={star} alt="" />
                              <span>
                                1000{' '}
                                <span style={{ padding: '0 10px' }}>|</span>
                                100 contacts
                              </span>
                            </MyFlex>
                          </FlexColumn>
                        </TableCell>
                        <TableCell align="left">
                          <MyFlex>
                            <img src={newArr.url} alt="" /> 10 {newArr.value}
                          </MyFlex>
                        </TableCell>
                        <TableCell align="left">
                          <MyFlex>
                            <img src={newArr.url} alt="" /> 10 {newArr.value}
                          </MyFlex>
                        </TableCell>
                        <TableCell align="left">12 months</TableCell>
                        <TableCell align="center">
                          <ButtomBase bg="DBA83D" className="btn">
                            Send Offer
                          </ButtomBase>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                <Banner>
                  <div className="heading">
                    <h4>Become your own bank</h4>
                    <p>
                      Sign up for pawnshop to get great benefits from{' '}
                      <span>DeFi For You.</span>
                    </p>
                  </div>
                  <img src={BG_Banner} alt="" />
                </Banner>
                {lastData.length > 0 ? (
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
                    <TableBody
                      sx={{
                        tr: {
                          background: '#282C37',
                          borderRadius: '4px 4px 0px 0px',
                          '&:last-child': {
                            // marginBottom: '0',
                          },
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
                      {lastData.map((e, index) => (
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
                                {convertStr('12345678901234567890')}
                              </MyLink>
                              <span>
                                <img src={star} alt="" /> 1000
                                <span style={{ padding: '0 10px' }}>|</span>100
                                contacts
                              </span>
                            </FlexColumn>
                          </TableCell>
                          <TableCell align="left">
                            <MyFlex>
                              <img src={newArr.url} alt="" /> 10 {newArr.value}
                            </MyFlex>
                          </TableCell>
                          <TableCell align="left">
                            <MyFlex>
                              <img src={newArr.url} alt="" /> 10 {newArr.value}
                            </MyFlex>
                          </TableCell>
                          <TableCell align="left">12 months</TableCell>
                          <TableCell align="center">
                            <ButtomBase bg="DBA83D" className="btn">
                              Send Offer
                            </ButtomBase>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                ) : (
                  ''
                )}
              </TableContainer>
              {/* <Wrappermb>  */}
              <WrapperMobie>
                {firstData.map(e => (
                  <Item>
                    <Row>
                      <span className="left">Borrower</span>
                      <FlexColumn>
                        <MyLink to="#">
                          {convertStr('12345678901234567890')}
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
                          <img src={newArr.url} alt="" /> 10 {newArr.value}
                        </MyFlex>
                      </Row>
                    </Row>
                    <Row>
                      <Row>
                        <span className="left">Loan currency</span>
                        <MyFlex>
                          <img src={newArr.url} alt="" /> 10 {newArr.value}
                        </MyFlex>
                      </Row>
                    </Row>
                    <Row>
                      <span className="left">Duration</span>
                      <span>12 months</span>
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
                    Sign up for pawnshop to get great benefits from{' '}
                    <span>DeFi For You.</span>
                  </p>
                </div>
                <img src={BG_Banner} alt="" />
              </Banner>
              {lastData.length ? (
                <WrapperMobie>
                  {lastData.map(e => (
                    <Item>
                      <Row>
                        <span className="left">Borrower</span>
                        <FlexColumn>
                          <MyLink to="#">
                            {convertStr('12345678901234567890')}
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
                            <img src={newArr.url} alt="" /> 10 {newArr.value}
                          </MyFlex>
                        </Row>
                      </Row>
                      <Row>
                        <Row>
                          <span className="left">Loan currency</span>
                          <MyFlex>
                            <img src={newArr.url} alt="" /> 10 {newArr.value}
                          </MyFlex>
                        </Row>
                      </Row>
                      <Row>
                        <span className="left">Duration</span>
                        <span>12 months</span>
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
              <Paginations length={5} />
            </BoxLeft>

            <Boxright check={status} className={status ? 'active' : 'none'}>
              <Reset>Reset filter</Reset>
              <Close
                onClick={handleShowFilter}
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAI4SURBVHgBvVexbsIwED1nYAGpdGJMED9AZ5Z0gZV+AeJLWr6k8AVlhQX+oHRHIsDEVCrBwgC95zoomCR2U9InBQd8+N27nM8XQZZYLBZlHup8+Y7juKfTCd/LQojgeDwu+X7K16xarW5t1hMmAyYEUYeJ2iAyLihEnx3psQNBql0KIdS88m2bMsDkgEgg9RWpR39DwJF6YvKZPuHoPyyXyw6TTm5ACni81jvW1CcuFLPSOgwpB7DyR1Y+vSJmUu+GSuOAsD+EWX8ONWfuc46kgKfyRkIqVmoX9A8IQy4VK7WpmM/ntNvtEucPhwOtVisyATUBo1D79TPNeL1e02QyoVKpRM1mU45RwKHxeCzHRqNBtVotbbktq65CcZ0MqFQqVCwWLwjiSGEDWwNk6QWxb7IsFArUarWuyHVS2OjRSICPUPc51B0baxCMRiPa7/dnggykspw6/OGSJbBwVHkWUoBr+D1CbXWMaR7H3v/i/3cOZ9iX7R/0Z5qUcBbEARTPspAivHEJZwM0DlbESdmrP3PYoJBYYBoSpz7nzWaTmEg6OWwtMAtrtXFLoXqhOGBPxyEkNVQtuZVc1+2GxL46EnMHyiXaIXlIqAN6SDkDasMezIl40uUhoPyANrh3diI6k2fIVfdx3kEXzR5CrpTfmrSrd5pJ7S2avje6TXvbjTZ5IZw4a3iHFoWvAWXHUIV3Gjdp8wrj8fBieXRu2W7ISTRIIrQmjjigv7R5imjLRB/0UwGtX9q+AXoFYjqElBA4AAAAAElFTkSuQmCC"
              />
              <SearchPawnshops />
              <InterestRange />
              <LoanValue />
              <CollateralAccepted />
              <LoanToken />
              <LoanType />
            </Boxright>
          </Flex>
        </ContainerResult>
      </WrapperResult>
      <Footer />
    </>
  );
}
