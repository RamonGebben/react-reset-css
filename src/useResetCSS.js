import { useEffect } from 'react';
import reset from './reset';

const useResetCSS = () => {
  useEffect(() => {
    const styleTag = global.document.createElement('style');
    styleTag.id = 'react-reset-css';
    styleTag.innerHTML = reset;

    global.document.head.appendChild(styleTag);

    return () => {
      styleTag.remove();
    }
  }, []);
};

export default useResetCSS;

