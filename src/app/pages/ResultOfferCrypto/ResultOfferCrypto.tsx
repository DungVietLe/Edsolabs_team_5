import Footer from 'app/components/Footer/Footer';
import Header from 'app/components/Header';
import { Flex } from 'app/components/rootStyled';
import React from 'react';
import { BoxLeft, Boxright, ContainerResult, WrapperResult } from './styles';

interface Props {}

export const ResultOfferCrypto = (props: Props) => {
  return (
    <div>
      <Header />
      <WrapperResult>
        <ContainerResult>
          <Flex gap={20} justifyContent="center">
            <BoxLeft>HUY, LINH</BoxLeft>
            <Boxright>DŨNG</Boxright>
          </Flex>
        </ContainerResult>
      </WrapperResult>
      <Footer />
    </div>
  );
};
