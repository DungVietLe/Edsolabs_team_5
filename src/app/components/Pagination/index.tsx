import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import * as React from 'react';
import { Route } from 'react-router-dom';
import { useHistory } from 'react-router';
interface props {
  length?: number;
  page?: number;
}

const Paginations = (props: props) => {
  const { length, page } = props;
  const history = useHistory();
  const handlePagination = (e: string) => {
    const param = new URL(window.location.href);
    const search_param = param.searchParams;
    search_param.set('page', `${Number(e) - 1}`);
    param.search = search_param.toString();
    const new_url = param.search.toString();

    history.push({ pathname: '', search: new_url });
  };
  // const newPage = Number(page) + 1;
  type integer = number;
  const setInt = (number: integer) => {
    return number;
  };

  const newPage = setInt((page ? page : 0) + 1);

  return (
    <Route>
      {({ location }) => {
        return (
          <Pagination
            sx={{
              '.MuiPagination-ul': {
                justifyContent: 'center',
                columnGap: '12px',
              },
              '.MuiButtonBase-root': {
                color: '#fff',
                border: '1px solid #fff',
                borderRadius: '4px',
              },
              '.Mui-selected': {
                border: '1px solid transparent',
              },
              'button.MuiButtonBase-root.Mui-disabled': {
                border: '1px solid #74767B',
                color: '#74767B',
              },
            }}
            page={newPage}
            count={length}
            variant="outlined"
            shape="rounded"
            siblingCount={0}
            renderItem={(item: any) => {
              return (
                <PaginationItem
                  sx={{
                    color: '#ffffff',
                    border: '1px solid #fff',
                    '&.MuiPaginationItem-ellipsis': {
                      border: '1px solid transparent',
                      marginTop: '-10px',
                      display: 'inline-block',
                    },
                    '&.Mui-selected': {
                      backgroundColor: '#DBA83D',
                      border: '1px solid transparent',
                      '&:hover': {
                        backgroundColor: '#DBA83D',
                      },
                    },
                  }}
                  {...item}
                  onClick={() => handlePagination(item.page)}
                ></PaginationItem>
              );
            }}
          />
        );
      }}
    </Route>
  );
};

export default Paginations;
