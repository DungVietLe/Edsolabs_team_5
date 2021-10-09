import { ReactComponent as Bank } from './icon/bank.svg';
import { ReactComponent as Rate } from './icon/rate.svg';
import { ReactComponent as Finance } from './icon/finance.svg';
import { ReactComponent as Credit } from './icon/credit.svg';
import {
  Wrap,
  Container,
  Title,
  Row,
  Col,
  Center,
  Short,
  Heading,
  Paragraph,
} from './style';
export function Brrow() {
  return (
    <>
      <Wrap>
        <Container>
          <Title>Why borrow with us?</Title>
          <Row>
            <Col className="col-12">
              <Center>
                <Bank />
                <Short>
                  <Heading>Quicker than the bank</Heading>
                  <Paragraph>
                    {' '}
                    Banks are yesterdays news. Get the money you need without
                    having to wait.
                  </Paragraph>
                </Short>
              </Center>
            </Col>
            <Col className="col-12">
              <Center>
                <Rate />
                <Short>
                  <Heading>Better interest rates</Heading>
                  <Paragraph>
                    {' '}
                    P2P lending lets you negotiate with the lender to arrange
                    the best possible interest rates.
                  </Paragraph>
                </Short>
              </Center>
            </Col>
            <Col className="col-12">
              <Center>
                <Finance />
                <Short>
                  <Heading>Finance assets without selling</Heading>
                  <Paragraph>
                    {' '}
                    Put your assets to work so you can continue to meet your
                    financial obligations.
                  </Paragraph>
                </Short>
              </Center>
            </Col>
            <Col className="col-12">
              <Center>
                <Credit />
                <Short>
                  <Heading>No credit checks</Heading>
                  <Paragraph>
                    {' '}
                    Borrow without the background checks. Anyone can get the
                    financing they need.
                  </Paragraph>
                </Short>
              </Center>
            </Col>
          </Row>
        </Container>
      </Wrap>
    </>
  );
}
