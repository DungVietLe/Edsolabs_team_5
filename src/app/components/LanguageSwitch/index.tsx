import { FormControl, FormControlLabel, RadioGroup } from '@mui/material';
import Radio from '@mui/material/Radio';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import VN from 'assets/gif/vn.gif';
import EN from 'assets/gif/uk.gif';

export function LanguageSwitch() {
  const { i18n } = useTranslation();
  const handleLanguageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const language = event.target.value;
    i18n.changeLanguage(language);
  };

  return (
    <FormControl component="fieldset">
      <RadioGroup
        aria-label="gender"
        name="controlled-radio-buttons-group"
        onChange={handleLanguageChange}
        sx={{
          '&.MuiFormGroup-root': {
            flexDirection: 'row',
          },
        }}
      >
        <FormControlLabel
          value="en"
          control={<Radio sx={{ display: 'none !important' }} />}
          sx={{
            '&.MuiFormControlLabel-root': {
              margin: 0,
              marginRight: '10px',
            },
          }}
          label={
            <div style={{ fontSize: '14px' }}>
              <img
                style={{
                  display: 'inline-block',
                  width: 'auto',
                  height: '15px',
                }}
                src={EN}
                alt=""
              />
              {' EN'}
            </div>
          }
        />
        <FormControlLabel
          value="vn"
          control={<Radio sx={{ display: 'none !important' }} />}
          sx={{
            '&.MuiFormControlLabel-root': {
              margin: 0,
              marginRight: '10px',
            },
          }}
          label={
            <div style={{ fontSize: '14px' }}>
              <img
                style={{
                  display: 'inline-block',
                  width: 'auto',
                  height: '15px',
                }}
                src={VN}
                alt=""
              />
              {' VI'}
            </div>
          }
        />
      </RadioGroup>
    </FormControl>
  );
}
