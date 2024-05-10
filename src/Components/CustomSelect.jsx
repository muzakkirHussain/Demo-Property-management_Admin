import React from 'react';
import Select from 'react-select';

const CustomSelect = (props) => {
  const {
    selectedOption,
    handleSelectChange,
    options,
    placeholder = 'Select an option',
    name = '',
  } = props;
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: 'white', // Background color of the control
      borderColor: state.isFocused ? 'rgba(129, 126, 255, 0.8)' : '#ccc', // Border color when focused
      borderRadius: '8px', // Border radius
      boxShadow: state.isFocused
        ? '0 0 0 1px rgba(129, 126, 255, 0.8)'
        : 'none', // Box shadow when focused
      '&:hover': {
        borderColor: '#aaa', // Border color on hover
      },
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? 'rgba(129, 126, 255, 0.8)' : 'white', // Background color of the options
      color: state.isFocused ? 'white' : 'black', // Text color of the options
      '&:hover': {
        backgroundColor: 'rgba(129, 126, 255, 0.8)', // Background color on hover
        color: 'white',
      },
    }),
    singleValue: (provided) => ({
      ...provided,
      color: 'black',
    }),
  };
  return (
    <Select
      name={name}
      value={selectedOption}
      onChange={(e) => {
        handleSelectChange(e);
      }}
      options={options}
      placeholder={placeholder}
      isClearable={false}
      isSearchable={true}
      styles={customStyles}
    />
  );
};

export { CustomSelect };
