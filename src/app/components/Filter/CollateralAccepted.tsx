import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Typography from '@mui/material/Typography';
import React from 'react';
import { ContainerInterest, SetSizeCoin } from './rootStylesFilter';
import { listCoin } from './DataCoin';
interface Props {}

export const CollateralAccepted = (props: Props) => {
  const handleCheckBoxChange = e => {
    console.log(e.target.name);
  };
  const renderListCoin = listCoin.map((item, index) => {
    return (
      <FormControlLabel
        key={index}
        control={
          <Checkbox
            name={item.value}
            sx={{
              color: '#fff',
              '&.Mui-checked': {
                color: '#DBA83D',
              },
            }}
            onChange={handleCheckBoxChange}
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
          <Typography>Collateral accepted</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>{renderListCoin}</FormGroup>
        </AccordionDetails>
      </Accordion>
    </ContainerInterest>
  );
};
