import React from 'react';
import { Link } from 'react-router-dom';

const CustomLink = (props) => {
  const { className, text, href } = props;
  const customClass = className === undefined ? '' : className;
  return (
    <Link className={`custom-link ${customClass}`} to={href}>{text}</Link>
  );
};

export default CustomLink;
