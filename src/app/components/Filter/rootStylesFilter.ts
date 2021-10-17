import styled from 'styled-components/macro';
export const MyInput = styled.input`
  font-family: 'Montserrat' !important;
  width: 269px;
  height: 40px;
  color: #a2a3a7;

  font-size: 14px;
  font-weight: 400;
  padding: 11px 0 12px 38px;
  background: #3e424b;
  border-radius: 22px;
  outline: none;
  border: none;
`;
export const IconSearch = styled.div`
  position: absolute;
  top: 25px;
  left: 28px;
  color: #a2a3a7;
`;
export const FormSearch = styled.form`
  position: relative;
  padding: 18px 12px 0px;
`;
export const ContainerInterest = styled.div`
  & > div.MuiPaper-root {
    padding: 2px 0 2px 4px;
    & > div.Mui-expanded {
      min-height: 47px !important;
      & > div.css-o4b71y-MuiAccordionSummary-content.Mui-expanded {
        margin: 0 !important;
      }
    }
  }
  &:last-child {
    & > div.MuiAccordion-root {
      border-bottom: none;
    }
  }
  & > div.MuiAccordion-root {
    background-color: transparent;
    color: #fff;
    border-bottom: 1px solid #45484f;
    border-radius: 0px;
    box-shadow: none;

    & > div.MuiButtonBase-root {
      width: 101.5%;
      margin-left: -4px;

      & > div.css-o4b71y-MuiAccordionSummary-content {
        & > p.css-ahj2mt-MuiTypography-root {
          font-weight: 600;
          font-size: 16px;
        }
      }
      & > div.css-yw020d-MuiAccordionSummary-expandIconWrapper {
        & > svg.MuiSvgIcon-root {
          color: #fff !important;
        }
        & > svg:not([fill]) {
          color: #fff !important;
        }
      }
    }
    & > div.MuiCollapse-root {
      & > div.MuiCollapse-wrapper {
        & > div.MuiCollapse-wrapperInner {
          & > div.MuiAccordion-region {
            & > div.MuiAccordionDetails-root {
              padding: 0px 0px 6px 0px !important;
              max-height: 135px;
              overflow-y: auto;
              margin-right: 25px;
              &::-webkit-scrollbar {
                width: 4px;
                background-color: #45484f;
                border-radius: 3px;
              }
              &::-webkit-scrollbar-thumb {
                background-color: #74767b;
                border-radius: 3px;
              }
              & > div.MuiFormGroup-root {
                & > label {
                  height: 32px;
                  margin: 0px 0 0px 0;
                  & > span {
                    margin-right: 1px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
export const SetSizeCoin = styled.img`
  width: 20px;
  height: 20px;
`;
