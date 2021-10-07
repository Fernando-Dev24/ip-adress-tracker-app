import React from 'react';
import ReactDOM from 'react-dom';
import { IpAdressApp } from './IpAdressApp';
/* Contexts */
import { IpProvider } from './contexts/IpContext';
/* Sources */
import './index.css';

ReactDOM.render(
   <IpProvider>
      <IpAdressApp />
   </IpProvider>,
   document.getElementById('root')
);