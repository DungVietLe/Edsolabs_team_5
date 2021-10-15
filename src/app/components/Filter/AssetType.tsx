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
export const AssetType = (props: MyValue) => {
  const [expanded, setExpanded] = React.useState<string | false>('on');
  const [assetType, setAssetType] = useState<any>({
    data: [],
  });
  const history = useHistory();
  const url = queryString.parse(history.location.search);
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };
  const getLoanType = e => {
    if (assetType.data.includes(e.target.name)) {
      const newList = assetType.data.filter(item => item !== e.target.name);
      setAssetType({ ...assetType, data: newList });
    } else {
      setAssetType({
        ...assetType,
        data: [...assetType.data, e.target.name],
      });
    }
  };
  useEffect(() => {
    const param = new URL(window.location.href);
    const search_param = param.searchParams;
    param.search = search_param.toString();

    search_param.set('assetType', assetType.data.join(','));

    const new_url = param.search.toString();

    history.push({ pathname: '', search: new_url });
  }, [assetType]);

  useEffect(() => {
    setAssetType({ data: [] });
  }, [props.checker]);
  return (
    <ContainerInterest>
      <Accordion onChange={handleChange('on')} expanded={expanded === 'on'}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Asset type</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  name="1"
                  checked={url.assetType?.includes('1') || false}
                  sx={{
                    color: '#fff',
                    '&.Mui-checked': {
                      color: '#DBA83D',
                    },
                  }}
                  onChange={getLoanType}
                />
              }
              label="Jewelry"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="3"
                  checked={url.assetType?.includes('3') || false}
                  sx={{
                    color: '#fff',
                    '&.Mui-checked': {
                      color: '#DBA83D',
                    },
                  }}
                  onChange={getLoanType}
                />
              }
              label="Car"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="2"
                  checked={url.assetType?.includes('2') || false}
                  sx={{
                    color: '#fff',
                    '&.Mui-checked': {
                      color: '#DBA83D',
                    },
                  }}
                  onChange={getLoanType}
                />
              }
              label="Watch"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="4"
                  checked={url.assetType?.includes('4') || false}
                  sx={{
                    color: '#fff',
                    '&.Mui-checked': {
                      color: '#DBA83D',
                    },
                  }}
                  onChange={getLoanType}
                />
              }
              label="House"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="0"
                  checked={url.assetType?.includes('0') || false}
                  sx={{
                    color: '#fff',
                    '&.Mui-checked': {
                      color: '#DBA83D',
                    },
                  }}
                  onChange={getLoanType}
                />
              }
              label="Artwook"
            />
          </FormGroup>
        </AccordionDetails>
      </Accordion>
    </ContainerInterest>
  );
};
