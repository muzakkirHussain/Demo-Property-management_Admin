import React from 'react';
import '../Styles/Components/Button.scss';

const Button = (props) => {
  const { title, handleClick, active, disabled, styles = '' } = props;
  return (
    <span>
      <button
        className={`customButton ${active && 'activeCustomButton'}`}
        onClick={handleClick}
        disabled={disabled || false}
        style={{
          ...styles,
        }}
      >
        {title}
      </button>
    </span>
  );
};

export { Button };
