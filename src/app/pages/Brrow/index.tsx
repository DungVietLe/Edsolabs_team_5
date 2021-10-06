import { ReactComponent as Bank } from './icon/bank.svg';
import { ReactComponent as Rate } from './icon/rate.svg';
import { ReactComponent as Finance } from './icon/finance.svg';
import { ReactComponent as Credit } from './icon/credit.svg';
import styled from 'styled-components';
export function Brrow() {
  const Grid = styled.div`
    background-color: #171a23;
    padding: 60px 20px;
  `;

  const BoxTitle = styled.h3`
    color: #dba83d;
    font-size: 36px;
    margin-bottom: 100px;
    text-align: center;
    font-family: 'Montserrat';
    font-weight: 600;

    @media (max-width: 320px) {
      font-size: 20px;
      margin-bottom: 48px;
      font-weight: 600;
      line-height: 29px;
    }
  `;
  const BoxConTainer = styled.div`
    width: 100%;
    padding: 14px;
    margin-right: auto;
    margin-left: auto;

    @media (max-width: 480px) {
      padding: 0;
    }
  `;
  const BoxRow = styled.div`
    display: flex;
    flex-wrap: wrap;
  `;
  const BoxCol = styled.div`
    flex: 0 0 100%;
    max-width: 100%;

    @media (min-width: 960px) {
      flex: 0 0 25%;
      max-width: 25%;
    }
  `;
  const BoxCenter = styled.div`
    text-align: center;
    color: #fff;
    margin-bottom: 40px;

    @media (max-width: 480px) {
      margin-bottom: 50px;
      padding-top: 0;
      padding-bottom: 0;
    }
  `;
  const BoxShort = styled.div`
    @media (max-width: 320px) {
      text-align: left;
    }
  `;
  const BoxH3 = styled.h3`
    padding-left: 10px;
    font-size: 20px;
    margin-bottom: 20px;
    margin-top: 40px;
    font-weight: 600;
    font-family: 'Montserrat';

    @media (max-width: 320px) {
      font-size: 16px;
    }
    @media (max-width: 480px) {
      font-weight: 600;
      line-height: 22px;
      margin: 0 0 8px;
    }
  `;
  const BoxContent = styled.p`
    padding: 0px 89px;
    font-family: 'Montserrat';

    @media (max-width: 480px) {
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      padding: 0 !important;
    }
  `;

  return (
    <>
      <Grid>
        <BoxConTainer>
          <BoxTitle>Why borrow with us?</BoxTitle>
          <BoxRow>
            <BoxCol>
              <BoxCenter>
                <Bank />
                <BoxShort>
                  <BoxH3>Quicker than the bank</BoxH3>
                  <BoxContent>
                    Banks are yesterdays news. Get the money you need without
                    having to wait.
                  </BoxContent>
                </BoxShort>
              </BoxCenter>
            </BoxCol>
            <BoxCol>
              <BoxCenter>
                <Rate />
                <BoxShort>
                  <BoxH3>Better interest rates</BoxH3>
                  <BoxContent>
                    P2P lending lets you negotiate with the lender to arrange
                    the best possible interest rates.
                  </BoxContent>
                </BoxShort>
              </BoxCenter>
            </BoxCol>
            <BoxCol>
              <BoxCenter>
                <Finance />
                <BoxShort>
                  <BoxH3>Finance assets without selling</BoxH3>
                  <BoxContent>
                    Put your assets to work so you can continue to meet your
                    financial obligations.
                  </BoxContent>
                </BoxShort>
              </BoxCenter>
            </BoxCol>
            <BoxCol>
              <BoxCenter>
                <Credit />
                <BoxShort>
                  <BoxH3>No credit checks</BoxH3>
                  <BoxContent>
                    Borrow without the background checks. Anyone can get the
                    financing they need.
                  </BoxContent>
                </BoxShort>
              </BoxCenter>
            </BoxCol>
          </BoxRow>
        </BoxConTainer>
      </Grid>
    </>
  );
}
