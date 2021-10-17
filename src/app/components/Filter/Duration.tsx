/* eslint-disable react-hooks/exhaustive-deps */
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
import { messages } from './messages';
import { useTranslation } from 'react-i18next';
export const Duration = (props: MyValue) => {
  const { t } = useTranslation();
  const [expanded, setExpanded] = React.useState<string | false>('on');
  const [duration, setDuration] = useState<any>({
    data: [],
  });
  const history = useHistory();
  const url: any = queryString.parse(history.location.search);
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };
  const getDuration = e => {
    if (duration.data.includes(e.target.name)) {
      const newList = duration.data.filter(item => item !== e.target.name);
      setDuration({ ...duration, data: newList });
    } else {
      setDuration({
        ...duration,
        data: [...duration.data, e.target.name],
      });
    }
  };
  useEffect(() => {
    const url = queryString.parse(history.location.search);
    setDuration({ data: [url.durationTypes] });
  }, []);
  useEffect(() => {
    const param = new URL(window.location.href);
    const search_param = param.searchParams;
    param.search = search_param.toString();
    search_param.set('durationTypes', duration.data.toString());
    const new_url = param.search.toString();
    history.push({ pathname: history.location.pathname, search: new_url });
  }, [duration, history]);

  useEffect(() => {
    if (props.checker === true) {
      setDuration({ data: [] });
    }
  }, [props.checker]);
  return (
    <ContainerInterest>
      <Accordion expanded={expanded === 'on'} onChange={handleChange('on')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{t(messages.duration())}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  name="0"
                  checked={url.durationTypes?.includes('0')}
                  sx={{
                    color: '#fff',
                    '&.Mui-checked': {
                      color: '#DBA83D',
                    },
                  }}
                  onChange={getDuration}
                />
              }
              label={t(messages.week())}
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="1"
                  checked={url.durationTypes?.includes('1')}
                  sx={{
                    color: '#fff',
                    '&.Mui-checked': {
                      color: '#DBA83D',
                    },
                  }}
                  onChange={getDuration}
                />
              }
              label={t(messages.month())}
            />
          </FormGroup>
        </AccordionDetails>
      </Accordion>
    </ContainerInterest>
  );
};
