import SearchIcon from '@mui/icons-material/Search';
import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import queryString from 'query-string';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { listCoin, listLoan } from '../Filter/DataCoin';
import ImageIcon from '../ImageIcon';
import { ButtomMaxIcon, ButtomSmall, Flex } from '../rootStyled';
import { NewSelect } from '../Selecter';
import { Form, FormCtrol, MyTextField, Wrapper } from './style';
import { messages } from '../Borrow/messages';
import { useTranslation } from 'react-i18next';
interface propsImg {
  src?: any;
}

const Lend = () => {
  const { t } = useTranslation();
  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
  } = useForm();
  const [isRadio, setIsRadio] = useState('true');
  const handleChangeIsRadio = e => {
    setIsRadio(e.target.value);
  };
  const [valueMaxLoan, setValueMaxLoan] = useState('');
  const [valueDuration, setValueDuration] = useState('');
  const history = useHistory();
  const onSubmit = (data: any) => {
    if (Boolean(data.mutiCurrency)) {
      const mutiCurrencyStr = data.mutiCurrency
        .map(e => {
          return e.value;
        })
        .join(',');
      const newObj = {
        collateralSymbols: mutiCurrencyStr,
        loanSymbols: data.currency.value,
        durationTypes: Boolean(data.timer) ? Number(data.timer.value) : '0',
        size: 10,
      };

      history.push({
        pathname: '/pawn/lender',
        search: queryString.stringify(newObj),
      });
    } else {
      const newObj = {
        loanSymbols: data.currency.value,
        durationTypes: Boolean(data.timer) ? Number(data.timer.value) : '0',
        loanAmount: Number(data.maxLoan),
        size: 10,
      };

      history.push({
        pathname: '/pawn/lender/nft-result',
        search: queryString.stringify(newObj),
      });
    }
  };
  const handleChangeMaxLoan = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueMaxLoan(e.target.value);
  };

  const handleChangeDuration = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueDuration(e.target.value as string);
  };
  const arrCurrency = listCoin.map((item, key) => ({
    value: item.value,
    label: [<ImageIcon key={key} src={item.url} />, item.value],
  }));
  const arrTimes = [
    { value: '0', label: 'Weeks' },
    { value: '1', label: 'Months' },
  ];
  const arrLoan = listLoan.map((item, key) => ({
    value: item.value,
    label: [<ImageIcon key={key} src={item.url} />, item.value],
  }));

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Flex gap={10} alignItem="center">
          <FormCtrol className="left">
            <label htmlFor="maxLoan">{t(messages.heroMax())}</label>
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
            {errors.maxLoan && <div className="error">Invalid amount</div>}
          </FormCtrol>
          <FormCtrol
            style={{
              justifyContent: 'flex-start',
              flexDirection: 'column',
              paddingTop: '24px',
              zIndex: 3,
            }}
            className="right"
          >
            <Controller
              control={control}
              name="currency"
              rules={{
                required: true,
              }}
              render={({ field: { onChange, value, ref } }) => (
                <NewSelect
                  key={1234}
                  error={Boolean(errors.currency)}
                  value={value}
                  onChange={onChange}
                  data={arrLoan}
                  styleSelect={false}
                />
              )}
            />
            {errors.currency && <div className="error">Invalid amount</div>}
          </FormCtrol>
        </Flex>
        <Flex justifyContent="space-between" gap={10} alignItem="center">
          <FormCtrol className="left">
            <label htmlFor="collateral">{t(messages.heroDuration())}</label>
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
                  pattern: /[0-9]/,
                  onChange: handleChangeDuration,
                })}
              />
            </div>
            {errors.duration && <div className="error">Invalid amount</div>}
          </FormCtrol>
          <FormCtrol
            style={{
              justifyContent: 'flex-start',
              flexDirection: 'column',
              paddingTop: '24px',
              zIndex: 2,
            }}
            className="right"
          >
            <Controller
              control={control}
              name="timer"
              render={({ field: { onChange, value, ref } }) => (
                <NewSelect
                  key={123}
                  value={arrTimes[0]}
                  onChange={onChange}
                  data={arrTimes}
                  styleSelect={false}
                />
              )}
            />
          </FormCtrol>
        </Flex>
        <FormCtrol style={{ minHeight: '60px' }}>
          <label htmlFor="show">{t(messages.heroCollateral())}</label>
          <Flex>
            <RadioGroup
              aria-label="Collateral"
              value={isRadio}
              name="radio-buttons-group"
              style={{ display: 'flex', gap: '30px', flexDirection: 'row' }}
            >
              <FormControlLabel
                label={t(messages.heroCryptocurrency())}
                control={
                  <Radio
                    name="radio-buttons-group"
                    onChange={handleChangeIsRadio}
                    value="true"
                    checked={isRadio === 'true'}
                    sx={{
                      color: '#fff',
                      '&.Mui-checked': {
                        color: '#DBA83D',
                      },
                    }}
                  />
                }
              />
              <FormControlLabel
                label="NFT"
                control={
                  <Radio
                    name="radio-buttons-group"
                    onChange={handleChangeIsRadio}
                    value="false"
                    checked={isRadio === 'false'}
                    sx={{
                      color: '#fff',
                      '&.Mui-checked': {
                        color: '#DBA83D',
                      },
                    }}
                  />
                }
              />
            </RadioGroup>
          </Flex>
        </FormCtrol>
        {isRadio === 'true' ? (
          <FormCtrol
            style={{
              zIndex: 1,
              height: '50px',
            }}
          >
            <Controller
              control={control}
              name="mutiCurrency"
              rules={{
                required: true,
              }}
              render={({ field: { onChange, value, ref } }) => (
                <NewSelect
                  error={Boolean(errors.mutiCurrency)}
                  mutiValue={value}
                  onChange={onChange}
                  data={arrCurrency}
                  styleSelect={true}
                />
              )}
            />
            {errors.mutiCurrency && <div className="error">Invalid amount</div>}
          </FormCtrol>
        ) : (
          ''
        )}

        <div className="form-control" style={{ marginTop: '30px' }}>
          <ButtomMaxIcon bg="dba83d" className="btn" type="submit">
            <SearchIcon /> {t(messages.heroSearch())}
          </ButtomMaxIcon>
        </div>
      </Form>
    </Wrapper>
  );
};

export default Lend;
