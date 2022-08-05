import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ props }: any) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  if (isBrowser) {
    return ReactDOM.createPortal(
      <div>Hello from modal</div>,
      document.getElementById('portal')
    );
  } else {
    return null;
  }
};

export default Modal;
