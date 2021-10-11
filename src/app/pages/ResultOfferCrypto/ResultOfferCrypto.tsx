import { CollateralAccepted } from 'app/components/Filter/CollateralAccepted';
import { Duration } from 'app/components/Filter/Duration';
import { InterestRange } from 'app/components/Filter/InterestRange';
import { LoanToken } from 'app/components/Filter/LoanToken';
import { LoanType } from 'app/components/Filter/LoanType';
import { LoanValue } from 'app/components/Filter/LoanValue';
import { SearchPawnshops } from 'app/components/Filter/SearchPawnshops';
import Footer from 'app/components/Footer/Footer';
import Header from 'app/components/Header';
import Paginations from 'app/components/Pagination';
import { Flex } from 'app/components/rootStyled';
import React from 'react';
import ListItemBorrow from './ListItemBorrow';
import ListSugges from '../../../app/pages/ResultOfferCrypto/SearchSuggess/OptionPersonal/index';
import FilterMobile from './FilterMobile';
import {
  BoxLeft,
  Boxright,
  ContainerResult,
  Filter,
  Reset,
  WrapperResult,
} from './styles';

interface Props {}

export const ResultOfferCrypto = (props: Props) => {
  return (
    <div>
      <Header />
      <WrapperResult>
        <ContainerResult>
          <Flex gap={20} justifyContent="center">
            <BoxLeft>
              <ListSugges />
              <ListItemBorrow></ListItemBorrow>
              <Paginations length={12} />
            </BoxLeft>
            <Boxright>
              <Reset>Reset filter</Reset>
              <SearchPawnshops />
              <InterestRange />
              <LoanValue />
              <CollateralAccepted />
              <LoanToken />
              <LoanType />
              <Duration />
            </Boxright>
            <Filter>
              <FilterMobile />
            </Filter>
          </Flex>
        </ContainerResult>
      </WrapperResult>
      <Footer />
    </div>
  );
};
