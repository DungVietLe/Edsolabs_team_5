import Button from '@mui/material/Button';
import { CollateralAccepted } from 'app/components/Filter/CollateralAccepted';
import { Duration } from 'app/components/Filter/Duration';
import { InterestRange } from 'app/components/Filter/InterestRange';
import { LoanToken } from 'app/components/Filter/LoanToken';
import { LoanType } from 'app/components/Filter/LoanType';
import { LoanValue } from 'app/components/Filter/LoanValue';
import { SearchPawnshops } from 'app/components/Filter/SearchPawnshops';
import * as React from 'react';
import filter from './filter.png';
import { BoxrightMobile, MySwipeableDrawer, Reset } from './styles';
type Anchor = 'right';

export default function FilterMobile() {
  const [state, setState] = React.useState({ right: false });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <BoxrightMobile>
      <Reset>Reset filter</Reset>
      <SearchPawnshops />
      <InterestRange />
      <LoanValue />
      <CollateralAccepted />
      <LoanToken />
      <LoanType />
      <Duration />
    </BoxrightMobile>
  );

  return (
    <div>
      {(['right'] as const).map(anchor => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <img src={filter} alt="filter" />
          </Button>
          <MySwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </MySwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
