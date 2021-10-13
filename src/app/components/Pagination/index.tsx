import * as React from 'react';
import { Link, Route } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import queryString from 'query-string';
import { useHistory } from 'react-router';
interface props {
  length?: number;
}

const Paginations = (props: props) => {
  const history = useHistory();
  const param = queryString.parse(history.location.search);
  if ('page' in param) {
    console.log('alo');
  } else {
  }
  const { length } = props;
  return (
    <Route>
      {({ location }) => {
        const query = new URLSearchParams(location.search);
        const page = parseInt(query.get('page') || '1', 10);

        return (
          <Pagination
            sx={{
              '.MuiPagination-ul': {
                justifyContent: 'center',
              },
            }}
            page={page}
            count={length}
            variant="outlined"
            shape="rounded"
            siblingCount={0}
            renderItem={item => (
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
                component={Link}
                to={`${window.location.pathname}${history.location.search}${
                  item.page === 1 ? '' : `?page=${item.page - 1}`
                }`}
                {...item}
              ></PaginationItem>
            )}
          />
        );
      }}
    </Route>
  );
};

export default Paginations;
