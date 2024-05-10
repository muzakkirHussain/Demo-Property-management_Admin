import password_eye from '../assets/Common/password_eye.svg';
import React, { useState } from 'react';

const PasswordInput = ({ value, onChange, placeholder, name }) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        background: 'rgba(217, 217, 217, 0.4)',
        borderRadius: '7px',
        padding: '4px 8px',
        height: '50px',
      }}
    >
      <input
        type={isPasswordVisible ? 'text' : 'password'}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
        style={{ border: 'none' }}
      />
      <img
        src={password_eye}
        alt="password_eye"
        onClick={togglePasswordVisibility}
        style={{ cursor: 'pointer' }}
      />
    </div>
  );
};

export { PasswordInput };
