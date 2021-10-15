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
import { messages } from './messages';
import { useTranslation } from 'react-i18next';
export function Brrow() {
  const { t } = useTranslation();
  return (
    <>
      <Wrap>
        <Container>
          <Title>{t(messages.title())}</Title>
          <Row>
            <Col className="col-12">
              <Center>
                <Bank />
                <Short>
                  <Heading>{t(messages.content1())}</Heading>
                  <Paragraph>{t(messages.des1())}</Paragraph>
                </Short>
              </Center>
            </Col>
            <Col className="col-12">
              <Center>
                <Rate />
                <Short>
                  <Heading>{t(messages.content2())}</Heading>
                  <Paragraph>{t(messages.des2())}</Paragraph>
                </Short>
              </Center>
            </Col>
            <Col className="col-12">
              <Center>
                <Finance />
                <Short>
                  <Heading>{t(messages.content3())}</Heading>
                  <Paragraph>{t(messages.des3())}</Paragraph>
                </Short>
              </Center>
            </Col>
            <Col className="col-12">
              <Center>
                <Credit />
                <Short>
                  <Heading>{t(messages.content4())}</Heading>
                  <Paragraph>{t(messages.des4())}</Paragraph>
                </Short>
              </Center>
            </Col>
          </Row>
        </Container>
      </Wrap>
    </>
  );
}
