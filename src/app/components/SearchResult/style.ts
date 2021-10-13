import styled from 'styled-components/macro';

export const WrapperSearchResult = styled.div`
  background: #171a23;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 988px;
  margin: 0 auto;
  padding-top: 30px;
`;

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
  height: 50px;
  line-height: 50px;
  position: relative;
  background: #282c37;
  opacity: 0.5;
  border-radius: 10px 10px 0px 0px;
`;
export const Thang = styled.th`
  position: absolute;
  left: 30px;
  width: 11px;
  height: 17px;
  font-weight: 600;
  font-size: 14px;
  color: #ffffff;
`;
export const Borrower = styled.th`
  position: absolute;
  width: 68px;
  height: 17px;
  left: 90px;
  font-weight: 600;
  font-size: 14px;
  color: #ffffff;
`;
export const Collateral = styled.th`
  position: absolute;
  width: 69px;
  height: 17px;
  left: 320px;
  font-weight: 600;
  font-size: 14px;
  color: #ffffff;
`;
export const Loancurrency = styled.th`
  position: absolute;
  width: 105px;
  height: 17px;
  left: 550px;
  font-weight: 600;
  font-size: 14px;
  color: #ffffff;
`;
export const Duration = styled.th`
  position: absolute;
  width: 65px;
  height: 17px;
  left: 730px;
  font-weight: 600;
  font-size: 14px;

  color: #ffffff;
`;
export const TableContent = styled.tr`
  max-width: 1011px;
  display: flex;
  justify-content: space-around;
  margin-bottom: 4px;
  position: relative;
  line-height: 80px;
  height: 80px;
  background: #282c37;
  border-radius: 4px 4px 0px 0px;
`;
export const Quantity = styled.td`
  position: absolute;
  left: 3.2%;
  top: 40%;
  bottom: 38.75%;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;
`;
export const BorrowerFlex = styled.td`
  display: flex;
  flex-direction: column;
`;
export const BorrowerLink = styled.td`
  position: absolute;
  left: 9%;
  top: 18%;
  bottom: 50%;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: center;
  text-decoration-line: underline;
  color: #2596ff;
`;
export const Contracts = styled.td`
  position: absolute;
  left: 2%;
  width: 100%;
  right: 73.69%;
  top: 58.75%;
  bottom: 20%;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;
`;
export const ContractsStar = styled.h3`
  position: absolute;
  left: 6.73%;
  right: 91.59%;
`;
export const ContractsNghin = styled.h3`
  position: absolute;
  left: 9.4%;
  right: 86.45%;
  top: 58.75%;
  bottom: 20%;
  font-size: 14px;
  line-height: 17px;

  display: flex;
  align-items: center;

  color: #ffffff;
`;
export const ContractsTram = styled.h3`
  position: absolute;
  left: 13.75%;
  right: 73.69%;
  top: 58.75%;
  bottom: 20%;
  font-size: 14px;
  line-height: 17px;

  display: flex;
  align-items: center;

  color: #ffffff;
`;
export const Collaterale = styled.td``;
export const CollateraleImg = styled.h3`
  position: absolute;
  left: 31.85%;
  right: 65.78%;
`;
export const CollateraleText = styled.h3`
  position: absolute;
  left: 35.41%;
  right: 58.95%;
  top: 38.5%;
  bottom: 38.5%;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;

  color: #ffffff;
`;
export const CurrencyIn = styled.td``;
export const CurrencyImg = styled.h3`
  position: absolute;
  left: 56%;
`;
export const CurrencyText = styled.h3`
  position: absolute;
  left: 59.41%;
  top: 4%;
  bottom: 4%;
  font-weight: 500;
  font-size: 16px;

  color: #ffffff;
`;
export const DurationIn = styled.td`
  position: absolute;
  left: 74.3%;
  top: 39%;
  bottom: 39%;
  display: flex;
  flex-direction: row;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
`;
export const SendOffcer = styled.td``;
export const SendOffcerButton = styled.button`
  display: flex;
  align-items: center;
  width: 116px;
  padding: 10px 20px;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  position: absolute;
  left: 85.46%;
  right: 3.07%;
  top: 25.5%;
  bottom: 25.5%;
  border: none;
  background: linear-gradient(
    221.15deg,
    #bd8727 0%,
    #ffd574 49.02%,
    #feca50 62.02%,
    #bd8727 101.47%
  );
  border-radius: 25px;
  cursor: pointer;
`;
export const Bank = styled.div`
  max-width: 1011px;
  height: 90px;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 14px;
  padding-left: 32px;
  padding-right: 32px;
  align-items: center;
  background: #475674;
  border-radius: 10px;
`;
export const BankLeft = styled.div`
  display: flex;
  flex-direction: column;
`;
export const BankBefore = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: #f8b017;
`;
export const BankUnder = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
`;
export const BankRight = styled.div``;
export const BankYellow = styled.span`
  color: #f8b017;
`;
export const Pagination = styled.div`
  display: flex;
  margin: 40px auto;
  width: 208px;
  justify-content: space-between;
  height: 32px;
`;
export const Arrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: 1px solid #74767b;
  box-sizing: border-box;
  border-radius: 4px;
  &:hover {
    cursor: pointer;
    background: #dba83d;
  }
`;

export const Page = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: 1px solid #d1d1d3;
  box-sizing: border-box;
  border-radius: 4px;
  cursor: pointer;
  color: #ffffff;

  &:hover {
    background: #dba83d;
    color: black;
  }
`;
