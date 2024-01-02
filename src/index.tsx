import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './Layout';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import createTheme from '@mui/material/styles/createTheme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={createTheme()}>
      <Layout meridian="LI" />
    </ThemeProvider>
  </React.StrictMode>
);
