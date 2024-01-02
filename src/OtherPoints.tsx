import { Box } from '@mui/material';
import svgPointSymbols from './svgPointSymbols';
import OtherPointBox from './OtherPointBox';

const OtherPoints = () => {
  return (
    <Box
      p={'20px'}
      position={'relative'}
      height={{ xs: 'fit-content', lg: '660px' }}
      maxWidth={'100vw'}
      display={'flex'}
      flexDirection={{ lg: 'column' }}
      flexWrap={'wrap'}
      justifyContent={'center'}
    >
      {(() => {
        const elements = [];
        for (const category in svgPointSymbols)
          elements.push(<OtherPointBox category={category}></OtherPointBox>);
        return elements;
      })()}
    </Box>
  );
};

export default OtherPoints;
