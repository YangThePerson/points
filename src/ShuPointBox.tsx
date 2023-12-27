import { Box, TextField } from '@mui/material';

const ShuPointBox = ({
  w,
  h,
  element,
  value,
}: {
  w: string | number;
  h: string | number;
  element: string;
  value: number;
}) => {
  return (
    <Box
      position={'absolute'}
      top={h}
      left={w}
      sx={{
        transform: 'translate(-50%, -50%)',
      }}
    >
      <TextField
        defaultValue={value}
        onKeyDown={(e) => {
          if (!e.key.match(/[0-9]|(Backspace)/)) e.preventDefault();
        }}
        label={element}
        id={`$${element}`}
        InputProps={{
          inputProps: {
            maxLength: 2,
            type: 'numeric',
            style: { textAlign: 'center' },
          },
        }}
        sx={{
          maxWidth: '100px',
          '& input[type=number]': {
            '-moz-appearance': 'textfield',
          },
          '& input[type=number]::-webkit-outer-spin-button': {
            '-webkit-appearance': 'none',
            margin: 0,
          },
          '& input[type=number]::-webkit-inner-spin-button': {
            '-webkit-appearance': 'none',
            margin: 0,
          },
        }}
      />
    </Box>
  );
};

export default ShuPointBox;
