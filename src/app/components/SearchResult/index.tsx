import { BoxFlex, BoxrightMobile } from 'app/pages/ResultOfferCrypto/styles';
import {
  BoxLeft,
  ContainerResult,
  Reset,
  WrapperResult,
} from 'app/pages/ResultStyles';
import * as React from 'react';
import { useState } from 'react';
import elipse from '../../../images/imagesearch/Ellipse 45.png';
import currency from '../../../images/imagesearch/Ellipse 46.png';
import bank from '../../../images/imagesearch/Frame.png';
import star from '../../../images/imagesearch/Star 1.png';
import { Close } from '../../pages/ResultOfferCrypto/styles';
import { InterestRange } from '../Filter/InterestRange';
import { LoanToken } from '../Filter/LoanToken';
import { LoanType } from '../Filter/LoanType';
import { LoanValue } from '../Filter/LoanValue';
import { SearchPawnshops } from '../Filter/SearchPawnshops';
import Footer from '../Footer/Footer';
import Header from '../Header';
import { CollateralAccepted } from '../ItemShow/styles';
import { Flex } from '../rootStyled';
import Paginations from 'app/components/Pagination';
import {
  Banner,
  Container,
  Paragraph,
  Table,
  Tr,
  THeaderT,
  THeaderBorrow,
  THeaderColla,
  THeaderCurrency,
  THeaderDuration,
  THeaderButton,
  Trow,
  Td,
  Tdborrow,
  TdBanner,
  DivLender,
  DivTitle,
  DivHero,
  DivMini,
  SpanMini,
  DivImg,
  Address,
  A,
  LenderInfo,
  LenderMount,
  LenderArr,
  LenderConstract,
  Img,
  TdCol,
  Token,
  Text,
  TextMonth,
  Button,
  TdButton,
} from './style';
export function SearchResult() {
  const [listData, setListData] = useState<any>({
    collateralAccepted: [],
    loanToken: [],
    LoanType: [],
    duration: [],
  });

  const handleValueFilter = (data: any, tags: any) => {
    if (tags === 'Collateral accepted') {
      if (listData.collateralAccepted.includes(data as never)) {
        const newList = listData.collateralAccepted.filter(
          item => item !== data,
        );
        setListData({ ...listData, collateralAccepted: newList });
      } else {
        setListData({
          ...listData,
          collateralAccepted: [...listData.collateralAccepted, data],
        });
      }
    }
    if (tags === 'Duration') {
      if (listData.duration.includes(data as never)) {
        const newList = listData.duration.filter(item => item !== data);
        setListData({ ...listData, duration: newList });
      } else {
        setListData({
          ...listData,
          duration: [...listData.duration, data],
        });
      }
    }
    if (tags === 'Loan Token') {
      if (listData.loanToken.includes(data as never)) {
        const newList = listData.loanToken.filter(item => item !== data);
        setListData({ ...listData, loanToken: newList });
      } else {
        setListData({
          ...listData,
          loanToken: [...listData.loanToken, data],
        });
      }
    }
    if (tags === 'Loan type') {
      if (listData.LoanType.includes(data as never)) {
        const newList = listData.LoanType.filter(item => item !== data);
        setListData({ ...listData, LoanType: newList });
      } else {
        setListData({
          ...listData,
          LoanType: [...listData.LoanType, data],
        });
      }
    }
  };
  const [status, setStatus] = useState(false);
  const handleShowFilter = () => {
    setStatus(!status);
  };
  return (
    <>
      <Header />
      <WrapperResult>
        <ContainerResult>
          <Flex gap={20} justifyContent="center" alignItem="flex-start">
            <BoxLeft>
              <Container>
                <Paragraph>10 collateral offers match your search</Paragraph>
                <Table>
                  <Tr>
                    <THeaderT> # </THeaderT>
                    <THeaderBorrow>Borrower</THeaderBorrow>
                    <THeaderColla>Collateral</THeaderColla>
                    <THeaderCurrency>Loan currency</THeaderCurrency>
                    <THeaderDuration>Duration</THeaderDuration>
                    <THeaderButton></THeaderButton>
                  </Tr>
                  <Trow>
                    <Td>1</Td>
                    <Tdborrow>
                      <Address>
                        <A to="/">0xaa5...a410e</A>
                      </Address>
                      <LenderInfo>
                        <Img>
                          <img src={star} alt="star" />
                        </Img>
                        <LenderMount>1000</LenderMount>
                        <LenderArr>|</LenderArr>
                        <LenderConstract>100</LenderConstract>
                      </LenderInfo>
                    </Tdborrow>
                    <TdCol>
                      <Token>
                        <img src={elipse} alt="elipse" width="24" height="24" />
                        <Text>10TH</Text>
                      </Token>
                    </TdCol>
                    <TdCol>
                      <Token>
                        <img
                          src={currency}
                          alt="currency"
                          width="24"
                          height="24"
                        />

                        <Text>DFY</Text>
                      </Token>
                    </TdCol>
                    <TdCol>
                      <Token>
                        <TextMonth>12 months</TextMonth>
                      </Token>
                    </TdCol>
                    <TdButton>
                      <Button>Send Offer</Button>
                    </TdButton>
                  </Trow>
                  <Banner>
                    <TdBanner>
                      <DivLender>
                        <DivTitle>
                          <DivHero>Become your own bank</DivHero>
                          <DivMini>
                            Sign up for pawnshop to get great benefits from{' '}
                            <SpanMini>DeFi For You.</SpanMini>
                          </DivMini>
                        </DivTitle>
                        <DivImg>
                          <img src={bank} alt="BankIcon" />
                        </DivImg>
                      </DivLender>
                    </TdBanner>
                  </Banner>
                </Table>
              </Container>
              <Paginations length={5} />
            </BoxLeft>

            <BoxrightMobile>
              <BoxFlex>
                <Reset>Reset filter</Reset>
                <Close
                  onClick={handleShowFilter}
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAI4SURBVHgBvVexbsIwED1nYAGpdGJMED9AZ5Z0gZV+AeJLWr6k8AVlhQX+oHRHIsDEVCrBwgC95zoomCR2U9InBQd8+N27nM8XQZZYLBZlHup8+Y7juKfTCd/LQojgeDwu+X7K16xarW5t1hMmAyYEUYeJ2iAyLihEnx3psQNBql0KIdS88m2bMsDkgEgg9RWpR39DwJF6YvKZPuHoPyyXyw6TTm5ACni81jvW1CcuFLPSOgwpB7DyR1Y+vSJmUu+GSuOAsD+EWX8ONWfuc46kgKfyRkIqVmoX9A8IQy4VK7WpmM/ntNvtEucPhwOtVisyATUBo1D79TPNeL1e02QyoVKpRM1mU45RwKHxeCzHRqNBtVotbbktq65CcZ0MqFQqVCwWLwjiSGEDWwNk6QWxb7IsFArUarWuyHVS2OjRSICPUPc51B0baxCMRiPa7/dnggykspw6/OGSJbBwVHkWUoBr+D1CbXWMaR7H3v/i/3cOZ9iX7R/0Z5qUcBbEARTPspAivHEJZwM0DlbESdmrP3PYoJBYYBoSpz7nzWaTmEg6OWwtMAtrtXFLoXqhOGBPxyEkNVQtuZVc1+2GxL46EnMHyiXaIXlIqAN6SDkDasMezIl40uUhoPyANrh3diI6k2fIVfdx3kEXzR5CrpTfmrSrd5pJ7S2avje6TXvbjTZ5IZw4a3iHFoWvAWXHUIV3Gjdp8wrj8fBieXRu2W7ISTRIIrQmjjigv7R5imjLRB/0UwGtX9q+AXoFYjqElBA4AAAAAElFTkSuQmCC"
                />
              </BoxFlex>
              <SearchPawnshops />
              <InterestRange />
              <LoanValue />
              <CollateralAccepted />
              <LoanToken data={handleValueFilter} />
              <LoanType data={handleValueFilter} />
            </BoxrightMobile>
          </Flex>
        </ContainerResult>
      </WrapperResult>
      <Footer />
    </>
  );
}
