import { Box, TextField } from '@mui/material';
import { useContext } from 'react';
import UserInputContext from './userInput';
import ElementToShuPoint from './ElementToShuPoint';

const ShuPointBox = ({
  w,
  h,
  element,
  category,
}: {
  w: string | number;
  h: string | number;
  element: 'Wood' | 'Fire' | 'Earth' | 'Metal' | 'Water';
  category: 'Yin' | 'Yang';
}) => {
  const { setPoint } = useContext(UserInputContext)!;

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
        autoComplete="off"
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
            onInput: (e) => {
              setPoint(
                ElementToShuPoint({ element: element, category: category }),
                e.currentTarget.value
              );
            },
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
