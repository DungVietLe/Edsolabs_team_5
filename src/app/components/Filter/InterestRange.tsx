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
interface Props {}

export const InterestRange = (props: Props) => {
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
          <Typography>Interest range</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <RadioGroup name="radio-buttons-group">
            <FormControlLabel
              value="0 - 0,1"
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
              value="0,1 - 0,25"
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
              value="0,25 - 0,5%"
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
              value="0,5"
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
