import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './Layout';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Layout meridian="HT" />
  </React.StrictMode>
);
