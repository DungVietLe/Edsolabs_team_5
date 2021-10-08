import { MenuItem } from '@material-ui/core';
import InfoIcon from '@mui/icons-material/Info';
import SearchIcon from '@mui/icons-material/Search';
import { SelectChangeEvent } from '@mui/material/Select';
import IMAGE_NFT_DIAMOND from 'assets/Image/Diamond.png';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ButtomBase, ButtomMaxIcon, ButtomSmall, Flex } from '../rootStyled';
import {
  FlexColumn,
  Form,
  FormCtrol,
  Image,
  Item,
  LabelTab,
  MyFlex,
  MySelect,
  MyTextField,
  TabBorrow,
  TabContent,
  Tabheader,
  Wrapper,
} from './styles';

const Borrow = function (props) {
  const [value, setValue] = useState(1);
  const handleChange = (newValue: number) => {
    setValue(newValue);
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
  const arrTimes = [{ name: 'Weeks' }, { name: 'Months' }];

  const Cryptocurrency = function (props) {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();

    const onSubmit = (data: object) => console.log(data);

    const [valueCollateral, setValueCollateral] = useState('');
    const handleChangeCollateral = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValueCollateral(e.target.value);
    };
    const [valueDuration, setValueDuration] = useState('');
    const handleChangeDuration = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValueDuration(e.target.value);
    };
    const [valueLoan, setValueLoan] = useState('');
    const handleChangeLoan = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValueLoan(e.target.value);
    };

    const [currency, setCurrency] = React.useState('');
    const [newCurrency, setNewCurrency] = React.useState('USDT');
    const [time, setTime] = React.useState('Weeks');
    const handleSelectCurrency = (event: SelectChangeEvent) => {
      setCurrency(event.target.value as string);
    };
    const handleSelectTime = (event: SelectChangeEvent) => {
      setTime(event.target.value as string);
    };
    const handleSelectNewCurrency = (event: SelectChangeEvent) => {
      setNewCurrency(event.target.value as string);
    };

    return (
      <Form onSubmit={handleSubmit(onSubmit)}>
        <MyFlex gap={10} alignItem="center">
          <FormCtrol className="left">
            <label htmlFor="collateral">Collateral</label>
            <div style={{ position: 'relative' }}>
              <MyTextField
                value={valueCollateral}
                error={Boolean(errors.collateral)}
                className="wrap--input"
                id="collateral"
                variant="outlined"
                type="text"
                placeholder="Enter amount"
                {...register('collateral', {
                  required: true,
                  pattern: /[0-9]/,
                  onChange: handleChangeCollateral,
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
                small={'true'}
              >
                Max
              </ButtomSmall>
            </div>
            {errors.collateral && <span className="error">Invalid amount</span>}
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
                onChange: handleSelectCurrency,
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
        </MyFlex>
        <FormCtrol>
          <label htmlFor="collateral">Or</label>
          <ButtomBase className="btn" outlinebutton="dba83d" type="button">
            Choose Existing collateral
          </ButtomBase>
        </FormCtrol>

        <MyFlex justifyContent="space-between" gap={10} alignItem="center">
          <FormCtrol className="left">
            <label htmlFor="collateral">Duration</label>
            <div style={{ position: 'relative' }}>
              <MyTextField
                value={valueDuration}
                error={Boolean(errors.duration)}
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
              error={Boolean(errors.time)}
              className="form__select"
              labelId="id-currency"
              id="demo-simple-select"
              placeholder="currency"
              value={time}
              {...register('time', {
                required: true,
                onChange: handleSelectTime,
              })}
            >
              {arrTimes.map((item: any, index: number) => (
                <MenuItem key={index} value={item.name}>
                  {item.name}
                </MenuItem>
              ))}
            </MySelect>
            {errors.time && <span className="error">Invalid amount</span>}
          </FormCtrol>
        </MyFlex>
        <MyFlex justifyContent="space-between" gap={10} alignItem="center">
          <FormCtrol className="left">
            <label htmlFor="collateral">Loan amount</label>
            <div style={{ position: 'relative' }}>
              <MyTextField
                value={valueLoan}
                error={errors.loan ? true : false}
                className="wrap--input"
                id="loan"
                variant="outlined"
                type="text"
                placeholder="Loan"
                {...register('loan', {
                  required: true,
                  onChange: handleChangeLoan,
                })}
              />
            </div>
            {errors.loan && <span className="error">Invalid amount</span>}
            <span className="tip">
              Recommended amount
              <InfoIcon />
            </span>
          </FormCtrol>
          <FormCtrol
            style={{
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              flexDirection: 'column',
              paddingTop: '24px',
            }}
            className="right"
          >
            <MySelect
              error={Boolean(errors.newCurrency)}
              className="form__select add_text"
              labelId="id-currency"
              id="demo-simple-select"
              placeholder="currency"
              value={newCurrency}
              {...register('newCurrency', {
                required: true,
                onChange: handleSelectNewCurrency,
              })}
            >
              {arrCurrency.map((item: any, index: number) => (
                <MenuItem key={index} value={item.name}>
                  {item.name}
                </MenuItem>
              ))}
            </MySelect>
            {errors.newCurrency && (
              <span className="error">Invalid amount</span>
            )}
          </FormCtrol>
        </MyFlex>
        <div className="form-control" style={{ marginTop: '60px' }}>
          <ButtomMaxIcon bg="dba83d" className="btn" type="submit">
            <SearchIcon /> Search
          </ButtomMaxIcon>
        </div>
      </Form>
    );
  };

  const NFT = function (props) {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
    const onSubmit = (data: object) => console.log(data);
    return (
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FlexColumn style={{ marginBottom: '52px' }}>
          <Image>
            <img src={IMAGE_NFT_DIAMOND} alt="" />
          </Image>
          <Flex justifyContent="space-between" flexColumn={768} gap={20}>
            <FlexColumn gap={20}>
              <Item>
                1. Create <span>asset</span>
              </Item>
              <Item>
                2. Get <span>asset evaluation</span>
              </Item>
            </FlexColumn>
            <FlexColumn gap={20}>
              <Item>
                3. Receive <span>hard NFT</span>
              </Item>
              <Item>
                5. List on <span>Pawn/Exchange</span>
              </Item>
            </FlexColumn>
          </Flex>
        </FlexColumn>
        <Flex justifyContent="center" style={{ marginBottom: '35px' }}>
          <ButtomSmall className="btn" bg="dba83d">
            Create hard NFT
          </ButtomSmall>
        </Flex>
      </Form>
    );
  };

  const Content = value === 1 ? <Cryptocurrency /> : value === 2 ? <NFT /> : '';

  return (
    <Wrapper>
      <TabBorrow>
        <Tabheader>
          <LabelTab
            onClick={() => handleChange(1)}
            className={value === 1 ? 'active' : ''}
          >
            Cryptocurrency
          </LabelTab>
          <LabelTab
            onClick={() => handleChange(2)}
            className={value === 2 ? 'active' : ''}
          >
            NFT
          </LabelTab>
        </Tabheader>
        <TabContent>{Content}</TabContent>
      </TabBorrow>
    </Wrapper>
  );
};

export default Borrow;
