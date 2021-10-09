import Select from 'react-select';

interface props {
  data?: any;
  styleSelect?: boolean;
  value?: any;
  mutiValue?: any;
  onChange?: any;
  error?: boolean;
}

export function NewSelect(props: props) {
  const { data, styleSelect, value, onChange, mutiValue, error } = props;
  const border = error ? 'red' : '#74767B';

  const styles = {
    option: (provided, state) => ({
      ...provided,
      fontWeight: state.isSelected ? 'bold' : 'normal',
      color: 'white',
      backgroundColor: '#161614',
      fontSize: state.selectProps.myFontSize,
      '&:hover': {
        backgroundColor: '#050504',
      },
    }),
    multiValue: (provided, state) => ({
      ...provided,
      fontSize: state.selectProps.myFontSize,
      backgroundColor: 'transparent',
      borderRadius: '10px',
      padding: '0px 7px',
      color: '#fff !important',
    }),
    singleValue: (provided, state) => ({
      ...provided,
      fontSize: state.selectProps.myFontSize,
      backgroundColor: 'transparent',
      borderRadius: '10px',
      padding: '0px 7px',
      color: '#fff !important',
      '@media(max-width:600px)': {
        padding: '0px 3px',
      },
    }),
    indicatorsContainer: provided => ({
      ...provided,
      '& > div': {
        padding: '8px 5px 8px 0',
      },
    }),
    menu: provided => ({
      ...provided,
      backgroundColor: '#161614',
      borderRadius: '3px',
    }),
    menuList: provided => ({
      ...provided,
      maxHeight: '200px',
      position: 'absolute',
      width: '100%',
      zIndex: 10,
    }),
    multiValueRemove: () => ({
      color: '#fff',
      backgroundColor: 'transparent',
      borderRadius: '10px',
    }),
    multiValueLabel: provided => ({
      ...provided,
      color: '#fff',
    }),
    singleValueLabel: provided => ({
      ...provided,
      color: '#fff',
      fontSize: 14,
    }),
    container: provided => ({
      ...provided,
      width: '100%',
    }),
    input: provided => ({
      ...provided,
      fontSize: 14,
      padding: '8.5px 0',
      '@media(max-width:600px)': {
        padding: '5px 0',
      },
    }),
    placeholder: provided => ({
      ...provided,
      fontSize: '16px',
      maxHeight: '30px',
      marginBottom: '3px',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      '@media(max-width:600px)': {
        marginBottom: '0px',
      },
    }),
    valueContainer: provided => ({
      ...provided,
      '@media(max-width:600px)': {
        padding: '2px 3px',
      },
    }),

    control: provided => ({
      ...provided,
      backgroundColor: 'white',
      outline: 'none',
      borderRadius: '22px',
      boxShadow: 'none',
      borderColor: border,
      borderWidth: '1px',
      maxHeight: '44px',
      background: 'transparent',
      '&:hover': {
        borderColor: '#fff',
      },
      '&:focus': {
        borderColor: '#fff',
      },
    }),
  };

  return styleSelect ? (
    <Select
      key={1}
      isMulti
      value={mutiValue}
      onChange={onChange}
      components={{
        IndicatorSeparator: () => null,
      }}
      placeholder="Currency"
      options={data}
      styles={styles}
    />
  ) : (
    <Select
      key={2}
      defaultValue={value}
      value={value}
      onChange={onChange}
      components={{
        IndicatorSeparator: () => null,
      }}
      placeholder="Currency"
      options={data}
      styles={styles}
    />
  );
}
