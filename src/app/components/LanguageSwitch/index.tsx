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
          '@media (max-width:320px)': {
            display: 'none',
          },
        }}
      >
        <FormControlLabel
          value="en"
          control={<Radio sx={{ display: 'none !important' }} />}
          sx={{
            '&.MuiFormControlLabel-root': {
              margin: '0 5px',
            },
          }}
          label={
            <div style={{ fontSize: '14px' }}>
              <img
                style={{
                  display: 'inline-block',
                  width: '30px',
                  height: '15px',
                }}
                src={EN}
                alt=""
              />
            </div>
          }
        />
        <FormControlLabel
          value="vn"
          control={<Radio sx={{ display: 'none !important' }} />}
          sx={{
            '&.MuiFormControlLabel-root': {
              margin: '0 5px',
            },
          }}
          label={
            <div style={{ fontSize: '14px' }}>
              <img
                style={{
                  display: 'inline-block',
                  width: '30px',
                  height: '20px',
                }}
                src={VN}
                alt=""
              />
            </div>
          }
        />
      </RadioGroup>
    </FormControl>
  );
}
