import { Box } from '@mui/material';
import ShuPoints from './ShuPoints';
import OtherPoints from './OtherPoints';
import { UserInputProvider } from './userInput';
import CheckAnswersButton from './CheckAnswersButton';
import FeedbackDialog from './FeedbackDialog';

function HouseAndPointsLayout({ meridian }: { meridian: string }) {
  return (
    <UserInputProvider meridian={meridian}>
      <Box
        width={'100%'}
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
        marginBottom={'10px'}
      >
        <Box
          className="Layout"
          display={'flex'}
          flexDirection={{ xs: 'column', lg: 'row-reverse' }}
          justifyContent={{ lg: 'space-around' }}
          alignItems={{ xs: 'center', lg: 'unset' }}
          position={'relative'}
        >
          <ShuPoints meridian={meridian}></ShuPoints>
          <OtherPoints></OtherPoints>
        </Box>
        <Box
          p={'10px'}
          display={'flex'}
          flexDirection={'column'}
          alignItems={'center'}
        >
          <CheckAnswersButton />
          <FeedbackDialog meridian={meridian} />
        </Box>
      </Box>
    </UserInputProvider>
  );
}

export default HouseAndPointsLayout;
