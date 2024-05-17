import React from 'react';
import ReactDOM from 'react-dom/client';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import createTheme from '@mui/material/styles/createTheme';
import ChannelPicker from './ChannelPicker';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ThemeProvider theme={createTheme()}>
    <ChannelPicker></ChannelPicker>
    {/* <HouseAndPointsLayout meridian="UB" /> */}
  </ThemeProvider>
);
