import React from 'react';
import BannerSearch from '../BannerSearch';
import FormSearch from '../FormSearch';
import { Flex } from '../rootStyled';
import { WrapperSearch, Container } from './style';

const SearchBorrow = props => {
  return (
    <WrapperSearch>
      <Container>
        <Flex
          className="layout"
          justifyContent="space-between"
          flexColumn={991}
        >
          <BannerSearch />
          <FormSearch />
        </Flex>
      </Container>
    </WrapperSearch>
  );
};

export default SearchBorrow;
