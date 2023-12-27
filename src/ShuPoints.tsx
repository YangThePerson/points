import { Box } from '@mui/material';
import ShuPointBox from './ShuPointBox';
import Meridians from './Meridians';
import { useState } from 'react';
import ElementToShuPoint from './ElementToShuPoint';
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
    <Box p={'20px'} position={'relative'}>
      {(() => {
        const elements = [];
        for (let i = 0; i < elementParams.length; i++)
          elements.push(
            <ShuPointBox
              {...elementParams[i]}
              value={Number(
                Meridian[
                  ElementToShuPoint({
                    category: Meridian.category,
                    element: elementParams[i].element,
                  })
                ].slice(2)
              )}
            ></ShuPointBox>
          );
        return elements;
      })()}
      <HouseGraphic MeridianName={Meridian.name} />
    </Box>
  );
};

export default ShuPoints;
