import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Typography from '@mui/material/Typography';
import React from 'react';
import { useHistory } from 'react-router';
import { ContainerInterest } from './rootStylesFilter';
import queryString from 'query-string';
interface Props {}

export const LoanValue = (props: Props) => {
  const [expanded, setExpanded] = React.useState<string | false>('on');
  const history = useHistory();

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };
  const url = queryString.parse(history.location.search);
  const handleValue = e => {
    const param = new URL(window.location.href);
    const search_param = param.searchParams;
    param.search = search_param.toString();

    search_param.set('loanToValueRanges', e.target.value);

    const new_url = param.search.toString();

    history.push({ pathname: '', search: new_url });
  };
  return (
    <ContainerInterest>
      <Accordion onChange={handleChange('on')} expanded={expanded === 'on'}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Loan to value</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <RadioGroup name="radio-buttons-group">
            <FormControlLabel
              value="0:0.25"
              checked={url.loanToValueRanges?.includes('0:0.25') || false}
              onChange={handleValue}
              control={
                <Radio
                  sx={{
                    color: '#fff',
                    '&.Mui-checked': {
                      color: '#DBA83D',
                    },
                  }}
                />
              }
              label="0 - 25%"
            />
            <FormControlLabel
              value="0.25:0.5"
              checked={url.loanToValueRanges?.includes('0.25:0.5') || false}
              onChange={handleValue}
              control={
                <Radio
                  sx={{
                    color: '#fff',
                    '&.Mui-checked': {
                      color: '#DBA83D',
                    },
                  }}
                />
              }
              label="25 - 50%"
            />
            <FormControlLabel
              value="0.5:0.75"
              checked={url.loanToValueRanges?.includes('0.5:0.75') || false}
              onChange={handleValue}
              control={
                <Radio
                  sx={{
                    color: '#fff',
                    '&.Mui-checked': {
                      color: '#DBA83D',
                    },
                  }}
                />
              }
              label="50 - 75%"
            />
            <FormControlLabel
              value="0.75:1"
              checked={url.loanToValueRanges?.includes('0.75:1') || false}
              onChange={handleValue}
              control={
                <Radio
                  sx={{
                    color: '#fff',
                    '&.Mui-checked': {
                      color: '#DBA83D',
                    },
                  }}
                />
              }
              label=">75%"
            />
          </RadioGroup>
        </AccordionDetails>
      </Accordion>
    </ContainerInterest>
  );
};
