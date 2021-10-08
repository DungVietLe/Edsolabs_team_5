import styled from 'styled-components/macro';
export const SliderHome = styled.div`
  background: rgba(35, 39, 50, 1);
  width: 100%;
  @media (min-width: 1440px) {
    padding: 60px 174px 80px 174px;
  }
`;
export const Text = styled.div`
  max-width: 543px;
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 44px;
  display: flex;
  margin: 0 auto;
  padding-top: 60px;
  padding-bottom: 100px;
  text-transform: capitalize;
  color: #dba83d;
  text-align: center;
  @media (max-width: 600px) {
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    display: flex;
    text-align: center;
    max-width: 236px;
    padding-top: 40px;
    padding-bottom: 30px;
  }
`;
//ClickAll
export const ClickAll = styled.div`
  width: 69px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #ffffff;
  margin: 0 0 0 auto;
  padding-bottom: 12px;
  @media (min-width: 320px) and (max-width: 1024px) {
    visibility: hidden;
  }
  .Image {
    width: 10px;
    margin-left: 6px;
  }
`;

//ListSlider
export const ListSliderPC = styled.div`
  max-width: 1340px;
  margin: 0 auto;

  @media (max-width: 620px) {
    max-width: 350px;
    margin-top: -30px;
  }
  @media (min-width: 620px) and (max-width: 1028px) {
    max-width: 448px;
  }
  @media (min-width: 1028px) and (max-width: 1080px) {
    max-width: 600px;
    //margin: 0 auto;
  }
  @media (min-width: 1080px) and (max-width: 1600px) {
    max-width: 880px;
  }
  .slick-arrow {
    top: 33% !important;
    z-index: 2;
    &::before {
      color: #dba83d;
      font-size: 60px;
      font-weight: bold;
      @media (max-width: 375px) {
        font-size: 20px;
      }
      @media (min-width: 375px) and (max-width: 620px) {
        font-size: 30px;
      }
    }
  }
  .slick-next {
    right: -48px;
    position: absolute;

    @media (max-width: 620px) {
      right: 6px;
    }
  }
  .slick-prev {
    position: absolute;
    left: -80px;

    @media (max-width: 620px) {
      left: 2.5px;
    }
  }
`;
