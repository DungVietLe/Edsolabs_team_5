import { SwipeableDrawer } from '@mui/material';
import styled from 'styled-components/macro';

export const WrapperResult = styled.div`
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
`;
export const Boxright = styled.div`
  width: 293px;
  @media (max-width: 768px) {
    display: none;
  }
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
  border-bottom: 1px solid #45484f;
  cursor: pointer;
  padding: 12px 0 4px 16px;
`;
export const MySwipeableDrawer = styled(SwipeableDrawer)`
  & > div.MuiPaper-root {
    background-color: transparent;
    box-shadow: none;
    padding-top: 70px;
  }
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const Paragrap = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #d1d1d3;
  margin-bottom: 20px;
`;
