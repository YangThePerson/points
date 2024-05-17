import React, { useState } from 'react';
import Meridians from './Meridians';
import HouseAndPointsLayout from './HouseAndPointsLayout';
import { Box, Button, Typography } from '@mui/material';

const ChannelPicker = () => {
  const [ChosenMeridion, setChosenMeridian] = useState('');

  return (
    <>
      {!ChosenMeridion && (
        <Box
          p={'20px'}
          position={'relative'}
          maxWidth={'100vw'}
          display={'flex'}
          flexDirection={'column'}
          flexWrap={'wrap'}
          alignItems={'center'}
          justifyContent={'center'}
        >
          <Typography variant="h4" m={'10px'} fontWeight={600}>
            Choose a channel
          </Typography>
          <Box display={'grid'} gridTemplateColumns={'repeat(2, 1fr)'}>
            {Object.keys(Meridians).map((key) => (
              <Button
                key={key}
                sx={{
                  p: '3px 35px',
                  m: '5px',
                }}
                size="large"
                variant="contained"
                onClick={() => setChosenMeridian(key)}
              >
                <Typography p={'10px 15px'} variant="h6">
                  {key}
                </Typography>
              </Button>
            ))}
          </Box>
        </Box>
      )}
      {ChosenMeridion && (
        <HouseAndPointsLayout meridian={ChosenMeridion}></HouseAndPointsLayout>
      )}
    </>
  );
};

export default ChannelPicker;
