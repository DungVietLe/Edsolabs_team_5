import React from 'react';
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
export default function ListSugges() {
  const suggestData = {
    img: coin2,
    title: 'Want an instant loan? ',
    content: 'Submit your collateral to get a loan in seconds',
  };
  const listPersonal = [
    {
      id: 1,
      name: 'QQ ‘s Pawnshop',
      percent: '10 - 12% interest rate',
      collateral: 'Collateral accepted: ',
      request: 'Request loan',
    },
    {
      id: 2,
      name: 'QQ ‘s Pawnshop',
      percent: '10 - 12% interest rate',
      collateral: 'Collateral accepted: ',
      request: 'Request loan',
    },
  ];
  const renderPersonal = listPersonal.map(item => {
    return (
      <Items
        key={item.id}
        name={item.name}
        percent={item.percent}
        collateral={item.collateral}
        request={item.request}
      />
    );
  });

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
        {renderPersonal}
      </Flex>

      <SuggesItems
        img={suggestData.img}
        title={suggestData.title}
        content={suggestData.content}
      />
    </ViewOption>
  );
}
