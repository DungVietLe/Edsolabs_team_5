import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { ItemShowBorrow } from 'app/components/ItemShow';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { FlexColumn } from '../../ResultStyles';
import { messages } from '../messages';
import { useTranslation } from 'react-i18next';
import {
  ButtonSort,
  Content,
  GropButtonSort,
  HeaderContent,
  WrapperListItem,
} from './styles';

const ListItemBorrow = (props: any) => {
  const { t } = useTranslation();
  const data = props.listApiData.content;
  const history = useHistory();
  const [param, setParam] = useState<any>({
    cusSort: '',
  });
  const [isActiveSort, setIsActiveSort] = useState('');
  const [checked, setChecked] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  const [checked5, setChecked5] = useState(false);

  const paramxxxx = new URL(window.location.href);
  const search_param = paramxxxx.searchParams;
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const name = e.currentTarget.name as string;
    if (name === 'interest') {
      setIsActiveSort('interest');
      setChecked(!checked);
      setParam({
        ...param,
        cusSort: `${name},${checked ? 'desc' : 'asc'}`,
      });
      search_param.set('cusSort', param.cusSort);
      paramxxxx.search = search_param.toString();
      const new_url = paramxxxx.search.toString();

      history.push({ pathname: '', search: new_url });
    }
    if (name === 'loanToValue') {
      setIsActiveSort('loanToValue');
      setChecked2(!checked2);
      setParam({
        ...param,
        cusSort: `${name},${checked2 ? 'desc' : 'asc'}`,
      });
      search_param.set('cusSort', param.cusSort);
      paramxxxx.search = search_param.toString();
      const new_url = paramxxxx.search.toString();

      history.push({ pathname: '', search: new_url });
    }
    if (name === 'durationQty') {
      setIsActiveSort('durationQty');
      setChecked3(!checked3);
      setParam({
        ...param,
        cusSort: `${name},${checked3 ? 'desc' : 'asc'}`,
      });
      search_param.set('cusSort', param.cusSort);
      paramxxxx.search = search_param.toString();
      const new_url = paramxxxx.search.toString();

      history.push({ pathname: '', search: new_url });
    }
    if (name === 'limitation') {
      setIsActiveSort('limitation');
      setChecked4(!checked4);
      setParam({
        ...param,
        cusSort: `${name},${checked4 ? 'desc' : 'asc'}`,
      });
      search_param.set('cusSort', param.cusSort);
      paramxxxx.search = search_param.toString();
      const new_url = paramxxxx.search.toString();

      history.push({ pathname: '', search: new_url });
    }
    if (name === 'reputation') {
      search_param.delete('cusSort');
      setIsActiveSort('reputation');
      setChecked5(!checked5);
      setParam({
        ...param,
        cusSort: `${name},${checked5 ? 'desc' : 'asc'}`,
      });
      search_param.set('cusSort', param.cusSort);
      paramxxxx.search = search_param.toString();
      const new_url = paramxxxx.search.toString();

      history.push({ pathname: '', search: new_url });
    }
  };
  const ListItem = data?.map((item, index) => (
    <ItemShowBorrow key={index} item={item} />
  ));

  return (
    <WrapperListItem>
      <HeaderContent>
        <GropButtonSort>
          <ButtonSort
            name="interest"
            onClick={handleClick}
            className={isActiveSort === 'interest' ? 'active' : ''}
          >
            <span>{t(messages.interestRate())}</span>
            {checked ? <TrendingUpIcon /> : <TrendingDownIcon />}
          </ButtonSort>
          <ButtonSort
            name="loanToValue"
            onClick={handleClick}
            className={isActiveSort === 'loanToValue' ? 'active' : ''}
          >
            <span>{t(messages.loantoValue())}</span>
            {checked2 ? <TrendingUpIcon /> : <TrendingDownIcon />}
          </ButtonSort>
          <ButtonSort
            name="durationQty"
            onClick={handleClick}
            className={isActiveSort === 'durationQty' ? 'active' : ''}
          >
            <span>{t(messages.duration())}</span>
            {checked3 ? <TrendingUpIcon /> : <TrendingDownIcon />}
          </ButtonSort>
          <ButtonSort
            name="limitation"
            onClick={handleClick}
            className={isActiveSort === 'limitation' ? 'active' : ''}
          >
            <span>{t(messages.limitation())}</span>
            {checked4 ? <TrendingUpIcon /> : <TrendingDownIcon />}
          </ButtonSort>
          <ButtonSort
            name="reputation"
            onClick={handleClick}
            className={isActiveSort === 'reputation' ? 'active' : ''}
          >
            <span>{t(messages.pawnshop())}</span>
            {checked5 ? <TrendingUpIcon /> : <TrendingDownIcon />}
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
