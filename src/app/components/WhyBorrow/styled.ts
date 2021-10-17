import styled from 'styled-components/macro';
export const ViewInfor = styled.div`
  width: 100%;
  height: auto;
  background: #171a23;
`;
export const BorrowCard = styled.div`
  //margin: 60px auto 100px auto;
`;
export const Text = styled.div`
  max-width: 411px;
  font-weight: 600;
  font-size: 36px;
  line-height: 44px;
  align-items: center;
  text-align: center;
  color: #dba83d;
  margin: 0 auto;
  padding-top: 60px;
  padding-bottom: 100px;
  @media (max-width: 425px) {
    font-size: 24px;
    line-height: 29px;
    padding-top: 40px;
    padding-bottom: 48px;
  }
`;
export const ListBorrow = styled.div`
  display: flex;
  align-items: baseline;
  max-width: 1324px;
  margin: 0 auto;
  padding-bottom: 80px;
  justify-content: space-between;
  @media (max-width: 768px) {
    justify-content: center;
    flex-wrap: wrap;
    row-gap: 40px;
    padding-bottom: 50px;
  }
`;
