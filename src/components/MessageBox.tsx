import { Paper, Typography } from '@mui/material';
import { RootState } from '../store';
import { useAppSelector } from '../store/hooks';
type Message = {
  ownerId: string;
  ownerName: string;
  message: string;
  time: string;
  messageRef: React.RefObject<HTMLDivElement>;
};

const MessageBox: React.FC<Message> = ({
  ownerId,
  ownerName,
  message,
  time,
  messageRef,
}) => {
  const userToken = useAppSelector((state: RootState) => state.user?.token);

  return (
    <Paper
      key={Math.random() * 5}
      sx={{
        minWidth: 180,
        maxWidth: 220,
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        ml: ownerId === userToken ? 'auto' : '',
        mr: ownerId !== userToken ? 'auto' : '',
        mb: 3,
      }}
    >
      <Typography variant="body2" textAlign="left" fontWeight="bold" mb={1}>
        {ownerId === userToken ? 'You' : ownerName}
      </Typography>
      <Typography variant="body2" textAlign="left" mb={0.5}>
        {message}
      </Typography>
      <Typography variant="body2" textAlign="right" fontWeight="bold">
        {time}
      </Typography>
      <div ref={messageRef}></div>
    </Paper>
  );
};

export default MessageBox;
