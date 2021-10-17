import React from 'react';
import { ContainerInterest } from './rootStylesFilter';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import queryString from 'query-string';
import { useHistory } from 'react-router';
import { messages } from './messages';
import { useTranslation } from 'react-i18next';
interface Props {}

export const InterestRange = (props: Props) => {
  const { t } = useTranslation();
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

    search_param.set('interestRanges', e.target.value);

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
          <Typography>{t(messages.interest())}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <RadioGroup name="radio-buttons-group">
            <FormControlLabel
              value="0:0.1"
              checked={url.interestRanges?.includes('0:0.1') || false}
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
              label="0 - 10%"
            />
            <FormControlLabel
              value="0.1:0.25"
              checked={url.interestRanges?.includes('0.1:0.25') || false}
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
              label="10 - 25%"
            />
            <FormControlLabel
              value="0.25:0.5"
              checked={url.interestRanges?.includes('0.25:0.5') || false}
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
              value="0.5:1"
              checked={url.interestRanges?.includes('0.5:1') || false}
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
              label=">50%"
            />
          </RadioGroup>
        </AccordionDetails>
      </Accordion>
    </ContainerInterest>
  );
};
