import InfoIcon from '@mui/icons-material/Info';
import SearchIcon from '@mui/icons-material/Search';
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
        durationTypes: Number(data.timer.value),
        loanAmount: Number(data.loan),
        loanSymbols: data.newCurrency.value,
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
            {errors.collateral && <span className="error">Invalid amount</span>}
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
            {errors.currency && <span className="error">Invalid amount</span>}
          </FormCtrol>
        </Flex>
        <FormCtrol>
          <label htmlFor="collateral">{t(messages.heroOr())}</label>
          <ButtomBase className="btn" outlinebutton="dba83d" type="button">
            Choose Existing collateral
          </ButtomBase>
        </FormCtrol>

        <Flex justifyContent="space-between" gap={10} alignItem="stretch">
          <FormCtrol className="left">
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
              paddingTop: '26px',
              zIndex: 2,
            }}
            className="right"
          >
            <Controller
              control={control}
              name="timer"
              rules={{
                required: true,
              }}
              render={({ field: { onChange, value, ref } }) => (
                <NewSelect
                  key={345}
                  error={Boolean(errors.timer)}
                  value={arrTimes[0]}
                  onChange={onChange}
                  data={arrTimes}
                  styleSelect={false}
                />
              )}
            />
            {errors.timer && <span className="error">Invalid amount</span>}
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
                placeholder="Loan"
                {...register('loan', {
                  required: true,
                  onChange: handleChangeLoan,
                })}
              />
            </div>
            {errors.loan && <span className="error">Invalid amount</span>}
            <span className="tip">
              {t(messages.heroRecomment())}
              <InfoIcon />
            </span>
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
              rules={{
                required: true,
              }}
              render={({ field: { onChange, value, ref } }) => (
                <NewSelect
                  key={4567}
                  error={Boolean(errors.newCurrency)}
                  value={arrLoan[0]}
                  onChange={onChange}
                  data={arrLoan}
                  styleSelect={false}
                />
              )}
            />
            {errors.newCurrency && (
              <span className="error">Invalid amount</span>
            )}
          </FormCtrol>
        </Flex>
        <div className="form-control" style={{ marginTop: '60px' }}>
          <ButtomMaxIcon
            bg="dba83d"
            style={{ fontSize: '20px' }}
            className="btn"
            type="submit"
          >
            <SearchIcon /> {t(messages.heroSearch())}
          </ButtomMaxIcon>
        </div>
      </Form>
    );
  };

  const NFT = function (props) {
    const { handleSubmit } = useForm();
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
