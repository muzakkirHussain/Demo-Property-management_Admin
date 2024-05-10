import React from 'react';

const CustomInput = ({ label, value, onChange, placeholder, name, type }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flexStart',
        flexDirection: 'column',
        gap: '10px',
      }}
    >
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
        style={{
          height: '30px',
          width: '100%',
          border: '0.5px solid #00000040',
          padding: '5px 10px ',
          borderRadius: '10px',
        }}
      />
    </div>
  );
};

export default CustomInput;
