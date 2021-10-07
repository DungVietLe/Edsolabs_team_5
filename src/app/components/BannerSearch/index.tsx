import React from 'react';
import Typewriter from 'typewriter-effect';
import { TitleTypewriter } from '../rootStyled';
import BANNER_IMG from 'assets/Image/Frame.png';
import { ItemBanner } from './styles';

const BannerSearch = props => {
  return (
    <ItemBanner>
      <div className="caption-zone">
        <TitleTypewriter>
          <span>
            <Typewriter
              options={{
                strings: ['Lend', 'Borrow'],
                autoStart: true,
                cursor: ' ',
                loop: true,
              }}
            />
            with
          </span>
          DeFi Fou You.
        </TitleTypewriter>
        <p>Get Crypto Loans Instantly, Regardless of Your Credit Rating</p>
      </div>
      <img src={BANNER_IMG} alt="" />
    </ItemBanner>
  );
};

export default BannerSearch;
