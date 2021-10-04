import styled from 'styled-components/macro';

export interface PropFlex {
  gap: any;
  justifyContent: any;
  alignItem: any;
  flexgrow?: number;
}

export const Flex = styled.div`
  display: flex;
  justify-content: ${(p: PropFlex) =>
    p.justifyContent ? p.justifyContent : 'flex-start'};
  align-items: ${(p: PropFlex) => (p.alignItem ? p.alignItem : 'stretch')};
  gap: ${(p: PropFlex) => (p.gap !== 0 ? p.gap : 0)};
  ${(p: PropFlex) => (p.flexgrow ? `flex-grow:${p.flexgrow} ;` : ``)}
`;
