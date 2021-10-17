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
  const { data, styleSelect, value, onChange, error } = props;
  const border = error ? 'red' : '#74767B';
  const hover = error ? 'red' : '#fff';
  const focusError = error ? 'red' : 'rgb(248, 176, 23)';
  const focusBox = error ? 'none' : 'rgb(248, 176, 23)';
  const styles = {
    option: (provided, state) => ({
      ...provided,
      fontWeight: state.isSelected ? 'bold' : 'normal',
      color: 'white',
      backgroundColor: '#2F3543',
      fontSize: state.selectProps.myFontSize,
      '&:hover': {
        backgroundColor: 'rgba(219,168,61,0.3)',
      },

      display: 'flex',
      alignItems: 'center',
      gap: '5px',
      '@media (max-width:600px)': {
        padding: '7px 8px',
      },
    }),
    multiValue: (provided, state) => ({
      ...provided,
      fontSize: state.selectProps.myFontSize,
      borderRadius: '16.5px',
      padding: '2px 2px 2px 4px',
      margin: '0px',
      marginRight: '2px',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      color: '#fff !important',
      '@media(max-width:768px)': {
        marginTop: '0px',
        padding: '2px 2px 2px 4px',
      },
    }),
    singleValue: (provided, state) => ({
      ...provided,
      fontSize: state.selectProps.myFontSize,
      backgroundColor: 'transparent',
      borderRadius: '10px',
      padding: '0px 7px',
      color: '#fff !important',
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      '@media(max-width:768px)': {
        padding: '0px 3px',
        fontSize: 14,
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
      // overflow: 'hidden',
    }),
    menuList: provided => ({
      ...provided,
      maxHeight: '200px',
      position: 'absolute',
      backgroundColor: '#2F3543',
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
      display: 'flex',
      alignItems: 'center',
      gap: '5px',
      backgroundColor: 'rgba(#FFF,0.1)',
      borderRadius: '16.5px',
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
      padding: '6.5px 0',
      '@media(max-width:768px)': {
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
      '@media(max-width:768px)': {
        marginBottom: '0px',
      },
    }),
    valueContainer: provided => ({
      ...provided,
      '@media(max-width:768px)': {
        padding: '1.5px 3px',
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
      transition: 'border 0.2s ease-in-out',
      background: 'transparent',
      '&:hover': {
        borderColor: hover,
      },
      '&:focus-within': {
        borderColor: focusError,
        boxShadow: `0px 0px 0px 1px ${focusBox}`,
      },
    }),
  };

  return styleSelect ? (
    <Select
      isMulti
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
      defaultValue={value}
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
