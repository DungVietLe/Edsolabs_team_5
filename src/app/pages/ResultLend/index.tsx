import Footer from 'app/components/Footer/Footer';
import Header from 'app/components/Header';
import Paginations from 'app/components/Pagination';
import { Flex } from 'app/components/rootStyled';
import React from 'react';
import {
  BoxLeft,
  Boxright,
  ContainerResult,
  WrapperResult,
  FlexColumn,
  Paragrap,
} from '../ResultStyles';
import { FakeListItemSearchLendNFT } from 'api/fakeDataSerachListItem';
import { ItemShowLend } from 'app/components/ItemShow';

const ResultLend = () => {
  return (
    <div>
      <Header />
      <WrapperResult>
        <ContainerResult>
          <Flex gap={20} justifyContent="center" alignItem="flex-start">
            <BoxLeft>
              <Paragrap>3 collateral offers match your search</Paragrap>
              <FlexColumn style={{ marginBottom: '50px' }}>
                {FakeListItemSearchLendNFT.map((item, index) => (
                  <ItemShowLend key={index} pages="lend" item={item} />
                ))}
              </FlexColumn>
              <Paginations length={15} />
            </BoxLeft>
            <Boxright></Boxright>
          </Flex>
        </ContainerResult>
      </WrapperResult>
      <Footer />
    </div>
  );
};

export default ResultLend;
