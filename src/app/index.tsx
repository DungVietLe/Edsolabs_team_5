/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { GlobalStyle } from 'styles/global-styles';
import './App.css';
import { NotFoundPage } from './components/NotFoundPage/Loadable';
import { Login } from './pages/Auth/Login/Login';
import { HomePage } from './pages/HomePage';
import { ResultOfferCrypto } from './pages/ResultOfferCrypto/ResultOfferCrypto';

export function App() {
  const { i18n } = useTranslation();
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - React Boilerplate"
        defaultTitle="DeFi For You | DeFi For You UK"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>
      <Switch>
        <Route exact path="/pawn" component={HomePage}></Route>
        <Route exact path="/pawn/offer" component={ResultOfferCrypto}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}
