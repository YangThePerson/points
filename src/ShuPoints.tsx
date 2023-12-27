import { Box, Typography } from '@mui/material';
import ShuPointBox from './ShuPointBox';
import Meridians from './Meridians';
import { useEffect, useState } from 'react';
import ElementToShuPoint from './ElementToShuPoint';

const ShuPoints = ({ meridian }: { meridian: string }) => {
  const [Meridian, setMeridian] = useState(Meridians[meridian]!);

  return (
    <Box p={'20px'} position={'relative'}>
      <ShuPointBox
        w={'50%'}
        h={'12%'}
        element="Fire"
        value={Number(
          Meridian[
            ElementToShuPoint({ category: Meridian.category, element: 'Fire' })
          ].slice(2)
        )}
      ></ShuPointBox>
      <ShuPointBox
        w={'13%'}
        h={'42.5%'}
        element="Wood"
        value={Number(
          Meridian[
            ElementToShuPoint({ category: Meridian.category, element: 'Wood' })
          ].slice(2)
        )}
      ></ShuPointBox>
      <ShuPointBox
        w={'87%'}
        h={'42.5%'}
        element="Earth"
        value={Number(
          Meridian[
            ElementToShuPoint({ category: Meridian.category, element: 'Earth' })
          ].slice(2)
        )}
      ></ShuPointBox>
      <ShuPointBox
        w={'23%'}
        h={'87%'}
        element="Water"
        value={Number(
          Meridian[
            ElementToShuPoint({ category: Meridian.category, element: 'Water' })
          ].slice(2)
        )}
      ></ShuPointBox>
      <ShuPointBox
        w={'77%'}
        h={'87%'}
        element="Metal"
        value={Number(
          Meridian[
            ElementToShuPoint({ category: Meridian.category, element: 'Metal' })
          ].slice(2)
        )}
      ></ShuPointBox>
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
        {Meridian.name}
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
    </Box>
  );
};

export default ShuPoints;
