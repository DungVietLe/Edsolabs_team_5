/* eslint-disable react-hooks/exhaustive-deps */
import Footer from 'app/components/Footer/Footer';
import Header from 'app/components/Header';
import Paginations from 'app/components/Pagination';
import { Flex } from 'app/components/rootStyled';
import React, { useState, useEffect } from 'react';
import { LoanToken } from 'app/components/Filter/LoanToken';
import { Duration } from 'app/components/Filter/Duration';
import { AssetType } from 'app/components/Filter/AssetType';
import { SearchPawnshops } from 'app/components/Filter/SearchPawnshops';
import filter from 'assets/Image/filter.png';
import {
  BoxLeft,
  Boxright,
  ContainerResult,
  WrapperResult,
  FlexColumn,
  Paragrap,
  BoxFlex,
  Reset,
  Close,
} from '../ResultStyles';
//import { FakeListItemSearchLendNFT } from 'api/fakeDataSerachListItem';
import { ItemShowLend } from 'app/components/ItemShow';
import { useHistory } from 'react-router';
import queryString from 'query-string';
import { searchApi } from 'api/searchApiHome';
import { HardNFT } from 'app/components/Filter/HardNFT';
import { messages } from '../../components/Filter/messages';
import { useTranslation } from 'react-i18next';
const ResultLend = () => {
  const { t } = useTranslation();
  const [status, setStatus] = useState(false);
  const handleShowFilter = () => {
    setStatus(!status);
  };
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
      .catch(error => {});
  }, [newUrl]);

  const [clear, setClear] = useState(false);
  const handleReserFilter = () => {
    history.push('/pawn/lender/nft-result?size=10&status=3&durationTypes=');
    setClear(!clear);
  };
  return (
    <div>
      <Header />
      <WrapperResult>
        <ContainerResult>
          <Flex gap={20} justifyContent="center" alignItem="flex-start">
            <BoxLeft>
              <div
                className="filter_result"
                style={{ textAlign: 'right', cursor: 'pointer' }}
              >
                <img src={filter} alt="acoin" onClick={handleShowFilter} />
              </div>
              <Paragrap>
                {listApiData?.total_elements} collateral offers match your
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
            <Boxright check={status} className={status ? 'active' : 'none'}>
              <BoxFlex>
                <Reset onClick={handleReserFilter}>{t(messages.reset())}</Reset>
                <Close
                  onClick={handleShowFilter}
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAI4SURBVHgBvVexbsIwED1nYAGpdGJMED9AZ5Z0gZV+AeJLWr6k8AVlhQX+oHRHIsDEVCrBwgC95zoomCR2U9InBQd8+N27nM8XQZZYLBZlHup8+Y7juKfTCd/LQojgeDwu+X7K16xarW5t1hMmAyYEUYeJ2iAyLihEnx3psQNBql0KIdS88m2bMsDkgEgg9RWpR39DwJF6YvKZPuHoPyyXyw6TTm5ACni81jvW1CcuFLPSOgwpB7DyR1Y+vSJmUu+GSuOAsD+EWX8ONWfuc46kgKfyRkIqVmoX9A8IQy4VK7WpmM/ntNvtEucPhwOtVisyATUBo1D79TPNeL1e02QyoVKpRM1mU45RwKHxeCzHRqNBtVotbbktq65CcZ0MqFQqVCwWLwjiSGEDWwNk6QWxb7IsFArUarWuyHVS2OjRSICPUPc51B0baxCMRiPa7/dnggykspw6/OGSJbBwVHkWUoBr+D1CbXWMaR7H3v/i/3cOZ9iX7R/0Z5qUcBbEARTPspAivHEJZwM0DlbESdmrP3PYoJBYYBoSpz7nzWaTmEg6OWwtMAtrtXFLoXqhOGBPxyEkNVQtuZVc1+2GxL46EnMHyiXaIXlIqAN6SDkDasMezIl40uUhoPyANrh3diI6k2fIVfdx3kEXzR5CrpTfmrSrd5pJ7S2avje6TXvbjTZ5IZw4a3iHFoWvAWXHUIV3Gjdp8wrj8fBieXRu2W7ISTRIIrQmjjigv7R5imjLRB/0UwGtX9q+AXoFYjqElBA4AAAAAElFTkSuQmCC"
                />
              </BoxFlex>
              <SearchPawnshops />
              <LoanToken checker={clear} />
              <HardNFT checker={clear} />
              <AssetType checker={clear} />
              <Duration checker={clear} />
            </Boxright>
          </Flex>
        </ContainerResult>
      </WrapperResult>
      <Footer />
    </div>
  );
};

export default ResultLend;
