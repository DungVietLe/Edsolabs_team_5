import { MenuItem } from '@material-ui/core';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Theme, useTheme } from '@mui/material/styles';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ButtomMaxIcon, ButtomSmall, Flex } from '../rootStyled';
import {
  Form,
  FormCtrol,
  ItemRadio,
  MyRadio,
  MySelect,
  MyTextField,
  Wrapper,
} from './style';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name: string, muiCurrencyName: string[], theme: Theme) {
  return {
    fontWeight:
      muiCurrencyName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const Lend = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [valueMaxLoan, setValueMaxLoan] = useState('');
  const [currency, setCurrency] = React.useState('');
  const [timer, setTimer] = React.useState('Weeks');
  const [valueDuration, setValueDuration] = useState('');

  const onSubmit = (data: object) => console.log(data);

  const handleChangeMaxLoan = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueMaxLoan(e.target.value);
  };
  const handleSelectTimer = (event: SelectChangeEvent) => {
    setTimer(event.target.value as string);
  };
  const handleSelect = (event: SelectChangeEvent) => {
    setCurrency(event.target.value as string);
  };

  const handleChangeDuration = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueDuration(e.target.value);
  };

  const arrCurrency = [
    { name: 'BNB' },
    { name: 'ETC' },
    { name: 'ZEC' },
    { name: 'XRP' },
    { name: 'LTC' },
    { name: 'MKR' },
    { name: 'BAT' },
    { name: 'BTC' },
    { name: 'ETH' },
    { name: 'DEF' },
    { name: 'USDT' },
    { name: 'FIL' },
    { name: 'IOTX' },
    { name: 'PAX' },
    { name: 'ONT' },
    { name: 'SNX' },
    { name: 'SXP' },
    { name: 'BAND' },
    { name: 'DOT' },
    { name: 'BEF' },
    { name: 'ELF' },
    { name: 'TCT' },
    { name: 'LINK' },
    { name: 'ADA' },
    { name: 'EOS' },
    { name: 'BCH' },
    { name: 'INJ' },
    { name: 'UNI' },
    { name: 'NEAR' },
    { name: 'ATOM' },
    { name: 'COMP' },
    { name: 'YFI' },
    { name: 'YFII' },
    { name: 'XTZ' },
    { name: 'WBNB' },
    { name: 'DOGE' },
  ];

  const theme = useTheme();
  const [mutiCurrency, setMutiCurrency] = React.useState<string[]>([]);

  const handleSelectMutiCurrency = (
    event: SelectChangeEvent<typeof mutiCurrency>,
  ) => {
    const {
      target: { value },
    } = event;
    setMutiCurrency(typeof value === 'string' ? value.split(',') : value);
  };

  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChangeRadioButton = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSelectedValue(event.target.value);
  };
  const controlProps = (item: string) => ({
    checked: selectedValue === item,
    onChange: handleChangeRadioButton,
    value: item,
    name: 'show',
    inputProps: { 'aria-label': item },
  });

  const arrTimes = [{ name: 'Weeks' }, { name: 'Months' }];
  return (
    <Wrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Flex gap={10} alignItem="center">
          <FormCtrol className="left">
            <label htmlFor="maxLoan">Maximum loan amount</label>
            <div style={{ position: 'relative' }}>
              <MyTextField
                value={valueMaxLoan}
                error={errors.maxLoan ? true : false}
                className="wrap--input"
                id="maxLoan"
                variant="outlined"
                type="text"
                placeholder="Enter amount"
                {...register('maxLoan', {
                  required: true,
                  pattern: /[0-9]/,
                  onChange: handleChangeMaxLoan,
                })}
              />
              <ButtomSmall
                className="btn"
                style={{
                  position: 'absolute',
                  right: '5px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                }}
                bg="dba83d"
                type="button"
              >
                Max
              </ButtomSmall>
            </div>
            {errors.maxLoan && <span className="error">Invalid amount</span>}
          </FormCtrol>
          <FormCtrol
            style={{
              justifyContent: 'flex-start',
              flexDirection: 'column',
              paddingTop: '24px',
            }}
            className="right"
          >
            <MySelect
              error={Boolean(errors.currency)}
              className="form__select"
              labelId="id-currency"
              id="demo-simple-select"
              placeholder="currency"
              value={currency}
              {...register('currency', {
                required: true,
                onChange: handleSelect,
              })}
            >
              {arrCurrency.map((item: any, index: number) => (
                <MenuItem key={index} value={item.name}>
                  {item.name}
                </MenuItem>
              ))}
            </MySelect>
            {errors.currency && <span className="error">Invalid amount</span>}
          </FormCtrol>
        </Flex>
        <Flex justifyContent="space-between" gap={10} alignItem="center">
          <FormCtrol className="left">
            <label htmlFor="collateral">Duration</label>
            <div style={{ position: 'relative' }}>
              <MyTextField
                value={valueDuration}
                error={errors.duration ? true : false}
                className="wrap--input"
                id="duration"
                variant="outlined"
                type="text"
                placeholder="Duration"
                {...register('duration', {
                  required: true,
                  onChange: handleChangeDuration,
                })}
              />
            </div>
            {errors.duration && <span className="error">Invalid amount</span>}
          </FormCtrol>
          <FormCtrol
            style={{
              justifyContent: 'flex-start',
              flexDirection: 'column',
              paddingTop: '24px',
            }}
            className="right"
          >
            <MySelect
              error={Boolean(errors.timer)}
              className="form__select"
              labelId="mutiCurrency"
              id="demo-simple-select"
              placeholder="timer"
              value={timer}
              {...register('timer', {
                required: true,
                onChange: handleSelectTimer,
              })}
            >
              {arrTimes.map((item: any, index: number) => (
                <MenuItem key={index} value={item.name}>
                  {item.name}
                </MenuItem>
              ))}
            </MySelect>
            {errors.timer && <span className="error">Invalid amount</span>}
          </FormCtrol>
        </Flex>
        <FormCtrol style={{ minHeight: '60px' }}>
          <label htmlFor="show">Collateral</label>
          <Flex>
            <ItemRadio>
              <MyRadio
                {...controlProps('show')}
                sx={{
                  color: '#4B8DF8',
                  '&.Mui-checked': {
                    color: '#4B8DF8',
                  },
                }}
              />
            </ItemRadio>
            <ItemRadio>
              <MyRadio
                {...controlProps('off')}
                sx={{
                  color: 'green',
                  '&.Mui-checked': {
                    color: 'green',
                  },
                }}
              />
            </ItemRadio>
          </Flex>
        </FormCtrol>

        <FormCtrol
          style={{
            justifyContent: 'flex-start',
            flexDirection: 'column',
            paddingTop: '24px',
          }}
        >
          <Select
            error={Boolean(errors.mutiCurrency)}
            className="form__select--mutiselect form__select"
            id="demo-multiple-name"
            multiple
            value={mutiCurrency}
            {...register('mutiCurrency', {
              required: true,
              onChange: handleSelectMutiCurrency,
            })}
            renderValue={selected => (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {selected.map(value => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
          >
            {arrCurrency.map(item => (
              <MenuItem
                key={item.name}
                value={item.name}
                style={getStyles(item.name, mutiCurrency, theme)}
              >
                {item.name}
              </MenuItem>
            ))}
          </Select>
          {errors.mutiCurrency && <span className="error">Invalid amount</span>}
        </FormCtrol>
        <div className="form-control">
          <ButtomMaxIcon bg="dba83d" className="btn" type="submit">
            <SearchIcon /> Search
          </ButtomMaxIcon>
        </div>
      </Form>
    </Wrapper>
  );
};

export default Lend;
