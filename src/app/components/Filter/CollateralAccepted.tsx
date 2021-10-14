import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Typography from '@mui/material/Typography';
import { MyValue } from 'models/Myvalue';
import queryString from 'query-string';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { listCoin } from './DataCoin';
import { ContainerInterest, SetSizeCoin } from './rootStylesFilter';
export const CollateralAccepted = (props: MyValue) => {
  const history = useHistory();

  const handleCheckBoxChange = e => {
    props.data(e.target.name, 'Collateral accepted');
  };

  const a = queryString.parse(history.location.search);
  useEffect(() => {
    props.data(a.collateralSymbols, 'Collateral accepted');
  }, [history.location.search]);

  useEffect(() => {
    const paramxxxx = new URL(window.location.href);
    const search_param = paramxxxx.searchParams;
    search_param.set('collateralSymbols', props.collateralAccepted.join(','));
    paramxxxx.search = search_param.toString();
    const new_url = paramxxxx.search.toString();
    console.log(new_url);
  }, [props.collateralAccepted]);
  const renderListCoin = listCoin.map((item, index) => {
    return (
      <FormControlLabel
        key={index}
        control={
          <Checkbox
            name={item.value}
            checked={props.value.collateralAccepted.includes(item.value)}
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
