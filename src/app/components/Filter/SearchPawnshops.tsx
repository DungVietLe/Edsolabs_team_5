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
          fill="currentColor"
          className="bi bi-search"
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
      </IconSearch>
    </FormSearch>
  );
};
