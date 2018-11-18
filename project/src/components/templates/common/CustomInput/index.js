import React from 'react';

const CustomInput = (props) => {
  const { className, type, placeholder } = props;
  const customClass = className === undefined ? '' : className;
  return (
    <input type={type} className={`custom-input ${customClass}`} placeholder={placeholder} />
  );
};

export default CustomInput;
