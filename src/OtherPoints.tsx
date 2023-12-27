import { Box, Paper, TextField } from '@mui/material';
import React, { useState } from 'react';
import Meridians from './Meridians';
import svgPointSymbols from './svgPointSymbols';

const OtherPoints = ({ meridian }: { meridian: string }) => {
  const [Meridian] = useState(Meridians[meridian]!);

  return (
    <Box
      p={'20px'}
      position={'relative'}
      height="660px"
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
    >
      {(() => {
        const elements = [];
        for (const category in svgPointSymbols)
          elements.push(
            <Paper sx={{ p: '5px', m: '5px' }} key={category}>
              <svg
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                width={'50px'}
                height={'50px'}
              >
                {svgPointSymbols[category]}
              </svg>
              <TextField
                label={category.replace(/_/gim, ' ')}
                id={`${category}`}
                defaultValue={Meridian[category]}
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
          );
        return elements;
      })()}
    </Box>
  );
};

export default OtherPoints;
