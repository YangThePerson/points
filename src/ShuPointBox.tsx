import { Box, TextField } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
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
  const { setPoint, AnswerStates } = useContext(UserInputContext)!;

  const [isAnswered, setIsAnswered] = useState(false);
  useEffect(() => {
    setIsAnswered(
      !!(
        AnswerStates[
          ElementToShuPoint({ element: element, category: category })
        ] < 2
      )
    );
  }, [AnswerStates, setIsAnswered, category, element]);

  return (
    <>
      <Box
        position={'absolute'}
        top={h}
        left={w}
        minWidth={'100px'}
        bgcolor={'white'}
        sx={{
          transform: 'translate(-50%, -50%)',
        }}
      >
        <TextField
          {...(isAnswered && {
            color: AnswerStates[
              ElementToShuPoint({ element: element, category: category })
            ]
              ? 'success'
              : 'error',
            focused: true,
          })}
          autoComplete="off"
          onKeyDown={(e) => {
            if (!e.key.match(/[0-9]|(Backspace)/)) e.preventDefault();
          }}
          label={element}
          id={`$${element}`}
          InputLabelProps={{
            style: { backgroundColor: 'white' },
          }}
          InputProps={{
            readOnly: isAnswered,
            inputProps: {
              maxLength: 2,
              inputMode: 'numeric',
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
    </>
  );
};

export default ShuPointBox;
