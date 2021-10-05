import {
  Grid,
  BoxConTainer,
  BoxTitle,
  BoxRow,
  BoxCol,
  BoxCenter,
  BoxShort,
  BoxH3,
  BoxContent,
} from './style';
import { ReactComponent as Bank } from './icon/bank.svg';
import { ReactComponent as Credit } from './icon/credit.svg';
import { ReactComponent as Finance } from './icon/finance.svg';
import { ReactComponent as Rate } from './icon/rate.svg';

export function Brrow() {
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
