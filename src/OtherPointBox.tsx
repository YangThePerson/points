import { Paper, TextField } from '@mui/material';
import svgPointSymbols from './svgPointSymbols';
import { useContext, useEffect, useState } from 'react';
import UserInputContext from './userInput';

const OtherPointBox = ({ category }: { category: string }) => {
  const { setPoint, AnswerStates } = useContext(UserInputContext)!;

  const [isAnswered, setIsAnswered] = useState(false);
  useEffect(() => {
    setIsAnswered(!!(AnswerStates[category] < 2));
  }, [AnswerStates, setIsAnswered, category]);

  return (
    <Paper sx={{ p: '5px', m: '5px' }} key={category}>
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        width={'50px'}
        height={'50px'}
      >
        {svgPointSymbols[category]}
      </svg>
      <TextField
        {...(isAnswered && {
          color: AnswerStates[category] ? 'success' : 'error',
          focused: true,
        })}
        autoComplete="off"
        label={category.replace(/_/gim, ' ')}
        id={`$${category}`}
        InputProps={{
          readOnly: isAnswered,
          inputProps: {
            onInput: (e) => {
              setPoint(category, e.currentTarget.value);
            },
            maxLength: 5,
            style: { textAlign: 'center' },
          },
        }}
        sx={{
          m: '0px 5px',
          maxWidth: '200px',
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
    </Paper>
  );
};

export default OtherPointBox;
