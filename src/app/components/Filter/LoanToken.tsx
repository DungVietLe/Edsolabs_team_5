/* eslint-disable react-hooks/exhaustive-deps */
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';
import { ContainerInterest, SetSizeCoin } from './rootStylesFilter';
import { listLoan } from './DataCoin';
import { MyValue } from 'models/Myvalue';
import { useHistory } from 'react-router';
import queryString from 'query-string';
export const LoanToken = (props: MyValue) => {
  const [loanToken, setLoanToken] = useState<any>({
    data: [],
  });
  const history = useHistory();
  const url = queryString.parse(history.location.search);
  const valueLoanToken = e => {
    if (loanToken.data.includes(e.target.name)) {
      const newList = loanToken.data.filter(item => item !== e.target.name);
      setLoanToken({ ...loanToken, data: newList });
    } else {
      setLoanToken({
        ...loanToken,
        data: [...loanToken.data, e.target.name],
      });
    }
  };
  useEffect(() => {
    const url = queryString.parse(history.location.search);
    setLoanToken({ data: [url.loanSymbols] });
  }, []);
  useEffect(() => {
    const param = new URL(window.location.href);
    const search_param = param.searchParams;
    param.search = search_param.toString();

    search_param.set('loanSymbols', loanToken.data.toString());

    const new_url = param.search.toString();

    history.push({ pathname: history.location.pathname, search: new_url });
  }, [loanToken, history]);

  useEffect(() => {
    if (props.checker) {
      setLoanToken({ data: [] });
    }
  }, [props.checker]);
  const renderListCoin = listLoan.map((item, index) => {
    return (
      <FormControlLabel
        key={index}
        control={
          <Checkbox
            name={item.value}
            checked={url.loanSymbols?.includes(item.value) || false}
            sx={{
              color: '#fff',
              '&.Mui-checked': {
                color: '#DBA83D',
              },
            }}
            onChange={valueLoanToken}
          />
        }
        label={
          <>
            <SetSizeCoin src={item.url} alt="img coin" /> {item.value}
          </>
        }
      />
    );
  });
  const [expanded, setExpanded] = React.useState<string | false>('on');

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };
  return (
    <ContainerInterest>
      <Accordion onChange={handleChange('on')} expanded={expanded === 'on'}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Loan Token</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>{renderListCoin}</FormGroup>
        </AccordionDetails>
      </Accordion>
    </ContainerInterest>
  );
};
