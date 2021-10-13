import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { ItemShowBorrow } from 'app/components/ItemShow';
import React, { useState } from 'react';
import { FlexColumn } from '../../ResultStyles';
import {
  ButtonSort,
  Content,
  GropButtonSort,
  HeaderContent,
  WrapperListItem,
} from './styles';

const ListItemBorrow = (props: any) => {
  const data = props.listApiData.content;

  const [isActiveSort, setIsActiveSort] = useState('');

  const handleClickActiveSort = (e: React.MouseEvent<HTMLButtonElement>) => {
    const name = e.currentTarget.name as string;
    setIsActiveSort(name);
  };
  const ListItem = data?.map((item, index) => (
    <ItemShowBorrow key={index} item={item} />
  ));

  return (
    <WrapperListItem>
      <HeaderContent>
        <GropButtonSort>
          <ButtonSort
            name="interestRateBtn"
            onClick={handleClickActiveSort}
            className={isActiveSort === 'interestRateBtn' ? 'active' : ''}
          >
            <span>Interest rate</span>
            {isActiveSort === 'interestRateBtn' ? (
              <TrendingUpIcon />
            ) : (
              <TrendingDownIcon />
            )}
          </ButtonSort>
          <ButtonSort
            name="loanValueBtn"
            onClick={handleClickActiveSort}
            className={isActiveSort === 'loanValueBtn' ? 'active' : ''}
          >
            <span>Loan to Value</span>
            {isActiveSort === 'loanValueBtn' ? (
              <TrendingUpIcon />
            ) : (
              <TrendingDownIcon />
            )}
          </ButtonSort>
          <ButtonSort
            name="durationBtn"
            onClick={handleClickActiveSort}
            className={isActiveSort === 'durationBtn' ? 'active' : ''}
          >
            <span>Duration</span>
            {isActiveSort === 'durationBtn' ? (
              <TrendingUpIcon />
            ) : (
              <TrendingDownIcon />
            )}
          </ButtonSort>
          <ButtonSort
            name="limitation"
            onClick={handleClickActiveSort}
            className={isActiveSort === 'limitation' ? 'active' : ''}
          >
            <span>Limitation</span>
            {isActiveSort === 'limitation' ? (
              <TrendingUpIcon />
            ) : (
              <TrendingDownIcon />
            )}
          </ButtonSort>
          <ButtonSort
            name="pawnshowBtn"
            onClick={handleClickActiveSort}
            className={isActiveSort === 'pawnshowBtn' ? 'active' : ''}
          >
            <span>Pawnshop rating</span>
            {isActiveSort === 'pawnshowBtn' ? (
              <TrendingUpIcon />
            ) : (
              <TrendingDownIcon />
            )}
          </ButtonSort>
        </GropButtonSort>
      </HeaderContent>
      <Content>
        <FlexColumn>{ListItem}</FlexColumn>
      </Content>
    </WrapperListItem>
  );
};

export default ListItemBorrow;
