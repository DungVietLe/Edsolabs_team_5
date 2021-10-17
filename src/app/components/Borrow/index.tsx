import InfoIcon from '@mui/icons-material/Info';

import IMAGE_NFT_DIAMOND from 'assets/Image/Diamond.png';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { listCoin, listLoan } from '../Filter/DataCoin';
import { useHistory } from 'react-router';
import ImageIcon from '../ImageIcon';
import { ButtomBase, ButtomMaxIcon, ButtomSmall, Flex } from '../rootStyled';
import { NewSelect } from '../Selecter';
import {
  FlexColumn,
  Form,
  FormCtrol,
  Image,
  Item,
  LabelTab,
  MyTextField,
  TabBorrow,
  TabContent,
  Tabheader,
  Wrapper,
} from './styles';
import queryString from 'query-string';
import { Tooltip } from '@mui/material';
import { messages } from './messages';
import { useTranslation } from 'react-i18next';
const Borrow = function (props) {
  const { t } = useTranslation();
  const [value, setValue] = useState(1);
  const handleChange = (newValue: number) => {
    setValue(newValue);
  };
  const arrCurrency = listCoin.map((item, key) => ({
    value: item.value,
    label: [<ImageIcon key={key} src={item.url} />, item.value],
  }));

  const arrLoan = listLoan.map((item, key) => ({
    value: item.value,
    label: [<ImageIcon key={key} src={item.url} />, item.value],
  }));

  const arrTimes = [
    { value: '0', label: 'Weeks' },
    { value: '1', label: 'Months' },
  ];

  const Cryptocurrency = function (props) {
    const history = useHistory();
    const {
      handleSubmit,
      register,
      formState: { errors },
      control,
    } = useForm();
    const onSubmit = (data: any) => {
      const newObj = {
        collateralAmount: Number(data.collateral),
        collateralSymbols: data.currency.value,
        durationQty: Number(data.duration),
        durationTypes: Boolean(data.timer) ? data.timer.value : '0',

        loanAmount: Number(data.loan),
        loanSymbols: Boolean(data.newCurrency) ? data.newCurrency.value : 'DFY',
        status: 3,
        size: 10,
      };

      history.push({
        pathname: '/pawn/offer',
        search: queryString.stringify(newObj),
      });
    };

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

    return (
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Flex gap={10} alignItem="stretch">
          <FormCtrol className="left">
            <label htmlFor="collateral">{t(messages.heroBorrow())}</label>
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
            {errors.collateral && <div className="error">Invalid amount</div>}
          </FormCtrol>
          <FormCtrol
            style={{
              justifyContent: 'flex-start',
              flexDirection: 'column',
              paddingTop: '26px',
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
                  key={123}
                  error={Boolean(errors.currency)}
                  value={value}
                  onChange={onChange}
                  data={arrCurrency}
                  styleSelect={false}
                />
              )}
            />
            {errors.currency && <div className="error">Invalid amount</div>}
          </FormCtrol>
        </Flex>
        <FormCtrol>
          <label htmlFor="collateral">{t(messages.heroOr())}</label>
          <ButtomBase className="btn" outlinebutton="dba83d" type="button">
            {t(messages.heroChose())}
          </ButtomBase>
        </FormCtrol>

        <Flex justifyContent="space-between" gap={10} alignItem="stretch">
          <FormCtrol className="left" style={{ marginBottom: '4px' }}>
            <label htmlFor="collateral">{t(messages.heroDuration())}</label>
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
              paddingTop: '26px',
              zIndex: 2,
            }}
            className="right"
          >
            <Controller
              control={control}
              name="timer"
              render={({ field: { onChange, value, ref } }) => (
                <NewSelect
                  key={345}
                  value={arrTimes[0]}
                  onChange={onChange}
                  data={arrTimes}
                  styleSelect={false}
                />
              )}
            />
          </FormCtrol>
        </Flex>
        <Flex justifyContent="space-between" gap={10} alignItem="stretch">
          <FormCtrol className="left">
            <label htmlFor="collateral">{t(messages.heroLoanAmount())}</label>
            <div style={{ position: 'relative' }}>
              <MyTextField
                value={valueLoan}
                error={errors.loan ? true : false}
                className="wrap--input"
                id="loan"
                variant="outlined"
                type="text"
                placeholder="Enter amount"
                {...register('loan', {
                  required: true,
                  pattern: /[0-9]/,
                  onChange: handleChangeLoan,
                })}
              />
            </div>
            {errors.loan && <div className="error">Invalid amount</div>}

            <div className="box-tip" style={{ display: 'inline-block' }}>
              {t(messages.heroRecomment())}
              <Tooltip
                style={{ display: 'inline' }}
                className="tip"
                title="To get a quickly, you should set the desired loan amount between 50 - 70% of the collateral value"
                arrow
              >
                <InfoIcon />
              </Tooltip>
            </div>
          </FormCtrol>
          <FormCtrol
            style={{
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              flexDirection: 'column',
              paddingTop: '26px',
              zIndex: 1,
            }}
            className="right"
          >
            <Controller
              control={control}
              name="newCurrency"
              render={({ field: { onChange, value, ref } }) => (
                <NewSelect
                  key={4567}
                  value={arrLoan[0]}
                  onChange={onChange}
                  data={arrLoan}
                  styleSelect={false}
                />
              )}
            />
          </FormCtrol>
        </Flex>
        <div
          className="form-control button"
          style={{
            marginTop: '60px',
            marginBottom: '30px',
          }}
        >
          <ButtomMaxIcon
            bg="dba83d"
            style={{ fontSize: '20px' }}
            className="btn"
            type="submit"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M9.16667 15.612C12.8486 15.612 15.8333 12.5806 15.8333 8.84115C15.8333 5.10172 12.8486 2.07031 9.16667 2.07031C5.48477 2.07031 2.5 5.10172 2.5 8.84115C2.5 12.5806 5.48477 15.612 9.16667 15.612Z"
                stroke="#282C37"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.4998 17.3047L13.8748 13.623"
                stroke="#282C37"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {t(messages.heroSearch())}
          </ButtomMaxIcon>
        </div>
      </Form>
    );
  };

  const NFT = function (props) {
    const { handleSubmit } = useForm();
    const onSubmit = (data: object) => data;
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
            {t(messages.heroCryptocurrency())}
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
