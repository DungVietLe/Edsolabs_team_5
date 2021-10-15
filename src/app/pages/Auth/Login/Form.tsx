import { TabList } from '@mui/lab';
import TabContext from '@mui/lab/TabContext';
import Box from '@mui/material/Box';
import { COLOR_PRIMARY_FOOTER } from 'app/constains/global';
import * as React from 'react';
import { useHistory } from 'react-router';
import { InputRegister } from '../Register/InputRegister';
import { MyTab, MyTabPanel } from '../stylesForAuth';
import Input from './Input';
import { messages } from '../messages';
import { useTranslation } from 'react-i18next';
export default function Form(props) {
  const { t } = useTranslation();
  const history = useHistory();
  const [value, setValue] = React.useState('2');
  const [UpName, setUpName] = React.useState('');
  const [InName, setInName] = React.useState('active');
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const handleClickUp = e => {
    if (value === '2') {
      history.push({ pathname: '', search: 'tab=1' });
    }
    if (InName === 'active') {
      setInName('');
      setUpName('active');
    }
  };
  const handleClickIn = e => {
    if (value === '1') {
      history.push({ pathname: '', search: 'tab=2' });
    }
    if (UpName === 'active') {
      setUpName('');
      setInName('active');
    }
  };
  React.useEffect(() => {
    if (history.location.search.includes('?tab=1')) {
      setValue('1');
    }
    if (history.location.search.includes('?tab=2')) {
      setValue('2');
    }
  }, [setValue, history.location.search]);
  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ fontFamily: 'Montserrat' }}>
          <TabList
            onChange={handleChange}
            TabIndicatorProps={{
              style: {
                background: '#DBA83D',
                height: '3px',
                borderRadius: '35px',
              },
            }}
          >
            <MyTab
              value={'1'}
              label={t(messages.signup())}
              style={{
                fontFamily: 'Montserrat',
                textTransform: 'capitalize',
                marginRight: '30px',
                color: `${UpName === 'active' ? COLOR_PRIMARY_FOOTER : '#fff'}`,
              }}
              onClick={handleClickUp}
            />
            <MyTab
              label={t(messages.login())}
              value={'2'}
              style={{
                fontFamily: 'Montserrat',
                textTransform: 'capitalize',
                color: `${InName === 'active' ? COLOR_PRIMARY_FOOTER : '#fff'}`,
              }}
              onClick={handleClickIn}
            />
          </TabList>
        </Box>
        <MyTabPanel value="1">
          <InputRegister />
        </MyTabPanel>
        <MyTabPanel value="2">
          <Input />
        </MyTabPanel>
      </TabContext>
    </Box>
  );
}
