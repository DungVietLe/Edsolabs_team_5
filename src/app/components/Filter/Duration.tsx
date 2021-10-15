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
export const Duration = (props: MyValue) => {
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
    const param = new URL(window.location.href);
    const search_param = param.searchParams;
    param.search = search_param.toString();

    search_param.set('durationTypes', duration.data.join(','));

    const new_url = param.search.toString();

    history.push({ pathname: '', search: new_url });
  }, [duration, history]);

  useEffect(() => {
    setDuration({ data: [] });
  }, [props.checker]);
  return (
    <ContainerInterest>
      <Accordion expanded={expanded === 'on'} onChange={handleChange('on')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Duration</Typography>
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
              label="Week"
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
              label="Month"
            />
          </FormGroup>
        </AccordionDetails>
      </Accordion>
    </ContainerInterest>
  );
};
