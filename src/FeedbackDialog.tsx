import { useCallback, useContext, useState } from 'react';
import UserInputContext from './userInput';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Link,
  Paper,
  PaperProps,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
  useTheme,
} from '@mui/material';
import Draggable from 'react-draggable';
import Meridians from './Meridians';
import CloseIcon from '@mui/icons-material/Close';

function PaperComponent(props: PaperProps) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

const FeedbackDialog = ({ meridian }: { meridian: string }) => {
  const { palette } = useTheme();

  const { AnswerStates } = useContext(UserInputContext)!;
  const hasCheckedAnswers = useCallback(() => {
    return !Object.values(AnswerStates).includes(2);
  }, [AnswerStates]);

  const [isShowingDialog, setIsShowingDialog] = useState(false);

  return (
    <>
      {hasCheckedAnswers() && (
        <>
          <Link
            variant="button"
            underline="hover"
            component="button"
            onClick={() => {
              setIsShowingDialog(true);
            }}
          >
            View Correct Answer
          </Link>
          <Dialog
            open={isShowingDialog}
            onClose={() => {
              setIsShowingDialog(false);
            }}
            scroll={'paper'}
            PaperComponent={PaperComponent}
            sx={{ userSelect: 'none' }}
          >
            <DialogTitle
              style={{ cursor: 'move' }}
              id="draggable-dialog-title"
              fontWeight={900}
              bgcolor={palette.success.light}
              color={'white'}
              display={'flex'}
              flexDirection={'row'}
              justifyContent={'space-between'}
              alignItems={'center'}
            >
              Correct Answer
              <IconButton
                size="small"
                sx={{ color: 'white' }}
                onClick={() => {
                  setIsShowingDialog(false);
                }}
              >
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent dividers={true} sx={{ p: '0px' }}>
              <TableContainer>
                <Table size="small">
                  <TableBody>
                    {Object.keys(Meridians[meridian]).map((key, index) => (
                      <>
                        {index >= 3 && (
                          <TableRow
                            sx={{
                              '&:last-child td, &:last-child th': { border: 0 },
                            }}
                            key={key}
                          >
                            <TableCell>
                              <Typography
                                variant="body1"
                                fontWeight={600}
                                padding={'0px 20px 0px 60px'}
                              >
                                {key.replace('_', ' ')}
                              </Typography>
                            </TableCell>
                            <TableCell>
                              <Typography
                                variant="body1"
                                padding={'0px 60px 0px 20px'}
                              >
                                {Meridians[meridian][key]}
                              </Typography>
                            </TableCell>
                          </TableRow>
                        )}
                      </>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </DialogContent>
            <DialogActions>
              <Button
                variant="contained"
                color="error"
                onClick={() => {
                  setIsShowingDialog(false);
                }}
              >
                Close
              </Button>
            </DialogActions>
          </Dialog>
        </>
      )}
    </>
  );
};

export default FeedbackDialog;
