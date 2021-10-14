import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
export const WrapperSearchResult = styled.div`
  background: #171a23;
`;
export const Container = styled.div``;

export const Paragraph = styled.p`
  height: 24px;
  margin-top: 20px;
  margin-bottom: 20px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #d1d1d3;
`;
export const Table = styled.table`
  width: 100%;
  color: #fff;
  margin-bottom: 25px;
  border-collapse: collapse;
  overflow: hidden;
  border-radius: 10px 10px 0px 0px !important;
`;
export const Tr = styled.tr`
  height: 50px;
  background: #282c37;
  opacity: 0.5;
  font-weight: lighter;
`;

export const THeaderT = styled.th`
  width: 5%;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
`;
export const THeaderBorrow = styled.th`
  width: 30%;
  text-align: left;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
`;
export const THeaderColla = styled.th`
  width: 20%;
  text-align: left;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
`;
export const THeaderCurrency = styled.th`
  width: 15%;
  text-align: left;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
`;
export const THeaderDuration = styled.th`
  width: 12%;
  text-align: left;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
`;
export const THeaderButton = styled.th`
  width: 18%;
  text-align: left;
`;

export const Trow = styled.tr`
  height: 80px;
  line-height: 35px;
  font-size: 16px;
  background: #282c37;
`;
export const Td = styled.td`
  font-size: 14px;
  text-align: center;
  border-collapse: collapse;
  overflow: hidden;
  border-radius: 4px 0px 0px 0px !important;
`;
export const TdButton = styled.td`
  border-collapse: collapse;
  overflow: hidden;
  border-radius: 0px 4px 0px 0px !important;
`;
export const Tdborrow = styled.td``;
export const Banner = styled.tr`
  cursor: pointer;
`;

export const TdBanner = styled.td.attrs({
  colSpan: 6,
})``;
export const DivLender = styled.div`
  display: flex;
  max-width: 100%;
  align-items: center;
  color: #fff;
  margin: 12px 0;
  background: #475674;
  line-height: 35px;
  border-radius: 10px;
  padding: 12px 16px;
`;

export const DivTitle = styled.div`
  width: 80%;
`;
export const DivHero = styled.div`
  color: #f8b017;
  font-size: 24px;
  font-weight: 600;
`;
export const DivMini = styled.div`
  font-size: 16px;
  font-weight: 500;
`;
export const SpanMini = styled.span`
  color: #f8b017;
`;
export const DivImg = styled.div`
  width: 20%;
`;
export const Address = styled.div``;
export const LenderInfo = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  width: 55%;
  font-weight: 400;
  justify-content: space-between;
`;
export const A = styled(Link)<{ to: any }>`
  color: #2596ff;
`;
export const LenderMount = styled.div``;
export const LenderArr = styled.div``;
export const LenderConstract = styled.div``;
export const Img = styled.div`
  margin-bottom: 5px;
`;
export const Icon = styled.div``;
export const TdCol = styled.td``;
export const Token = styled.div`
  display: flex;
  align-items: center;
`;
export const Text = styled.div`
  font-size: 16px;
  margin-left: 15px;
  font-weight: 500;
`;
export const TextMonth = styled.div`
  font-size: 16px;
  font-weight: 500;
`;
export const Button = styled.button`
  display: flex;
  color: #282c37;
  font-weight: 500;
  font-size: 14px;
  border: none;
  cursor: pointer;
  margin-left: 30px;
  align-items: center;
  padding: 9px 20px;
  height: 36px;
  background: linear-gradient(
    221.15deg,
    #bd8727 0%,
    #ffd574 49.02%,
    #feca50 62.02%,
    #bd8727 101.47%
  );
  border-radius: 25px;
`;
