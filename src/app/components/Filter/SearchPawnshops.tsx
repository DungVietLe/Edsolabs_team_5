/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';

import { useHistory } from 'react-router';
import { FormSearch, IconSearch, MyInput } from './rootStylesFilter';
interface Props {}

export const SearchPawnshops = (props: Props) => {
  const history = useHistory();
  const [value, setValue] = useState<any>();
  const handleValueInput = e => {
    setTimeout(() => {
      setValue(e.target.value);
    }, 500);
  };
  useEffect(() => {
    const param = new URL(window.location.href);
    const search_param = param.searchParams;
    param.search = search_param.toString();
    if (value !== undefined) {
      search_param.set('name', value);
    }
    const new_url = param.search.toString();
    history.push({
      pathname: history.location.pathname,
      search: new_url,
    });
  }, [value]);
  return (
    <FormSearch>
      <MyInput placeholder="Search pawnshops" onChange={handleValueInput} />
      <IconSearch>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z"
            stroke="#A2A3A7"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13.9996 14.0016L11.0996 11.1016"
            stroke="#A2A3A7"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </IconSearch>
    </FormSearch>
  );
};
