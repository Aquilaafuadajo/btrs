import { Paper, Typography } from '@mui/material';
type Message = {
  ownerName: string;
  message: string;
  time: string;
};

const MessageBox: React.FC<Message> = ({ ownerName, message, time }) => (
  <Paper
    key={Math.random() * 5}
    sx={{
      minWidth: 180,
      maxWidth: 220,
      p: 2,
      display: 'flex',
      flexDirection: 'column',
      ml: 'auto',
      mb: 3,
    }}
  >
    <Typography variant="body2" textAlign="left" fontWeight="bold" mb={1}>
      {ownerName}
    </Typography>
    <Typography variant="body2" textAlign="left" mb={0.5}>
      {message}
    </Typography>
    <Typography variant="body2" textAlign="right" fontWeight="bold">
      {time}
    </Typography>
  </Paper>
);

export default MessageBox;
