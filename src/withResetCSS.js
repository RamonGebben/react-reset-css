import React from 'react';
import useResetCSS from './useResetCSS';

const withResetCSS = (C) => {
  return (props) => {
    useResetCSS();
    return <C {...props} />
  }
};

export default withResetCSS;
