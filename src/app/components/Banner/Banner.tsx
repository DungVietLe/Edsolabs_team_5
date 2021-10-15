import React from 'react';
import { ButtomBase } from '../rootStyled';
import { Content, Pawn, Title, ViewBanner } from './styled';
import { messages } from './messages';
import { useTranslation } from 'react-i18next';

interface Props {}
const Banner = (props: Props) => {
  const { t } = useTranslation();
  return (
    <div>
      <Pawn>
        <ViewBanner>
          <Title>{t(messages.title())}</Title>
          <Content className="contentPc">{t(messages.content())}</Content>
          <Content className="contentMobi">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Content>
          <ButtomBase
            style={{ textTransform: 'none' }}
            className="btn banner"
            bg="dba83d"
          >
            {t(messages.learnMore())}
          </ButtomBase>
        </ViewBanner>
      </Pawn>
    </div>
  );
};

export default Banner;
