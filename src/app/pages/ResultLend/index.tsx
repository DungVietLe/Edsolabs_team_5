import Footer from 'app/components/Footer/Footer';
import Header from 'app/components/Header';
import Paginations from 'app/components/Pagination';
import { Flex } from 'app/components/rootStyled';
import React, { useState, useEffect } from 'react';
import {
  BoxLeft,
  Boxright,
  ContainerResult,
  WrapperResult,
  FlexColumn,
  Paragrap,
} from '../ResultStyles';
//import { FakeListItemSearchLendNFT } from 'api/fakeDataSerachListItem';
import { ItemShowLend } from 'app/components/ItemShow';
import { useHistory } from 'react-router';
import queryString from 'query-string';
import { searchApi } from 'api/searchApiHome';

const ResultLend = () => {
  //call API LentNFT
  const history = useHistory();
  const [listApiData, setListApiData] = useState<any>([]);
  const param = queryString.parse(history.location.search);
  const newUrl = window.location.search;
  useEffect(() => {
    searchApi
      .getDataLentNFT(param)
      .then((res: any) => {
        setListApiData(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [newUrl]);
  return (
    <div>
      <Header />
      <WrapperResult>
        <ContainerResult>
          <Flex gap={20} justifyContent="center" alignItem="flex-start">
            <BoxLeft>
              <Paragrap>
                {listApiData?.content?.length} collateral offers match your
                search
              </Paragrap>
              <FlexColumn style={{ marginBottom: '50px' }}>
                {listApiData.content?.map((item, index) => (
                  <ItemShowLend key={index} pages="lend" item={item} />
                ))}
              </FlexColumn>

              <Paginations
                page={listApiData?.page}
                length={listApiData?.total_pages}
              />
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
