import React, { useEffect, useState } from 'react';
import SuggesItems from '../Suggestions/SuggesItems';
import {
  ViewOption,
  TextResults,
  Lending,
  AllLending,
  ViewAllLending,
} from './styled';
import coin2 from '../../../../../images/imagecoin/coin2.png';
import { Link } from 'react-router-dom';
import Items from './items';
import { Flex } from 'app/components/rootStyled';
import { useHistory } from 'react-router';
import queryString from 'query-string';
import { searchApi } from 'api/searchApiHome';
export default function ListSugges() {
  const suggestData = {
    img: coin2,
    title: 'Want an instant loan? ',
    content: 'Submit your collateral to get a loan in seconds',
  };
  //call API Borrow
  const history = useHistory();
  const [listApiData, setListApiData] = useState<any>([]);
  const param = queryString.parse(history.location.search);
  useEffect(() => {
    searchApi
      .getPersonalLending(param)
      .then((res: any) => {
        setListApiData(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  console.log(listApiData);

  return (
    <ViewOption>
      <TextResults> 10 pawnshop package match your search </TextResults>
      <SuggesItems img="" title="" content="" />
      <ViewAllLending>
        <Lending>Personal Lending</Lending>
        <AllLending>
          <Link to="#">View all</Link>
        </AllLending>
      </ViewAllLending>

      <Flex gap={20} justifyContent="center" flexColumn={768}>
        {listApiData?.content?.slice(0, 2).map((item, index) => (
          <Items key={index} pages="borrow" item={item} />
        ))}
      </Flex>

      <SuggesItems
        img={suggestData.img}
        title={suggestData.title}
        content={suggestData.content}
      />
    </ViewOption>
  );
}
