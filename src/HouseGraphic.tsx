import { Box, Typography } from '@mui/material';

const HouseGraphic = ({ MeridianName }: { MeridianName: string }) => {
  return (
    <>
      <Typography
        variant="h2"
        fontWeight="900"
        fontFamily={'Open Sans'}
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        {MeridianName}
      </Typography>
      <Box
        margin={{ xs: '0px', lg: '80px 120px' }}
        width={{
          xs: 'min(calc(min(100vw, 100svh) - 40px) - 40px, 500px)',
          lg: `500px`,
        }}
        height={{
          xs: 'min(calc(min(100vw, 100svh) - 40px) - 40p, 500px)',
          lg: `500px`,
        }}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
          style={{
            width: '100%',
            height: '100%',
          }}
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
    </>
  );
};

export default HouseGraphic;
