import React from 'react';
import useResetCSS from './useResetCSS';

const ResetCSS = ({ children }) => {
  useResetCSS();

  return (
    <>
      {children}
    </>
  );
}

export default ResetCSS;
