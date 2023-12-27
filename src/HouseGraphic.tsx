import { Typography } from '@mui/material';
import React from 'react';

const HouseGraphic = ({ MeridianName }: { MeridianName: string }) => {
  return (
    <>
      <Typography
        variant="h2"
        fontWeight="900"
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        {MeridianName}
      </Typography>
      <svg
        width="500px"
        height="500px"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
        style={{ margin: '80px 120px' }}
      >
        <polygon
          points="100,10 190,80 160,190 40,190 10,80"
          fill="none"
          stroke="#7c7c7c"
          strokeWidth={0.25}
          fillRule="evenodd"
        />
      </svg>
    </>
  );
};

export default HouseGraphic;
