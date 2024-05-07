import { Box } from '@mui/material';
import ShuPointBox from './ShuPointBox';
import Meridians from './Meridians';
import { useState } from 'react';
import HouseGraphic from './HouseGraphic';

const elementParams: {
  w: string;
  h: string;
  element: 'Fire' | 'Wood' | 'Earth' | 'Water' | 'Metal';
}[] = [
  { w: '50%', h: '12%', element: 'Fire' },
  { w: '13%', h: '42.5%', element: 'Wood' },
  { w: '87%', h: '42.5%', element: 'Earth' },
  { w: '23%', h: '87%', element: 'Water' },
  { w: '77%', h: '87%', element: 'Metal' },
];

const ShuPoints = ({ meridian }: { meridian: string }) => {
  const [Meridian] = useState(Meridians[meridian]!);

  return (
    <Box
      p={'20px'}
      position={'relative'}
      boxSizing={'border-box'}
      sx={{
        xs: {
          maxWidth: 'calc(min(100vw, 100svh) - 40px)',
          maxHeight: 'calc(min(100vw, 100svh) - 40px)',
        },
        lg: {
          maxWidth: '500px',
          maxHeight: '500px',
        },
      }}
    >
      {(() => {
        const elements = [];
        for (let i = 0; i < elementParams.length; i++)
          elements.push(
            <ShuPointBox
              {...elementParams[i]}
              key={i}
              category={Meridian.category}
            ></ShuPointBox>
          );
        return elements;
      })()}
      <HouseGraphic MeridianName={Meridian.name} />
    </Box>
  );
};

export default ShuPoints;
