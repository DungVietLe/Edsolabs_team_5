import Banner from 'app/components/Banner/Banner';
import Footer from 'app/components/Footer/Footer';
import Header from 'app/components/Header';
import SearchBorrow from 'app/components/SearchBorrow';
import SliderHome from 'app/components/SliderHome/SliderHome';
import Terms from 'app/components/Terms';
import ViewBorrow from 'app/components/WhyBorrow/ViewBrrow';

export function HomePage() {
  return (
    <>
      <Header />
      <SearchBorrow />
      <ViewBorrow />
      <SliderHome />
      <Banner />
      <Footer />
      <Terms />
    </>
  );
}
