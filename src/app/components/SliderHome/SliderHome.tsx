import React from 'react';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import arrow from '../../../images/imagebutton/arrow.png';
import slider1 from '../../../images/imageslider/slider1.png';
import slider2 from '../../../images/imageslider/slider2.png';
import slider3 from '../../../images/imageslider/slider3.png';
import { messages } from './messages';
import SliderItem from './SliderItem';
import { ClickAll, ListSliderPC, SliderHome, Text } from './styled';
export default function ListSilder() {
  const { t } = useTranslation();
  const listImg = [
    {
      id: 1,
      image: slider1,
      title: 'Pawnshop America',
      content: 'Lorem ipsum dolor sit amet',
    },
    {
      id: 2,
      image: slider2,
      title: 'Pawnshop America',
      content: 'Lorem ipsum dolor sit amet',
    },
    {
      id: 3,
      image: slider3,
      title: 'Pawnshop America',
      content: 'Lorem ipsum dolor sit amet',
    },
    {
      id: 4,
      image: slider3,
      title: 'Pawnshop America',
      content: 'Lorem ipsum dolor sit amet',
    },
  ];
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 330,
        settings: {
          arrow: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  const renderSlider = listImg.map(item => {
    return (
      <SliderItem
        key={item.id}
        image={item.image}
        title={item.title}
        content={item.content}
      />
    );
  });
  return (
    <SliderHome>
      <Text>{t(messages.title())}</Text>

      <ListSliderPC className="viewPc">
        <ClickAll>
          See all
          <img src={arrow} alt="arrow" className="Image" />
        </ClickAll>
        <Slider {...settings}>{renderSlider}</Slider>
      </ListSliderPC>
    </SliderHome>
  );
}
