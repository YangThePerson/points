import { Box } from '@mui/material';
import svgPointSymbols from './svgPointSymbols';
import OtherPointBox from './OtherPointBox';

const OtherPoints = () => {
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
          elements.push(<OtherPointBox category={category}></OtherPointBox>);
        return elements;
      })()}
    </Box>
  );
};

export default OtherPoints;
