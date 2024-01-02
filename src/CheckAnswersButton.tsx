import { Button, Typography } from '@mui/material';
import { useContext, useState } from 'react';
import UserInputContext from './userInput';

const CheckAnswersButton = () => {
  const { checkIfAllAnswered, checkAnswers } = useContext(UserInputContext)!;

  const [hasCheckedAnswers, setHasCheckedAnswers] = useState(false);

  return (
    <Button
      variant="contained"
      color="primary"
      onClick={() => {
        checkAnswers();
        setHasCheckedAnswers(true);
      }}
      disabled={
        (checkIfAllAnswered() && !hasCheckedAnswers) || hasCheckedAnswers
      }
    >
      <Typography p={'10px 15px'} variant="h6">
        Check Answers
      </Typography>
    </Button>
  );
};

export default CheckAnswersButton;
