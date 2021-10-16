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
export const HardNFT = (props: MyValue) => {
  const [expanded, setExpanded] = React.useState<string | false>('on');
  const [hardNFT, setHardNFT] = useState<any>({
    data: [],
  });
  const history = useHistory();
  const url = queryString.parse(history.location.search);
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };
  const getHardNFT = e => {
    if (hardNFT.data.includes(e.target.name)) {
      const newList = hardNFT.data.filter(item => item !== e.target.name);
      setHardNFT({ ...hardNFT, data: newList });
    } else {
      setHardNFT({
        ...hardNFT,
        data: [...hardNFT.data, e.target.name],
      });
    }
  };
  useEffect(() => {
    const param = new URL(window.location.href);
    const search_param = param.searchParams;
    param.search = search_param.toString();
    search_param.set('nftType', hardNFT.data.join(','));
    const new_url = param.search.toString();
    history.push({ pathname: '', search: new_url });
  }, [hardNFT, history]);

  useEffect(() => {
    setHardNFT({ data: [] });
  }, [props.checker]);
  return (
    <ContainerInterest>
      <Accordion onChange={handleChange('on')} expanded={expanded === 'on'}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>NFT type</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  name="0"
                  checked={url.nftType?.includes('0') || false}
                  sx={{
                    color: '#fff',
                    '&.Mui-checked': {
                      color: '#DBA83D',
                    },
                  }}
                  onChange={getHardNFT}
                />
              }
              label="Hard NFT"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="1"
                  checked={url.nftType?.includes('1') || false}
                  sx={{
                    color: '#fff',
                    '&.Mui-checked': {
                      color: '#DBA83D',
                    },
                  }}
                  onChange={getHardNFT}
                />
              }
              label="Soft NFT"
            />
          </FormGroup>
        </AccordionDetails>
      </Accordion>
    </ContainerInterest>
  );
};
