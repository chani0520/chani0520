import { Component } from 'react';
import ReactDOM from 'react-dom';

export type Portal = {
  children: Component;
  selector: string;
};

const Portal = ({ children, selector }: Portal) => {
  const element =
    typeof window !== 'undefined' && document.querySelector(selector);
  return element && children ? ReactDOM.createPortal(children, element) : null;
};

export default Portal;
