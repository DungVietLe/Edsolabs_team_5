import { SwipeableDrawer } from '@mui/material';
import styled from 'styled-components/macro';
interface Mycheck {
  check: Boolean;
}
export const WrapperResult = styled.div`
  overflow: hidden;
  width: 100%;
  padding: 119px 1.25rem 1.25rem 1.25rem;
  background-color: #171a23;
  min-height: 100vh;
  @media (max-width: 768px) {
    padding: 72px 16px 0 16px;
  }
`;
export const ContainerResult = styled.div`
  max-width: 1324px;
  margin: 0 auto;
`;
export const BoxLeft = styled.div`
  flex-grow: 1;
  margin-bottom: 64px;
  .filter_result {
    display: none;
    @media (max-width: 768px) {
      display: block;
    }
  }
`;
export const Boxright = styled.div`
  width: 293px;
  background-color: #282c37;
  border-radius: 19px;
  @media (max-width: 768px) {
    display: ${(props: Mycheck) => (props.check ? 'block' : 'none')};
    position: absolute;
    right: 0;
    transition: all 0.3s ease-in-out;
    transition-delay: 0.2;

    &.none {
      display: block;
      right: 20%;
      visibility: hidden;
      opacity: 0;
      /* width: 0px; */
    }
    &.active {
      display: block;
      visibility: visible;
      opacity: 1;
      right: 0;
    }
  }
  z-index: 99;
`;
export const BoxrightMobile = styled.div`
  width: 280px;
  height: auto;
  background: #282c37;
  border-radius: 20px;
`;
export const ContainerBox = styled.div``;
export const Filter = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 80px;
    right: 20px;
  } ;
`;
export const Reset = styled.div`
  text-decoration: underline;
  font-weight: 400;
  font-size: 14px;
  color: #fff;
  cursor: pointer;
  padding: 2px 0 0px 8px;
`;

export const MySwipeableDrawer = styled(SwipeableDrawer)`
  & > div.MuiPaper-root {
    background-color: transparent;
    box-shadow: none;
    padding-top: 70px;
  }
`;
export const Close = styled.img`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
  width: 30px;
  height: 30px;
  margin-right: 8px;
`;
export const BoxFlex = styled.div`
  display: flex;
  padding: 6px 5px;
  justify-content: space-between;
  border-bottom: 1px solid #45484f;
`;
export const Modal = styled.div<any>`
  position: fixed;
  inset: 0;
  background-color: #333;
  opacity: 0.6;
  display: ${props => (props.check ? 'block' : 'none')};
`;
