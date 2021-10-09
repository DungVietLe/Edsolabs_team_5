import { SearchPawnshops } from 'app/components/Filter/SearchPawnshops';
import { InterestRange } from 'app/components/Filter/InterestRange';
import Footer from 'app/components/Footer/Footer';
import Header from 'app/components/Header';
import { Flex } from 'app/components/rootStyled';
import React from 'react';
import {
  BoxLeft,
  Boxright,
  ContainerResult,
  Reset,
  WrapperResult,
} from './styles';
import { LoanValue } from 'app/components/Filter/LoanValue';
import { CollateralAccepted } from 'app/components/Filter/CollateralAccepted';
import { LoanToken } from 'app/components/Filter/LoanToken';
import { LoanType } from 'app/components/Filter/LoanType';
import { Duration } from 'app/components/Filter/Duration';
interface Props {}

export const ResultOfferCrypto = (props: Props) => {
  return (
    <div>
      <Header />
      <WrapperResult>
        <ContainerResult>
          <Flex gap={20}>
            <BoxLeft>HUY, LINH</BoxLeft>
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
          </Flex>
        </ContainerResult>
      </WrapperResult>
      <Footer />
    </div>
  );
};
