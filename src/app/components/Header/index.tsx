import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { authApiInfo } from 'api/authApi';
import LOGO from 'assets/Image/Logo.png';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ButtomBase, Flex, GropButtom, LinkButtom } from '../rootStyled';
import LoginSuccess from './LoginSucces';
import { useHistory } from 'react-router';
import {
  Arrow,
  HeaderNav,
  Headers,
  Info,
  Logo,
  MenuDesktop,
  MenuMobile,
  NavMobile,
  Toggle,
} from './styles';

import { messages } from './messages';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { loginAction } from 'app/pages/Auth/loginSlice';
const Header = props => {
  const { t } = useTranslation();
  const [user, setUser] = useState<any>();
  const token = localStorage.getItem('access_token');
  useEffect(() => {
    if (localStorage.getItem('access_token')) {
      authApiInfo.getUser(token).then((res: any) => setUser(res.data));
    }
  }, [token]);

  const [isToggle, setIsToggle] = useState(false);

  const handleClickToggle = () => {
    setIsToggle(!isToggle);
  };

  const [statusMenuMobile, setstatusMenuMobile] = useState({
    Myaccount: false,
    BorrowerProfile: false,
    LenderProfile: false,
    NFT: false,
  });

  const openDownMenuMobile = value => {
    switch (value) {
      case 'Myaccount':
        setstatusMenuMobile({
          ...statusMenuMobile,
          Myaccount: !statusMenuMobile.Myaccount,
        });
        break;
      case 'BorrowerProfile':
        setstatusMenuMobile({
          ...statusMenuMobile,
          BorrowerProfile: !statusMenuMobile.BorrowerProfile,
        });
        break;
      case 'LenderProfile':
        setstatusMenuMobile({
          ...statusMenuMobile,
          LenderProfile: !statusMenuMobile.LenderProfile,
        });
        break;
      case 'NFT':
        setstatusMenuMobile({
          ...statusMenuMobile,
          NFT: !statusMenuMobile.NFT,
        });
        break;
      default:
        break;
    }
  };
  const history = useHistory();
  const dispatch = useDispatch();
  const handleLogoutMB = () => {
    dispatch(loginAction.logout());
    history.push('/pawn');
    alert('logout success');
  };
  return (
    <Headers>
      <Flex
        style={{ height: '100%' }}
        justifyContent="space-between"
        alignItem="center"
      >
        <Logo to="/pawn">
          <img src={LOGO} alt="Defi for you" />
        </Logo>
        <Flex
          justifyContent="space-between"
          alignItem="center"
          flexXl="flex-end"
          flexgrow={1}
        >
          <MenuDesktop>
            <li className={'active'}>
              <Link to="/pawn">{t(messages.navPawn())}</Link>
            </li>
            <li>
              <Link to="/">{t(messages.navBorrow())}</Link>
            </li>
            <li>
              <Link to="/">{t(messages.navLend())}</Link>
            </li>
            <li>
              <Link to="/">{t(messages.navNTF())}</Link>
            </li>
            <li>
              <Link to="/">{t(messages.navMyaccount())}</Link>
            </li>
            <li>
              <Link to="/">{t(messages.navFAQ())}</Link>
            </li>
          </MenuDesktop>
          <GropButtom>
            <LinkButtom className="btn" bg="dba83d">
              <Link to="/">{t(messages.become())}</Link>
            </LinkButtom>
            <LinkButtom className="btn" outlinebutton="dba83d">
              <Link to="/">{t(messages.buy())}</Link>
            </LinkButtom>
            <LinkButtom className="show-btn btn" outlinebutton="dba83d">
              <Link to="/">{t(messages.connect())}</Link>
            </LinkButtom>
            {localStorage.getItem('access_token') ? (
              <div
                style={{
                  display: 'inline-block',
                  position: 'relative',
                  zIndex: 3,
                }}
              >
                <LoginSuccess screen="desktop" name={user?.name} />
              </div>
            ) : (
              <LinkButtom className="btn" outlinebutton="dba83d">
                <Link to="/login?tab=2">{t(messages.login())}</Link>
              </LinkButtom>
            )}
          </GropButtom>
          <Toggle
            onClick={() => {
              handleClickToggle();
            }}
          >
            {isToggle ? (
              <CloseIcon style={{ cursor: 'pointer' }} />
            ) : (
              <MenuIcon style={{ cursor: 'pointer' }} />
            )}
          </Toggle>
        </Flex>
      </Flex>
      <NavMobile isToggle={isToggle}>
        <div>
          <MenuMobile>
            <HeaderNav>
              {localStorage.getItem('access_token') ? (
                <Info className="mobile">
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
                  <span>{user?.name}</span>
                </Info>
              ) : (
                <ButtomBase
                  style={{ padding: '5px 10px' }}
                  className="btn"
                  outlinebutton="dba83d"
                >
                  <Link style={{ padding: '0' }} to="/login?tab=2">
                    Login
                  </Link>
                </ButtomBase>
              )}
            </HeaderNav>
            <li>
              <Link to="/pawn">Pawn</Link>
            </li>
            <li>
              <Link to="/">Staking</Link>
            </li>
            <li>
              <Link to="/">NFT</Link>
            </li>
            <li
              className={`parent ${statusMenuMobile.Myaccount ? 'active' : ''}`}
            >
              <Link to="#" onClick={() => openDownMenuMobile('Myaccount')}>
                My account
              </Link>
              {statusMenuMobile.Myaccount ? (
                <MenuMobile>
                  <li
                    className={`parent ${
                      statusMenuMobile.BorrowerProfile ? 'active' : ''
                    }`}
                  >
                    <Link
                      to="#"
                      onClick={() => openDownMenuMobile('BorrowerProfile')}
                    >
                      Borrower Profile
                    </Link>
                    {statusMenuMobile.BorrowerProfile ? (
                      <MenuMobile>
                        <li>
                          <Link to="/">Collateral</Link>
                        </li>
                        <li>
                          <Link to="/">Contracts</Link>
                        </li>
                      </MenuMobile>
                    ) : (
                      ''
                    )}
                    <Arrow />
                  </li>
                  <li
                    className={`parent ${
                      statusMenuMobile.LenderProfile ? 'active' : ''
                    }`}
                  >
                    <Link
                      to="#"
                      onClick={() => openDownMenuMobile('LenderProfile')}
                    >
                      Lender Profile
                    </Link>
                    {statusMenuMobile.LenderProfile ? (
                      <MenuMobile>
                        <li>
                          <Link to="/">Offers sent</Link>
                        </li>
                        <li>
                          <Link to="/">Contracts</Link>
                        </li>
                        <li>
                          <Link to="/">Pawnshop Loan Packages</Link>
                        </li>
                        <li>
                          <Link to="/">Loan requests</Link>
                        </li>
                      </MenuMobile>
                    ) : (
                      ''
                    )}
                    <Arrow />
                  </li>
                  <li>
                    <Link to="/">Staking</Link>
                  </li>
                  <li
                    className={`parent ${statusMenuMobile.NFT ? 'active' : ''}`}
                  >
                    <Link to="#" onClick={() => openDownMenuMobile('NFT')}>
                      NFT
                    </Link>
                    {statusMenuMobile.NFT ? (
                      <MenuMobile>
                        <li>
                          <Link to="/">NFT List</Link>
                        </li>
                        <li>
                          <Link to="/">NFT Auction</Link>
                        </li>
                      </MenuMobile>
                    ) : (
                      ''
                    )}
                    <Arrow />
                  </li>
                </MenuMobile>
              ) : (
                ''
              )}
              <Arrow />
            </li>
            <li>
              <Link to="/">FAQ</Link>
            </li>
            <li>
              <Link to="/">Change password</Link>
            </li>
            <li>
              <Link to="/" onClick={handleLogoutMB}>
                Log out
              </Link>
            </li>
          </MenuMobile>
        </div>
      </NavMobile>
    </Headers>
  );
};

export default Header;
