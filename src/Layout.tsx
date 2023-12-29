import { Box } from '@mui/material';
import ShuPoints from './ShuPoints';
import OtherPoints from './OtherPoints';
import { UserInputProvider } from './userInput';

function Layout({ meridian }: { meridian: string }) {
  return (
    <UserInputProvider meridian={meridian}>
      <Box
        className="Layout"
        display={'flex'}
        flexDirection={'row-reverse'}
        justifyContent={'space-around'}
        position={'relative'}
      >
        <ShuPoints meridian={meridian}></ShuPoints>
        <OtherPoints></OtherPoints>
      </Box>
      <button onClick={() => {}}>clickme</button>
    </UserInputProvider>
  );
}

export default Layout;
