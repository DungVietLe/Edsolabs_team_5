import React, { useState } from 'react';
import {
  Accept,
  ButtonClick,
  Content,
  Decline,
  Term,
  Text,
  Title,
  ViewTerm,
  ViewText,
  Wrapper,
} from './styled';
import { messages } from './messages';
import { useTranslation } from 'react-i18next';
const Terms = () => {
  const valueTerm = localStorage.getItem('term');
  const { t } = useTranslation();
  const [check, setCheck] = useState(false);
  const [click, setClick] = useState(Boolean(valueTerm) ? false : true);
  const onScrollPublic = e => {
    if (e.target.scrollTop >= 164) {
      setCheck(true);
    }
  };

  const handChange = e => {
    if (check) {
      setClick(false);
      localStorage.setItem('term', '1');
    }
  };
  const handClose = e => {
    setClick(false);
  };
  return (
    <div>
      {click ? (
        <ViewTerm>
          <Term>
            <ViewText>
              <Title>{t(messages.title())}</Title>
              <Wrapper className="wrapper" onScroll={onScrollPublic}>
                <Content>
                  <h4>{t(messages.subTitle())}</h4>
                </Content>
                <Text>
                  <li className="information">{t(messages.sub1())}.</li>
                  <li className="information">{t(messages.sub2())}</li>
                  <li className="information">{t(messages.sub3())}</li>
                  <li className="information">{t(messages.sub4())}</li>
                  <li className="information">{t(messages.sub5())}</li>
                  <li className="information">{t(messages.sub6())}</li>
                  <li className="information">{t(messages.sub7())}</li>
                  <li className="information">{t(messages.sub8())}</li>
                  <li className="information">{t(messages.sub9())}</li>
                  <li className="information">{t(messages.sub10())}</li>
                  <li className="information">{t(messages.sub11())}</li>
                  <li className="information">{t(messages.sub12())}</li>
                </Text>
              </Wrapper>
            </ViewText>
            <ButtonClick>
              <Decline onClick={handClose} variant="outlined" className="btn">
                {t(messages.decline())}
              </Decline>
              <Accept
                onClick={handChange}
                className={check ? 'active' : 'outline btn'}
              >
                {t(messages.accept())}
              </Accept>
            </ButtonClick>
          </Term>
        </ViewTerm>
      ) : (
        ''
      )}
    </div>
  );
};

export default Terms;
