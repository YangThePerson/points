import { Box } from '@mui/material';
import ShuPoints from './ShuPoints';
import OtherPoints from './OtherPoints';
import { UserInputProvider } from './userInput';
import CheckAnswersButton from './CheckAnswersButton';

function Layout({ meridian }: { meridian: string }) {
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
        <CheckAnswersButton />
      </Box>
    </UserInputProvider>
  );
}

export default Layout;
