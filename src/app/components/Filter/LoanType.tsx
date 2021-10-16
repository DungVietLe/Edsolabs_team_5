import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Checkbox, FormControlLabel } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import FormGroup from '@mui/material/FormGroup';
import Typography from '@mui/material/Typography';
import { MyValue } from 'models/Myvalue';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { ContainerInterest } from './rootStylesFilter';
import queryString from 'query-string';
export const LoanType = (props: MyValue) => {
  const [expanded, setExpanded] = React.useState<string | false>('on');
  const [LoanType, setLoanType] = useState<any>({
    data: [],
  });
  const history = useHistory();
  const url = queryString.parse(history.location.search);
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };
  const getLoanType = e => {
    if (LoanType.data.includes(e.target.name)) {
      const newList = LoanType.data.filter(item => item !== e.target.name);
      setLoanType({ ...LoanType, data: newList });
    } else {
      setLoanType({
        ...LoanType,
        data: [...LoanType.data, e.target.name],
      });
    }
  };
  useEffect(() => {
    const param = new URL(window.location.href);
    const search_param = param.searchParams;
    param.search = search_param.toString();
    search_param.set('loanTypes', LoanType.data.toString());
    const new_url = param.search.toString();
    history.push({ pathname: history.location.pathname, search: new_url });
  }, [LoanType, history]);

  useEffect(() => {
    if (props.checker === true) {
      setLoanType({ data: [] });
    }
  }, [props.checker]);
  return (
    <ContainerInterest>
      <Accordion onChange={handleChange('on')} expanded={expanded === 'on'}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Loan type</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  name="0"
                  checked={url.loanTypes?.includes('0') || false}
                  sx={{
                    color: '#fff',
                    '&.Mui-checked': {
                      color: '#DBA83D',
                    },
                  }}
                  onChange={getLoanType}
                />
              }
              label="Auto"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="1"
                  checked={url.loanTypes?.includes('1') || false}
                  sx={{
                    color: '#fff',
                    '&.Mui-checked': {
                      color: '#DBA83D',
                    },
                  }}
                  onChange={getLoanType}
                />
              }
              label="Semi-auto"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="2"
                  checked={url.loanTypes?.includes('2') || false}
                  sx={{
                    color: '#fff',
                    '&.Mui-checked': {
                      color: '#DBA83D',
                    },
                  }}
                  onChange={getLoanType}
                />
              }
              label="Negotiation"
            />
          </FormGroup>
        </AccordionDetails>
      </Accordion>
    </ContainerInterest>
  );
};
