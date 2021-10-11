import Footer from 'app/components/Footer/Footer';
import Header from 'app/components/Header';
import Paginations from 'app/components/Pagination';
import { Flex } from 'app/components/rootStyled';
import React from 'react';
import ListItemBorrow from './ListItemBorrow';
import { BoxLeft, Boxright, ContainerResult, WrapperResult } from './styles';

interface Props {}

export const ResultOfferCrypto = (props: Props) => {
  return (
    <div>
      <Header />
      <WrapperResult>
        <ContainerResult>
          <Flex gap={20} flexColumn={768} justifyContent="center">
            <BoxLeft>
              <ListItemBorrow></ListItemBorrow>
              <Paginations length={12} />
            </BoxLeft>
            <Boxright>DŨNG</Boxright>
          </Flex>
        </ContainerResult>
      </WrapperResult>
      <Footer />
    </div>
  );
};
