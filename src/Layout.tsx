import { Box } from '@mui/material';
import ShuPoints from './ShuPoints';
import OtherPoints from './OtherPoints';

function Layout({ meridian }: { meridian: string }) {
  return (
    <Box
      className="Layout"
      display={'flex'}
      flexDirection={'row-reverse'}
      justifyContent={'space-around'}
      position={'relative'}
    >
      <ShuPoints meridian={meridian}></ShuPoints>
      <OtherPoints meridian={meridian}></OtherPoints>
    </Box>
  );
}

export default Layout;
