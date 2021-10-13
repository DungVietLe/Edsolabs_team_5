import * as React from 'react';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import { useDispatch } from 'react-redux';
import { loginAction } from 'app/pages/Auth/loginSlice';
import { useHistory } from 'react-router';
import { Info, NewButton } from './styles';
interface MyUser {
  name: string;
  screen?: string;
}
export default function LoginSuccess(props: MyUser) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }
    setOpen(false);
  };

  const handleLogout = (event: Event | React.SyntheticEvent) => {
    handleClose(event);
    dispatch(loginAction.logout());
    history.push('/pawn');
    alert('logout success');
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <Stack
      sx={{
        zIndex: '2',
      }}
      direction="row"
      spacing={2}
    >
      <div>
        <NewButton
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? 'composition-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <Info
            className={
              props.screen === 'desktop'
                ? 'desktop'
                : props.screen === 'mobile'
                ? 'mobile'
                : ''
            }
          >
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30 0C13.5 0 0 13.5 0 30C0 46.5 13.5 60 30 60C46.5 60 60 46.5 60 30C60 13.5 46.5 0 30 0ZM30 9C35.1 9 39 12.9 39 18C39 23.1 35.1 27 30 27C24.9 27 21 23.1 21 18C21 12.9 24.9 9 30 9ZM30 51.6C22.5 51.6 15.9 47.7001 12 42C12 36 24 32.7 30 32.7C36 32.7 48 36 48 42C44.1 47.7 37.5 51.6 30 51.6Z"
                fill="white"
              />
            </svg>
            <span>{props.name}</span>
          </Info>
        </NewButton>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom-start' ? 'left top' : 'left bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    sx={{
                      color: '#fff',
                      backgroundColor: 'rgb(62, 65, 75)',
                      borderColor: 'rgb(62, 65, 75)',
                      '.MuiMenuItem-root': {
                        fontFamily: 'Montserrat !important',
                      },
                    }}
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem onClick={handleClose}>Change Password</MenuItem>
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </Stack>
  );
}
