import { useState } from 'react';
import { Box, IconButton, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

import MessageBox from '../../components/MessageBox';
import NavHeader from '../../components/NavHeader';

function Chat() {
  const [message, setMessage] = useState<string>('');

  const onSubmit: (e: React.FormEvent<HTMLFormElement>) => void = (e) => {
    e.preventDefault();
    if (!message.length) {
      return;
    }
    console.log(message);
    setMessage('');
  };

  const onLogout: () => void = () => {
    console.log('logging out...');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        position: 'relative',
      }}
    >
      <NavHeader onLogout={onLogout} />
      <Box
        sx={{ height: 'calc(100vh - 64px - 88px)', p: 2, overflowY: 'scroll' }}
      >
        <MessageBox ownerName="Emmanuel" time="4:15pm" message="Hello world" />
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
