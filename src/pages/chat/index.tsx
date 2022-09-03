import { useEffect, useRef, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { sendMessage } from '../../store/chatReducer';
import { Box, CircularProgress, IconButton, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { RootState } from '../../store';
import { formatAMPM } from '../../utils/timeFormatter';
import NavHeader from '../../components/NavHeader';
import MessageBox from '../../components/MessageBox';

function Chat() {
  const dispatch = useAppDispatch();
  const userToken = useAppSelector((state: RootState) => state.user?.token);
  const userName = useAppSelector((state: RootState) => state.user?.name);
  const messages = useAppSelector((state: RootState) => state.messages);
  const [message, setMessage] = useState<string>('');
  const [sliceStart, setSliceStart] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const messageRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (messageRef?.current?.scrollIntoView) {
      messageRef?.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (messages.messages.length > 25) {
      setSliceStart(messages.messages.length - 25);
    }
    scrollToBottom();
  }, [messages.messages]);

  const onSubmit: (e: React.FormEvent<HTMLFormElement>) => void = (e) => {
    e.preventDefault();
    if (!message.length) {
      return;
    }
    dispatch(
      sendMessage({
        message,
        ownerId: userToken,
        ownerName: userName,
        time: formatAMPM(new Date()),
      }),
    );
    setMessage('');
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    // @ts-ignore
    if (e.target.scrollTop === 0) {
      if (messages.messages.length > 25) {
        setLoading(true);
        setTimeout(() => {
          setSliceStart(0);
          setLoading(false);
        }, 1000);
      }
      console.log('reached top!!');
    }
  };

  if (!userToken) {
    return <Navigate to="/" replace={true} />;
  }
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        position: 'relative',
      }}
    >
      <NavHeader />
      {loading && (
        <CircularProgress
          color="inherit"
          size={20}
          sx={{ position: 'absolute', left: '50%', top: 68 }}
        />
      )}
      <Box
        sx={{ height: 'calc(100vh - 64px - 88px)', p: 2, overflowY: 'scroll' }}
        onScroll={handleScroll}
      >
        {messages.messages.length > 0 &&
          [...messages.messages]
            .slice(sliceStart)
            .map(({ message, ownerName, time, ownerId }) => (
              <MessageBox
                key={Math.random() * 5}
                message={message}
                ownerName={ownerName}
                time={time}
                ownerId={ownerId}
                messageRef={messageRef}
              />
            ))}
      </Box>
      <Box sx={{ display: 'flex', p: 2, alignItems: 'center', mt: 'auto' }}>
        <form onSubmit={onSubmit} style={{ display: 'flex', width: '100%' }}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Enter message..."
            variant="outlined"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <IconButton type="submit" data-testid="send">
            <SendIcon color="primary" />
          </IconButton>
        </form>
      </Box>
    </Box>
  );
}

export default Chat;
