import { Grid } from '@mui/material';
import Footer from 'app/components/Footer/Footer';
import Header from 'app/components/Header';
import React from 'react';
import LoginIMG from '../../../../images/Login/imgLogin.png';
import {
  Container,
  ContainerAuth,
  MyGridLog1,
  MyGridLog2,
  MyImg,
  NtfTitle,
  TitleAuth,
} from '../stylesForAuth';
import Form from './Form';
export const Login = props => {
  return (
    <div>
      <Header />
      <ContainerAuth>
        <Container>
          <TitleAuth>
            Exclusive on <span>DeFi For You!</span>
          </TitleAuth>
          <NtfTitle sz="20px">
            Register new DeFi For You account from <span>01/08/2021</span> to{' '}
            <span>31/12/2021</span> to have 100% chance of receiving DFY tokens
          </NtfTitle>
          <Grid container spacing={1}>
            <MyGridLog1 item xs={12} md={6} od={2}>
              <Form />
            </MyGridLog1>
            <MyGridLog2 item xs={12} md={6} od={1}>
              <MyImg src={LoginIMG} alt="imgLogin" />
            </MyGridLog2>
          </Grid>
        </Container>
      </ContainerAuth>
      <Footer />
    </div>
  );
};
