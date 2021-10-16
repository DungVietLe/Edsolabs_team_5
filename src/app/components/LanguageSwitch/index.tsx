import { FormControl, FormControlLabel, RadioGroup } from '@mui/material';
import Radio from '@mui/material/Radio';
import { FormLabel } from 'app/components/FormLabel';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { messages } from './message';

export function LanguageSwitch() {
  const { t, i18n } = useTranslation();
  const handleLanguageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const language = event.target.value;
    i18n.changeLanguage(language);
  };

  return (
    <FormControl component="fieldset" sx={{ position: 'absolute' }}>
      <FormLabel>{t(...messages.selectLanguage())}</FormLabel>
      <RadioGroup
        aria-label="gender"
        name="controlled-radio-buttons-group"
        onChange={handleLanguageChange}
      >
        <FormControlLabel value="en" control={<Radio />} label="en" />
        <FormControlLabel value="vn" control={<Radio />} label="vn" />
      </RadioGroup>
    </FormControl>
  );
}
