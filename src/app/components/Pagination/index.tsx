import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import * as React from 'react';
import { Route } from 'react-router-dom';
import { useHistory } from 'react-router';
interface props {
  length?: number;
  page?: any;
}

const Paginations = (props: props) => {
  const { length, page } = props;
  console.log(page);
  const history = useHistory();
  const handlePagination = (e: string) => {
    const param = new URL(window.location.href);
    const search_param = param.searchParams;
    search_param.set('page', `${Number(e) - 1}`);
    param.search = search_param.toString();
    const new_url = param.search.toString();

    history.push({ pathname: '', search: new_url });
  };

  return (
    <Route>
      {({ location }) => {
        return (
          <Pagination
            sx={{
              '.MuiPagination-ul': {
                justifyContent: 'center',
              },
            }}
            page={Number(Math.floor(page) + 1)}
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
