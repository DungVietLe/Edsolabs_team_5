import { MenuItem } from '@material-ui/core';
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { ButtomBase, ButtomMaxIcon, ButtomSmall, Flex } from '../rootStyled';
import { SelectChangeEvent } from '@mui/material/Select';
import SearchIcon from '@mui/icons-material/Search';
import InfoIcon from '@mui/icons-material/Info';
import IMAGE_NFT_DIAMOND from 'assets/Image/Diamond.png';
import {
  Form,
  MyFlex,
  FormCtrol,
  MyTextField,
  Tabheader,
  TabBorrow,
  LabelTab,
  TabContent,
  Wrapper,
  FlexColumn,
  Item,
  Image,
} from './styles';
import ICON_ITEM from 'assets/Image/BNB.png';
import { NewSelect } from '../Selecter';
interface propsImg {
  src?: any;
}
export const ImageIcon = (props: propsImg) => {
  const { src } = props;
  return (
    <img
      style={{ display: 'inline-block', width: '15px', height: '15px' }}
      src={src}
    />
  );
};

const Borrow = function (props) {
  const [value, setValue] = useState(1);
  const handleChange = (newValue: number) => {
    setValue(newValue);
  };
  const arrCurrency = [
    { value: 'BNB', label: [<ImageIcon src={ICON_ITEM} />, ' BNB'] },
    { value: 'ETC', label: [<ImageIcon src={ICON_ITEM} />, ' ETC'] },
    { value: 'ZEC', label: [<ImageIcon src={ICON_ITEM} />, ' ZEC'] },
    { value: 'XRP', label: [<ImageIcon src={ICON_ITEM} />, ' XRP'] },
    { value: 'LTC', label: [<ImageIcon src={ICON_ITEM} />, ' LTC'] },
    { value: 'MKR', label: [<ImageIcon src={ICON_ITEM} />, ' MKR'] },
    { value: 'MKR', label: [<ImageIcon src={ICON_ITEM} />, ' MKR'] },
    { value: 'BTC', label: [<ImageIcon src={ICON_ITEM} />, ' BTC'] },
    { value: 'ETH', label: [<ImageIcon src={ICON_ITEM} />, ' ETH'] },
    { value: 'DEF', label: [<ImageIcon src={ICON_ITEM} />, ' DEF'] },
    { value: 'USDT', label: [<ImageIcon src={ICON_ITEM} />, ' USDT'] },
    { value: 'FIL', label: [<ImageIcon src={ICON_ITEM} />, ' FIL'] },
    { value: 'IOTX', label: [<ImageIcon src={ICON_ITEM} />, ' IOTX'] },
    { value: 'PAX', label: [<ImageIcon src={ICON_ITEM} />, ' PAX'] },
    { value: 'ONT', label: [<ImageIcon src={ICON_ITEM} />, ' ONT'] },
    { value: 'SNX', label: [<ImageIcon src={ICON_ITEM} />, ' SNX'] },
    { value: 'SXP', label: [<ImageIcon src={ICON_ITEM} />, ' SXP'] },
    { value: 'BAND', label: [<ImageIcon src={ICON_ITEM} />, ' BAND'] },
    { value: 'DOT', label: [<ImageIcon src={ICON_ITEM} />, ' DOT'] },
    { value: 'BEF', label: [<ImageIcon src={ICON_ITEM} />, ' BEF'] },
    { value: 'ELF', label: [<ImageIcon src={ICON_ITEM} />, ' ELF'] },
    { value: 'TCT', label: [<ImageIcon src={ICON_ITEM} />, ' TCT'] },
    { value: 'LINK', label: [<ImageIcon src={ICON_ITEM} />, ' LINK'] },
    { value: 'ADA', label: [<ImageIcon src={ICON_ITEM} />, ' ADA'] },
    { value: 'EOS', label: [<ImageIcon src={ICON_ITEM} />, ' EOS'] },
    { value: 'INJ', label: [<ImageIcon src={ICON_ITEM} />, ' INJ'] },
    { value: 'UNI', label: [<ImageIcon src={ICON_ITEM} />, ' UNI'] },
    { value: 'NEAR', label: [<ImageIcon src={ICON_ITEM} />, ' NEAR'] },
    { value: 'ATOM', label: [<ImageIcon src={ICON_ITEM} />, ' ATOM'] },
    { value: 'COMP', label: [<ImageIcon src={ICON_ITEM} />, ' COMP'] },
    { value: 'YFI', label: [<ImageIcon src={ICON_ITEM} />, ' YFI'] },
    { value: 'YFII', label: [<ImageIcon src={ICON_ITEM} />, ' YFII'] },
    { value: 'XTZ', label: [<ImageIcon src={ICON_ITEM} />, ' XTZ'] },
    { value: 'WBNB', label: [<ImageIcon src={ICON_ITEM} />, ' WBNB'] },
    { value: 'DOGE', label: [<ImageIcon src={ICON_ITEM} />, ' DOGE'] },
  ];
  const arrTimes = [
    { value: 'Weeks', label: 'Weeks' },
    { value: 'Months', label: 'Months' },
  ];

  const Cryptocurrency = function (props) {
    const {
      handleSubmit,
      register,
      formState: { errors },
      control,
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

    const [currency, setCurrency] = useState('');
    const [newCurrency, setNewCurrency] = useState('USDT');
    const [time, setTime] = useState('Weeks');
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
        <MyFlex gap={10} alignItem="stretch">
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
        </MyFlex>
        <FormCtrol>
          <label htmlFor="collateral">Or</label>
          <ButtomBase className="btn" outlinebutton="dba83d" type="button">
            Choose Existing collateral
          </ButtomBase>
        </FormCtrol>

        <MyFlex justifyContent="space-between" gap={10} alignItem="stretch">
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
        </MyFlex>
        <MyFlex justifyContent="space-between" gap={10} alignItem="stretch">
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
                  error={Boolean(errors.newCurrency)}
                  value={arrCurrency[0]}
                  onChange={onChange}
                  data={arrCurrency}
                  styleSelect={false}
                />
              )}
            />
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
