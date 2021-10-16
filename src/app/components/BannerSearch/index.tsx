import React from 'react';
import Typewriter from 'typewriter-effect';
import { TitleTypewriter } from '../rootStyled';
import BANNER_IMG from 'assets/Image/Frame.png';
import { ItemBanner } from './styles';
import { messages } from './messages';
import { useTranslation } from 'react-i18next';
const BannerSearch = props => {
  const { t } = useTranslation();
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
        <p>{t(messages.herodes())}</p>
      </div>
      <img src={BANNER_IMG} alt="" />
    </ItemBanner>
  );
};

export default BannerSearch;
