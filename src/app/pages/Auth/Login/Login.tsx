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
import { messages } from '../messages';
import { useTranslation } from 'react-i18next';
export const Login = props => {
  const { t } = useTranslation();
  return (
    <div>
      <Header />
      <ContainerAuth>
        <Container>
          <TitleAuth>
            {t(messages.title1())}
            <span>{t(messages.title2())}</span>
          </TitleAuth>
          <NtfTitle sz="20px">
            {t(messages.des1())} <span>01/08/2021</span> {t(messages.des3())}{' '}
            <span>31/12/2021</span> {t(messages.des5())}
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
