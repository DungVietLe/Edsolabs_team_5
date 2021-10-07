import {
  PageNot,
  Wrapper,
  Left,
  LeftSide,
  LeftContent,
  LeftText,
  LeftContext,
  LeftBack,
  LeftLink,
  LeftSpan,
  Right,
} from './P';
import { ReactComponent as NotFound } from './icon/notfound.svg';
export function NotFoundPage() {
  return (
    <>
      <PageNot>
        <Wrapper>
          <Left>
            <LeftSide>
              <LeftContent>
                <LeftText>Oopps...!</LeftText>
                <LeftContext>Page not found.</LeftContext>
                <LeftBack>
                  <LeftLink to="/">
                    <LeftSpan>GO BACK</LeftSpan>
                  </LeftLink>
                </LeftBack>
              </LeftContent>
            </LeftSide>
          </Left>
          <Right>
            <NotFound />
          </Right>
        </Wrapper>
      </PageNot>
    </>
  );
}
