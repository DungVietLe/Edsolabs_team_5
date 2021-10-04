import React from 'react';
import {
  DfyDecorator,
  MyAbouts,
  MyCompany,
  MyContainer,
  MyCoppyright,
  MyFooter,
  MyGrid,
  MyNavigation,
  MyOffice,
  MyQuicklink,
  MySocical,
  Subcontext,
} from './styled';
import logo from '../Logo/logo.svg';
import language from '../Logo/language.svg';
interface Props {}

const Footer = (props: Props) => {
  return (
    <div>
      <MyFooter>
        <MyNavigation>
          <DfyDecorator>DEFI FOR YOU</DfyDecorator>
          <MyContainer>
            <MyGrid>
              <MyCompany>
                <img src={logo} alt="logo" style={{ width: '14rem' }} />
                <img
                  src={language}
                  alt="language"
                  style={{ color: '#9FA6B2 !important' }}
                />
                <Subcontext>English (United States)-{'>'} </Subcontext>
              </MyCompany>
              <MyOffice></MyOffice>
              <MyAbouts></MyAbouts>
              <MyQuicklink></MyQuicklink>
              <MySocical></MySocical>
            </MyGrid>
          </MyContainer>
        </MyNavigation>
        <MyCoppyright>copyright</MyCoppyright>
      </MyFooter>
    </div>
  );
};

export default Footer;
