import { TabList } from '@mui/lab';
import TabContext from '@mui/lab/TabContext';
import Box from '@mui/material/Box';
import { COLOR_PRIMARY_FOOTER } from 'app/constains/global';
import * as React from 'react';
import { InputRegister } from '../Register/InputRegister';
import { MyTab, MyTabPanel } from '../stylesForAuth';
import Input from './Input';

export default function Form(props) {
  const [value, setValue] = React.useState('2');
  const [UpName, setUpName] = React.useState('');
  const [InName, setInName] = React.useState('active');
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const handleClickUp = e => {
    if (InName === 'active') {
      setInName('');
      setUpName('active');
    }
    const checkStatus = 1;
    props.isTab(checkStatus);
  };
  const handleClickIn = e => {
    if (UpName === 'active') {
      setUpName('');
      setInName('active');
    }
    const checkStatus = 2;
    props.isTab(checkStatus);
  };
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
              value="1"
              label="Sign Up"
              style={{
                fontFamily: 'Montserrat',
                textTransform: 'capitalize',
                marginRight: '30px',
                color: `${UpName === 'active' ? COLOR_PRIMARY_FOOTER : '#fff'}`,
              }}
              onClick={handleClickUp}
            />
            <MyTab
              label="Log In"
              value="2"
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
