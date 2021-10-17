/* eslint-disable react-hooks/exhaustive-deps */
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
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { listCoin } from './DataCoin';
import { ContainerInterest, SetSizeCoin } from './rootStylesFilter';
import { messages } from './messages';
import { useTranslation } from 'react-i18next';
export const Collateral = (props: MyValue) => {
  const { t } = useTranslation();
  const history = useHistory();
  const url = queryString.parse(history.location.search);
  const [colateral, setColateral] = useState<any>({
    data: [],
  });
  const handleCheckBoxChange = e => {
    if (colateral.data.includes(e.target.name)) {
      const newList = colateral.data.filter(item => item !== e.target.name);
      setColateral({ ...colateral, data: newList });
    } else {
      setColateral({
        ...colateral,
        data: [...colateral.data, e.target.name],
      });
    }
  };
  useEffect(() => {
    const url = queryString.parse(history.location.search);
    const arrNew = url.collateralSymbols?.toString().split(',');
    setColateral({ data: arrNew });
  }, []);
  useEffect(() => {
    const param = new URL(window.location.href);
    const search_param = param.searchParams;
    param.search = search_param.toString();
    search_param.set('collateralSymbols', colateral.data.toString());
    const new_url = param.search.toString();
    history.push({
      pathname: history.location.pathname,
      search: new_url,
    });
  }, [colateral, history]);
  // reset
  useEffect(() => {
    if (props.checker) {
      setColateral({ data: [] });
    }
  }, [props.checker]);
  const renderListCoin = listCoin.map((item, index) => {
    return (
      <FormControlLabel
        key={index}
        control={
          <Checkbox
            name={item.value}
            checked={url.collateralSymbols?.includes(item.value) || false}
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
          <Typography>{t(messages.col())}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>{renderListCoin}</FormGroup>
        </AccordionDetails>
      </Accordion>
    </ContainerInterest>
  );
};
