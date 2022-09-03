import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setUser } from '../../store/userReducer';
import { TextField, Box, Button, Typography } from '@mui/material';
import { Navigate } from 'react-router-dom';
import { RootState } from '../../store';

function SignIn() {
  const [name, setName] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const user = useAppSelector((state: RootState) => state.user?.token);
  const dispatch = useAppDispatch();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.length) {
      setError(true);
      return;
    } else {
      setError(false);
      const token = (Math.random() + 1).toString(36).substring(7);
      dispatch(setUser({ name, token }));
    }
  };

  const onBlur = () => {
    if (!name.length) {
      setError(true);
    } else {
      setError(false);
    }
  };
  if (Boolean(user)) {
    return <Navigate to="/chat-room" replace={true} />;
  }
  return (
    <Box
      sx={{
        mx: 2,
        my: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
      }}
    >
      <Typography variant="h4" component="h4" textAlign="center" mb={5}>
        Welcome
      </Typography>
      <form onSubmit={onSubmit}>
        <TextField
          fullWidth
          id="outlined-basic"
          label="Username"
          variant="outlined"
          onChange={(e) => setName(e.target.value)}
          onBlur={onBlur}
          sx={{ mb: 2 }}
          error={error}
          helperText={error && 'Please enter valid name'}
        />
        <Button
          fullWidth
          type="submit"
          variant="contained"
          disabled={!name.length}
        >
          Enter Room 🚀
        </Button>
      </form>
    </Box>
  );
}

export default SignIn;
