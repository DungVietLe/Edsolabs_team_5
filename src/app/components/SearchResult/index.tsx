import { BoxFlex, BoxrightMobile } from 'app/pages/ResultOfferCrypto/styles';
import {
  BoxLeft,
  ContainerResult,
  Reset,
  WrapperResult,
} from 'app/pages/ResultStyles';
import { useState } from 'react';
import elipse from '../../../images/imagesearch/Ellipse 45.png';
import currency from '../../../images/imagesearch/Ellipse 46.png';
import bank from '../../../images/imagesearch/Frame.png';
import next from '../../../images/imagesearch/Rectangle 154.png';
import front from '../../../images/imagesearch/Rectangle 155.png';
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
import {
  Arrow,
  Bank,
  BankBefore,
  BankLeft,
  BankRight,
  BankUnder,
  BankYellow,
  Borrower,
  BorrowerFlex,
  BorrowerLink,
  Collateral,
  Collaterale,
  CollateraleImg,
  CollateraleText,
  Container,
  Contracts,
  ContractsNghin,
  ContractsStar,
  ContractsTram,
  CurrencyImg,
  CurrencyIn,
  CurrencyText,
  Duration,
  DurationIn,
  Loancurrency,
  Page,
  Pagination,
  Paragraph,
  Quantity,
  SendOffcer,
  SendOffcerButton,
  Table,
  TableContent,
  Thang,
  WrapperSearchResult,
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
            <BoxLeft>Viết code trong này </BoxLeft>
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
              <Duration />
            </BoxrightMobile>
          </Flex>
        </ContainerResult>
      </WrapperResult>

      <WrapperSearchResult>
        <Container>
          <Paragraph>10 collateral offers match your search</Paragraph>
          <Table>
            <Thang>#</Thang>
            <Borrower>Borrower</Borrower>
            <Collateral>Collateral</Collateral>
            <Loancurrency>Loan currency</Loancurrency>
            <Duration>Duration</Duration>
          </Table>
          <TableContent>
            <Quantity>1</Quantity>
            <BorrowerFlex>
              <BorrowerLink>0xaa5...a410e</BorrowerLink>
              <Contracts>
                <ContractsStar>
                  <img src={star} alt="star" />
                </ContractsStar>
                <ContractsNghin>1000</ContractsNghin>
                <ContractsTram>|&nbsp;&nbsp; 100 contracts</ContractsTram>
              </Contracts>
              <Collaterale>
                <CollateraleImg>
                  <img src={elipse} alt="Collateral" />
                </CollateraleImg>
                <CollateraleText>10 ETH</CollateraleText>
              </Collaterale>
              <CurrencyIn>
                <CurrencyImg>
                  <img src={currency} alt="Collateral" />
                </CurrencyImg>
                <CurrencyText>DFY</CurrencyText>
              </CurrencyIn>
              <DurationIn>12 months</DurationIn>
              <SendOffcer>
                <SendOffcerButton>Send Offer</SendOffcerButton>
              </SendOffcer>
            </BorrowerFlex>
          </TableContent>
          <TableContent>
            <Quantity>1</Quantity>
            <BorrowerFlex>
              <BorrowerLink>0xaa5...a410e</BorrowerLink>
              <Contracts>
                <ContractsStar>
                  <img src={star} alt="star" />
                </ContractsStar>
                <ContractsNghin>1000</ContractsNghin>
                <ContractsTram>|&nbsp;&nbsp; 100 contracts</ContractsTram>
              </Contracts>
              <Collaterale>
                <CollateraleImg>
                  <img src={elipse} alt="Collateral" />
                </CollateraleImg>
                <CollateraleText>10 ETH</CollateraleText>
              </Collaterale>
              <CurrencyIn>
                <CurrencyImg>
                  <img src={currency} alt="Collateral" />
                </CurrencyImg>
                <CurrencyText>DFY</CurrencyText>
              </CurrencyIn>
              <DurationIn>12 months</DurationIn>
              <SendOffcer>
                <SendOffcerButton>Send Offer</SendOffcerButton>
              </SendOffcer>
            </BorrowerFlex>
          </TableContent>
          <TableContent>
            <Quantity>1</Quantity>
            <BorrowerFlex>
              <BorrowerLink>0xaa5...a410e</BorrowerLink>
              <Contracts>
                <ContractsStar>
                  <img src={star} alt="star" />
                </ContractsStar>
                <ContractsNghin>1000</ContractsNghin>
                <ContractsTram>|&nbsp;&nbsp; 100 contracts</ContractsTram>
              </Contracts>
              <Collaterale>
                <CollateraleImg>
                  <img src={elipse} alt="Collateral" />
                </CollateraleImg>
                <CollateraleText>10 ETH</CollateraleText>
              </Collaterale>
              <CurrencyIn>
                <CurrencyImg>
                  <img src={currency} alt="Collateral" />
                </CurrencyImg>
                <CurrencyText>DFY</CurrencyText>
              </CurrencyIn>
              <DurationIn>12 months</DurationIn>
              <SendOffcer>
                <SendOffcerButton>Send Offer</SendOffcerButton>
              </SendOffcer>
            </BorrowerFlex>
          </TableContent>
          <TableContent>
            <Quantity>1</Quantity>
            <BorrowerFlex>
              <BorrowerLink>0xaa5...a410e</BorrowerLink>
              <Contracts>
                <ContractsStar>
                  <img src={star} alt="star" />
                </ContractsStar>
                <ContractsNghin>1000</ContractsNghin>
                <ContractsTram>|&nbsp;&nbsp; 100 contracts</ContractsTram>
              </Contracts>
              <Collaterale>
                <CollateraleImg>
                  <img src={elipse} alt="Collateral" />
                </CollateraleImg>
                <CollateraleText>10 ETH</CollateraleText>
              </Collaterale>
              <CurrencyIn>
                <CurrencyImg>
                  <img src={currency} alt="Collateral" />
                </CurrencyImg>
                <CurrencyText>DFY</CurrencyText>
              </CurrencyIn>
              <DurationIn>12 months</DurationIn>
              <SendOffcer>
                <SendOffcerButton>Send Offer</SendOffcerButton>
              </SendOffcer>
            </BorrowerFlex>
          </TableContent>
          <TableContent>
            <Quantity>1</Quantity>
            <BorrowerFlex>
              <BorrowerLink>0xaa5...a410e</BorrowerLink>
              <Contracts>
                <ContractsStar>
                  <img src={star} alt="star" />
                </ContractsStar>
                <ContractsNghin>1000</ContractsNghin>
                <ContractsTram>|&nbsp;&nbsp; 100 contracts</ContractsTram>
              </Contracts>
              <Collaterale>
                <CollateraleImg>
                  <img src={elipse} alt="Collateral" />
                </CollateraleImg>
                <CollateraleText>10 ETH</CollateraleText>
              </Collaterale>
              <CurrencyIn>
                <CurrencyImg>
                  <img src={currency} alt="Collateral" />
                </CurrencyImg>
                <CurrencyText>DFY</CurrencyText>
              </CurrencyIn>
              <DurationIn>12 months</DurationIn>
              <SendOffcer>
                <SendOffcerButton>Send Offer</SendOffcerButton>
              </SendOffcer>
            </BorrowerFlex>
          </TableContent>
          <Bank>
            <BankLeft>
              <BankBefore>Become your own bank</BankBefore>
              <BankUnder>
                Sign up for pawnshop to get great benefits from{' '}
                <BankYellow>DeFi For You.</BankYellow>
              </BankUnder>
            </BankLeft>
            <BankRight>
              <img src={bank} alt="bank" />
            </BankRight>
          </Bank>
          <TableContent>
            <Quantity>1</Quantity>
            <BorrowerFlex>
              <BorrowerLink>0xaa5...a410e</BorrowerLink>
              <Contracts>
                <ContractsStar>
                  <img src={star} alt="star" />
                </ContractsStar>
                <ContractsNghin>1000</ContractsNghin>
                <ContractsTram>|&nbsp;&nbsp; 100 contracts</ContractsTram>
              </Contracts>
              <Collaterale>
                <CollateraleImg>
                  <img src={elipse} alt="Collateral" />
                </CollateraleImg>
                <CollateraleText>10 ETH</CollateraleText>
              </Collaterale>
              <CurrencyIn>
                <CurrencyImg>
                  <img src={currency} alt="Collateral" />
                </CurrencyImg>
                <CurrencyText>DFY</CurrencyText>
              </CurrencyIn>
              <DurationIn>12 months</DurationIn>
              <SendOffcer>
                <SendOffcerButton>Send Offer</SendOffcerButton>
              </SendOffcer>
            </BorrowerFlex>
          </TableContent>
          <TableContent>
            <Quantity>1</Quantity>
            <BorrowerFlex>
              <BorrowerLink>0xaa5...a410e</BorrowerLink>
              <Contracts>
                <ContractsStar>
                  <img src={star} alt="star" />
                </ContractsStar>
                <ContractsNghin>1000</ContractsNghin>
                <ContractsTram>|&nbsp;&nbsp; 100 contracts</ContractsTram>
              </Contracts>
              <Collaterale>
                <CollateraleImg>
                  <img src={elipse} alt="Collateral" />
                </CollateraleImg>
                <CollateraleText>10 ETH</CollateraleText>
              </Collaterale>
              <CurrencyIn>
                <CurrencyImg>
                  <img src={currency} alt="Collateral" />
                </CurrencyImg>
                <CurrencyText>DFY</CurrencyText>
              </CurrencyIn>
              <DurationIn>12 months</DurationIn>
              <SendOffcer>
                <SendOffcerButton>Send Offer</SendOffcerButton>
              </SendOffcer>
            </BorrowerFlex>
          </TableContent>
          <TableContent>
            <Quantity>1</Quantity>
            <BorrowerFlex>
              <BorrowerLink>0xaa5...a410e</BorrowerLink>
              <Contracts>
                <ContractsStar>
                  <img src={star} alt="star" />
                </ContractsStar>
                <ContractsNghin>1000</ContractsNghin>
                <ContractsTram>|&nbsp;&nbsp; 100 contracts</ContractsTram>
              </Contracts>
              <Collaterale>
                <CollateraleImg>
                  <img src={elipse} alt="Collateral" />
                </CollateraleImg>
                <CollateraleText>10 ETH</CollateraleText>
              </Collaterale>
              <CurrencyIn>
                <CurrencyImg>
                  <img src={currency} alt="Collateral" />
                </CurrencyImg>
                <CurrencyText>DFY</CurrencyText>
              </CurrencyIn>
              <DurationIn>12 months</DurationIn>
              <SendOffcer>
                <SendOffcerButton>Send Offer</SendOffcerButton>
              </SendOffcer>
            </BorrowerFlex>
          </TableContent>
          <TableContent>
            <Quantity>1</Quantity>
            <BorrowerFlex>
              <BorrowerLink>0xaa5...a410e</BorrowerLink>
              <Contracts>
                <ContractsStar>
                  <img src={star} alt="star" />
                </ContractsStar>
                <ContractsNghin>1000</ContractsNghin>
                <ContractsTram>|&nbsp;&nbsp; 100 contracts</ContractsTram>
              </Contracts>
              <Collaterale>
                <CollateraleImg>
                  <img src={elipse} alt="Collateral" />
                </CollateraleImg>
                <CollateraleText>10 ETH</CollateraleText>
              </Collaterale>
              <CurrencyIn>
                <CurrencyImg>
                  <img src={currency} alt="Collateral" />
                </CurrencyImg>
                <CurrencyText>DFY</CurrencyText>
              </CurrencyIn>
              <DurationIn>12 months</DurationIn>
              <SendOffcer>
                <SendOffcerButton>Send Offer</SendOffcerButton>
              </SendOffcer>
            </BorrowerFlex>
          </TableContent>
          <TableContent>
            <Quantity>1</Quantity>
            <BorrowerFlex>
              <BorrowerLink>0xaa5...a410e</BorrowerLink>
              <Contracts>
                <ContractsStar>
                  <img src={star} alt="star" />
                </ContractsStar>
                <ContractsNghin>1000</ContractsNghin>
                <ContractsTram>|&nbsp;&nbsp; 100 contracts</ContractsTram>
              </Contracts>
              <Collaterale>
                <CollateraleImg>
                  <img src={elipse} alt="Collateral" />
                </CollateraleImg>
                <CollateraleText>10 ETH</CollateraleText>
              </Collaterale>
              <CurrencyIn>
                <CurrencyImg>
                  <img src={currency} alt="Collateral" />
                </CurrencyImg>
                <CurrencyText>DFY</CurrencyText>
              </CurrencyIn>
              <DurationIn>12 months</DurationIn>
              <SendOffcer>
                <SendOffcerButton>Send Offer</SendOffcerButton>
              </SendOffcer>
            </BorrowerFlex>
          </TableContent>
          <Pagination>
            <Arrow>
              <img src={front} alt="Front" />
            </Arrow>
            <Page>1</Page>
            <Page>2</Page>
            <Page>3</Page>
            <Arrow>
              <img src={next} alt="Next" />
            </Arrow>
          </Pagination>
        </Container>
      </WrapperSearchResult>
      <Footer />
    </>
  );
}
