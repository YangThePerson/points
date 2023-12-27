import { Box, Paper, TextField } from '@mui/material';
import React, { useState } from 'react';
import Meridians from './Meridians';

const OtherPoints = ({ meridian }: { meridian: string }) => {
  const [Meridian, setMeridian] = useState(Meridians[meridian]!);

  return (
    <Box
      p={'20px'}
      position={'relative'}
      height="660px"
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
    >
      <Paper sx={{ p: '5px', m: '5px' }}>
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          width={'50px'}
          height={'50px'}
        >
          <polygon
            points="100,10 190,80 160,190 40,190 10,80"
            fill="none"
            stroke="#000000"
            strokeWidth={1}
            fillRule="evenodd"
          />
        </svg>
        <TextField
          label={'Horary'}
          defaultValue={Meridian.Horary}
          InputProps={{
            inputProps: {
              maxLength: 4,
              style: { textAlign: 'center' },
            },
          }}
          sx={{
            m: '0px 5px',
            maxWidth: '200px',
            '& input[type=number]': {
              '-moz-appearance': 'textfield',
            },
            '& input[type=number]::-webkit-outer-spin-button': {
              '-webkit-appearance': 'none',
              margin: 0,
            },
            '& input[type=number]::-webkit-inner-spin-button': {
              '-webkit-appearance': 'none',
              margin: 0,
            },
          }}
        />
      </Paper>
      <Paper sx={{ p: '5px', m: '5px' }}>
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          width={'50px'}
          height={'50px'}
        >
          <polygon
            points="100,10 10,190 190,190"
            fill="none"
            stroke="#000000"
            strokeWidth={1}
            fillRule="evenodd"
          />
        </svg>
        <TextField
          label={'Mother / Tonification'}
          defaultValue={Meridian.Tonification}
          InputProps={{
            inputProps: {
              maxLength: 4,
              style: { textAlign: 'center' },
            },
          }}
          sx={{
            m: '0px 5px',
            maxWidth: '200px',
            '& input[type=number]': {
              '-moz-appearance': 'textfield',
            },
            '& input[type=number]::-webkit-outer-spin-button': {
              '-webkit-appearance': 'none',
              margin: 0,
            },
            '& input[type=number]::-webkit-inner-spin-button': {
              '-webkit-appearance': 'none',
              margin: 0,
            },
          }}
        />
      </Paper>
      <Paper sx={{ p: '5px', m: '5px' }}>
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          width={'50px'}
          height={'50px'}
        >
          <circle
            cx="100"
            cy="100"
            r="90"
            fill="none"
            stroke="#000000"
            strokeWidth={1}
            fillRule="evenodd"
          />
        </svg>{' '}
        <TextField
          label={'Son / Sedation'}
          defaultValue={Meridian.Sedation}
          InputProps={{
            inputProps: {
              maxLength: 4,
              style: { textAlign: 'center' },
            },
          }}
          sx={{
            m: '0px 5px',
            maxWidth: '200px',
            '& input[type=number]': {
              '-moz-appearance': 'textfield',
            },
            '& input[type=number]::-webkit-outer-spin-button': {
              '-webkit-appearance': 'none',
              margin: 0,
            },
            '& input[type=number]::-webkit-inner-spin-button': {
              '-webkit-appearance': 'none',
              margin: 0,
            },
          }}
        />
      </Paper>
      <Paper sx={{ p: '5px', m: '5px' }}>
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          width={'50px'}
          height={'50px'}
        >
          <polygon
            points="190,10 190,190 10,190 10,10"
            fill="none"
            stroke="#000000"
            strokeWidth={1}
            fillRule="evenodd"
          />
        </svg>{' '}
        <TextField
          label={'Source'}
          defaultValue={Meridian.Source}
          InputProps={{
            inputProps: {
              maxLength: 4,
              style: { textAlign: 'center' },
            },
          }}
          sx={{
            m: '0px 5px',
            maxWidth: '200px',
            '& input[type=number]': {
              '-moz-appearance': 'textfield',
            },
            '& input[type=number]::-webkit-outer-spin-button': {
              '-webkit-appearance': 'none',
              margin: 0,
            },
            '& input[type=number]::-webkit-inner-spin-button': {
              '-webkit-appearance': 'none',
              margin: 0,
            },
          }}
        />
      </Paper>
      <Paper sx={{ p: '5px', m: '5px' }}>
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          width={'50px'}
          height={'50px'}
        >
          <polygon
            points="100,10 125,90 190,90 140,130 160,190 100,150 40,190 60,130 10,90 75,90"
            fill="none"
            stroke="#000000"
            strokeWidth={1}
            fillRule="evenodd"
          />
        </svg>{' '}
        <TextField
          label={'Luo Connecting'}
          defaultValue={Meridian.Luo_Connecting}
          InputProps={{
            inputProps: {
              maxLength: 4,
              style: { textAlign: 'center' },
            },
          }}
          sx={{
            m: '0px 5px',
            maxWidth: '200px',
            '& input[type=number]': {
              '-moz-appearance': 'textfield',
            },
            '& input[type=number]::-webkit-outer-spin-button': {
              '-webkit-appearance': 'none',
              margin: 0,
            },
            '& input[type=number]::-webkit-inner-spin-button': {
              '-webkit-appearance': 'none',
              margin: 0,
            },
          }}
        />
      </Paper>
      <Paper sx={{ p: '5px', m: '5px' }}>
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          width={'50px'}
          height={'50px'}
        >
          <polyline
            points="10,155 100,100 190,155"
            fill="none"
            stroke="#000000"
            strokeWidth={1}
            fillRule="evenodd"
          />
        </svg>{' '}
        <TextField
          label={'Xi Cleft'}
          defaultValue={Meridian.Xi_Cleft}
          InputProps={{
            inputProps: {
              maxLength: 4,
              style: { textAlign: 'center' },
            },
          }}
          sx={{
            m: '0px 5px',
            maxWidth: '200px',
            '& input[type=number]': {
              '-moz-appearance': 'textfield',
            },
            '& input[type=number]::-webkit-outer-spin-button': {
              '-webkit-appearance': 'none',
              margin: 0,
            },
            '& input[type=number]::-webkit-inner-spin-button': {
              '-webkit-appearance': 'none',
              margin: 0,
            },
          }}
        />
      </Paper>
      <Paper sx={{ p: '5px', m: '5px' }}>
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          width={'50px'}
          height={'50px'}
        >
          <polyline
            points="10,155 100,100 190,155"
            fill="none"
            stroke="#000000"
            strokeWidth={1}
            fillRule="evenodd"
          />
          <polyline
            points="10,45 100,100 190,45"
            fill="none"
            stroke="#000000"
            strokeWidth={1}
            fillRule="evenodd"
          />
        </svg>{' '}
        <TextField
          label={'Front Mu'}
          defaultValue={Meridian.Front_Mu}
          InputProps={{
            inputProps: {
              maxLength: 4,
              style: { textAlign: 'center' },
            },
          }}
          sx={{
            m: '0px 5px',
            maxWidth: '200px',
            '& input[type=number]': {
              '-moz-appearance': 'textfield',
            },
            '& input[type=number]::-webkit-outer-spin-button': {
              '-webkit-appearance': 'none',
              margin: 0,
            },
            '& input[type=number]::-webkit-inner-spin-button': {
              '-webkit-appearance': 'none',
              margin: 0,
            },
          }}
        />
      </Paper>
      <Paper sx={{ p: '5px', m: '5px' }}>
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          width={'50px'}
          height={'50px'}
        >
          <polyline
            points="10,155 100,100 190,155"
            fill="none"
            stroke="#000000"
            strokeWidth={1}
            fillRule="evenodd"
          />
          <polyline
            points="10,45 100,100 190,45"
            fill="none"
            stroke="#000000"
            strokeWidth={1}
            fillRule="evenodd"
          />
          <circle
            cx="100"
            cy="50"
            r="10"
            fill="none"
            stroke="#000000"
            strokeWidth={1}
            fillRule="evenodd"
          />
          <circle
            cx="100"
            cy="150"
            r="10"
            fill="none"
            stroke="#000000"
            strokeWidth={1}
            fillRule="evenodd"
          />
        </svg>{' '}
        <TextField
          label={'Back Shu'}
          defaultValue={Meridian.Back_Shu}
          InputProps={{
            inputProps: {
              maxLength: 4,
              style: { textAlign: 'center' },
            },
          }}
          sx={{
            m: '0px 5px',
            maxWidth: '200px',
            '& input[type=number]': {
              '-moz-appearance': 'textfield',
            },
            '& input[type=number]::-webkit-outer-spin-button': {
              '-webkit-appearance': 'none',
              margin: 0,
            },
            '& input[type=number]::-webkit-inner-spin-button': {
              '-webkit-appearance': 'none',
              margin: 0,
            },
          }}
        />
      </Paper>
    </Box>
  );
};

export default OtherPoints;
