import { Button, Typography } from '@mui/material';
import { useContext } from 'react';
import UserInputContext from './userInput';

const CheckAnswersButton = () => {
  const { checkIfAllAnswered, checkAnswers } = useContext(UserInputContext)!;

  return (
    <Button
      variant="contained"
      color="primary"
      onClick={checkAnswers}
      disabled={checkIfAllAnswered()}
    >
      <Typography p={'10px 15px'} variant="h5">
        Check Answers
      </Typography>
    </Button>
  );
};

export default CheckAnswersButton;
