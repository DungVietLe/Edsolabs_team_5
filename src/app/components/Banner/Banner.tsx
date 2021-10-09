import React from 'react';
import { ButtomBase } from '../rootStyled';
import { Content, Pawn, Title, ViewBanner } from './styled';
interface Props {}
const Banner = (props: Props) => {
  return (
    <div>
      <Pawn>
        <ViewBanner>
          <Title>Become a Pawnshop</Title>
          <Content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Content>
          <ButtomBase
            style={{ textTransform: 'capitalize' }}
            className="btn banner"
            bg="dba83d"
          >
            Learn more
          </ButtomBase>
        </ViewBanner>
      </Pawn>
    </div>
  );
};

export default Banner;
