import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from '../rootStyled';
import LOGO from 'assets/Image/Logo.png';
import { Logo } from './styles';

const Header = props => {
  return (
    <header>
      <Flex justifyContent="space-between" alignItem="center" gap={0}>
        <Logo to="/">
          <img src={LOGO} alt="Defi for you" />
        </Logo>
      </Flex>
      <Flex justifyContent="space-between" alignItem="center" gap={0}></Flex>
    </header>
  );
};

Header.propTypes = {};

export default Header;
