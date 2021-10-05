import Banner from 'app/components/Banner/Banner';
import Footer from 'app/components/Footer/Footer';
import Header from 'app/components/Header';
import * as React from 'react';
import { Brrow } from '../Brrow';

export function HomePage() {
  return (
    <>
      <Header />
      <Brrow />
      <Banner />
      <Footer />
    </>
  );
}
