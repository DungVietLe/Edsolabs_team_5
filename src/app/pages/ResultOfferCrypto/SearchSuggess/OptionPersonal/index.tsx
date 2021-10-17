/* eslint-disable react-hooks/exhaustive-deps */
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
import { messages } from '../../messages';
import { useTranslation } from 'react-i18next';

export default function ListSugges(props: any) {
  const { total } = props;
  const { t } = useTranslation();
  const suggestData = {
    img: coin2,
    title: `${t(messages.instantloan())}`,
    content: `${t(messages.instantloanDes())}`,
  };
  //call API Borrow
  const history = useHistory();
  const [listApiData, setListApiData] = useState<any>([]);
  const param = queryString.parse(history.location.search);
  useEffect(() => {
    searchApi.getPersonalLending(param).then((res: any) => {
      setListApiData(res.data);
    });
  }, []);
  return (
    <ViewOption>
      <TextResults>
        {total} {t(messages.findPakege())}
      </TextResults>
      <SuggesItems img="" title="" content="" />
      <ViewAllLending>
        <Lending>{t(messages.personalLending())}</Lending>
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
